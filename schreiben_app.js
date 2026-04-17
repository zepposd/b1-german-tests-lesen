// State
let currentSetId = null;
let currentTaskIdx = 0; // 0, 1, 2 for tasks, 3 for summary
let userTexts = ["", "", ""];
let feedbacks = [null, null, null];
let taskDone = [false, false, false];
let checklists = [[], [], []];

let anthropicApiKey = localStorage.getItem("anthropic_api_key") || "";

// DOM Elements
const viewSets = document.getElementById('view-sets');
const viewActiveTask = document.getElementById('view-active-task');
const viewSummary = document.getElementById('view-summary');

const setGrid = document.getElementById('set-grid');
const currentSetTitle = document.getElementById('current-set-title');
const taskSelector = document.getElementById('task-selector');
const taskContent = document.getElementById('task-content');

const btnMenu = document.getElementById('btn-menu');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const footerStatus = document.getElementById('footer-status');

// Helper: Word count
const countWords = t => t.trim() === "" ? 0 : t.trim().split(/\s+/).length;

function init() {
    renderSetGrid();
    showView(viewSets);
    
    // Check API Key
    if (!anthropicApiKey) {
        const key = prompt("Für die KI-Bewertung wird ein Anthropic API Key benötigt.\nBitte geben Sie ihn ein (wird lokal gespeichert):");
        if (key) {
            anthropicApiKey = key;
            localStorage.setItem("anthropic_api_key", key);
        }
    }
}

function renderSetGrid() {
    setGrid.innerHTML = '';
    ALL_SETS.forEach(set => {
        const card = document.createElement('div');
        card.className = 'test-card';
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <div style="background: var(--blue-dk); color: white; width: 30px; height: 30px; border-radius: 7px; display: flex; align-items: center; justify-content: center; font-weight: bold;">${set.id}</div>
                <h3 style="margin: 0; font-size: 1.1rem; color: var(--blue-dk);">${set.thema}</h3>
            </div>
            <p style="font-size: 0.85rem; color: var(--gray); border-top: 1px solid var(--border); padding-top: 10px; margin-top: 10px;">3 Aufgaben · 60 Minuten · mit Redemitteln</p>
        `;
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => startSet(set.id));
        setGrid.appendChild(card);
    });
}

function showView(viewElement) {
    [viewSets, viewActiveTask, viewSummary].forEach(v => v.classList.remove('active'));
    [viewSets, viewActiveTask, viewSummary].forEach(v => v.classList.add('hidden'));
    
    viewElement.classList.remove('hidden');
    viewElement.classList.add('active');
}

btnMenu.addEventListener('click', () => {
    if(confirm("Wollen Sie wirklich zur Übersicht zurückkehren? Ungespeicherte Texte könnten verloren gehen.")) {
        handleBack();
    }
});

function handleBack() {
    currentSetId = null;
    init();
}

function handleRestart() {
    userTexts = ["", "", ""];
    feedbacks = [null, null, null];
    taskDone = [false, false, false];
    checklists = [[], [], []];
    currentTaskIdx = 0;
    renderCurrentTask();
    showView(viewActiveTask);
}

function startSet(setId) {
    currentSetId = setId;
    currentTaskIdx = 0;
    userTexts = ["", "", ""];
    feedbacks = [null, null, null];
    taskDone = [false, false, false];
    
    // Initialize checklists
    checklists = TASK_CONFIGS.map(cfg => Array(cfg.checks.length).fill(false));
    
    const set = ALL_SETS.find(s => s.id === setId);
    currentSetTitle.innerHTML = `Satz ${set.id} &middot; ${set.thema}`;
    
    renderCurrentTask();
    showView(viewActiveTask);
    window.scrollTo(0, 0);
}

function renderTaskSelectors() {
    taskSelector.innerHTML = '';
    TASK_CONFIGS.forEach((cfg, idx) => {
        const btn = document.createElement('button');
        btn.className = 'part-btn';
        if (idx === currentTaskIdx) btn.classList.add('active');
        if (taskDone[idx]) btn.style.background = 'var(--success)';
        if (taskDone[idx]) btn.style.color = 'white';
        btn.textContent = `${idx + 1}`;
        btn.onclick = () => {
            currentTaskIdx = idx;
            renderCurrentTask();
        };
        taskSelector.appendChild(btn);
    });
}

function updateNavButtons() {
    renderTaskSelectors();
    btnPrev.disabled = currentTaskIdx === 0;
    footerStatus.textContent = currentTaskIdx < 3 ? `Aufgabe ${currentTaskIdx + 1} von 3` : 'Zusammenfassung';
    
    if (currentTaskIdx === 2) {
        btnNext.textContent = 'Zur Übersicht →';
    } else {
        btnNext.textContent = 'Weiter →';
    }
}

btnPrev.addEventListener('click', () => {
    if (currentTaskIdx > 0) {
        currentTaskIdx--;
        currentTaskIdx === 3 ? renderSummary() : renderCurrentTask();
    }
});

btnNext.addEventListener('click', () => {
    if (currentTaskIdx < 2) {
        currentTaskIdx++;
        renderCurrentTask();
    } else if (currentTaskIdx === 2) {
        currentTaskIdx = 3;
        renderSummary();
    }
});

function renderCurrentTask() {
    const set = ALL_SETS.find(s => s.id === currentSetId);
    const cfg = TASK_CONFIGS[currentTaskIdx];
    const data = currentTaskIdx === 0 ? set.aufgabe1 : currentTaskIdx === 1 ? set.aufgabe2 : set.aufgabe3;
    
    // Redemittel HTML
    let redemittelHtml = `
        <div class="redemittel-container" style="margin-bottom: 1rem; border: 1px solid var(--blue-lt); border-radius: 8px; overflow: hidden;">
            <div class="redemittel-header" onclick="this.nextElementSibling.classList.toggle('hidden');" style="background: var(--blue-lt); padding: 10px 15px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 600; color: var(--blue-md); font-size: 0.9rem; text-transform: uppercase;">
                <span>💬 Redemittel ein-/ausblenden</span>
                <span>▾</span>
            </div>
            <div class="redemittel-content hidden" style="background: #f8fbff; padding: 15px;">
                ${data.redemittel.map(r => `<div style="font-size: 0.9rem; margin-bottom: 5px; padding-bottom: 5px; border-bottom: 1px solid var(--border);"><span style="color: var(--orange); font-weight: bold; margin-right: 5px;">•</span>${r}</div>`).join('')}
            </div>
        </div>
    `;

    // Situation & Quote
    let sitHtml = '';
    if (data.situation) sitHtml += `<div style="background: white; border-left: 4px solid var(--orange); padding: 15px; margin-bottom: 15px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.05);"><div style="font-size: 0.75rem; text-transform: uppercase; color: var(--orange); font-weight: bold; margin-bottom: 5px;">Situation</div>${data.situation}</div>`;
    if (data.meinung) sitHtml += `<div style="background: var(--blue-lt); padding: 15px; margin-bottom: 15px; border-radius: 8px; color: var(--blue-dk); font-style: italic;"><p style="margin-bottom: 5px;">${data.meinung}</p><span style="font-size: 0.75rem; font-weight: 600; color: var(--blue-md); font-style: normal;">— Online-Diskussionsbeitrag</span></div>`;
    if (data.punkte) sitHtml += `<ul style="list-style: none; padding: 0; margin-bottom: 15px;">${data.punkte.map(p => `<li style="padding: 5px 0; border-bottom: 1px solid var(--border);"><span style="color: var(--orange); font-weight: bold; margin-right: 8px;">→</span>${p}</li>`).join('')}</ul>`;
    if (data.aufgabe) sitHtml += `<div style="background: white; border: 1px solid var(--border); padding: 15px; margin-bottom: 15px; border-radius: 8px;">${data.aufgabe}</div>`;

    // Checklist
    let checksHtml = `<div style="background: white; border: 1px solid var(--border); border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.03);">
        <div style="font-size: 0.75rem; font-weight: bold; text-transform: uppercase; color: var(--blue-md); margin-bottom: 10px;">✓ Selbstkontrolle</div>
        ${cfg.checks.map((c, i) => `
            <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; cursor: pointer;">
                <input type="checkbox" onchange="toggleCheck(${currentTaskIdx}, ${i})" ${checklists[currentTaskIdx][i] ? 'checked' : ''} style="width: 16px; height: 16px; accent-color: var(--success);">
                <span class="chk-text" style="font-size: 0.9rem; color: ${checklists[currentTaskIdx][i] ? 'var(--success)' : 'var(--gray)'}; text-decoration: ${checklists[currentTaskIdx][i] ? 'line-through' : 'none'};">${c}</span>
            </label>
        `).join('')}
    </div>`;

    let html = `
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
            <div style="background: var(--orange); color: white; width: 45px; height: 45px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">${currentTaskIdx + 1}</div>
            <div>
                <h3 style="margin: 0; font-size: 1.2rem; color: var(--blue-dk); font-family: Georgia, serif;">${cfg.title}</h3>
                <span style="display: inline-block; background: var(--blue-lt); color: var(--blue-md); font-size: 0.75rem; padding: 3px 8px; border-radius: 12px; font-weight: bold; margin-top: 5px;">⏱ ${cfg.time}</span>
            </div>
        </div>

        ${sitHtml}
        <p style="font-size: 0.85rem; color: var(--gray); font-style: italic; margin-bottom: 15px;">${cfg.instr}</p>
        
        ${redemittelHtml}

        <textarea id="task-textarea" placeholder="Schreiben Sie hier Ihren Text…" 
            style="width: 100%; min-height: 200px; padding: 15px; border: 2px solid var(--border); border-radius: 8px; font-family: inherit; font-size: 0.95rem; line-height: 1.6; resize: vertical; margin-bottom: 10px; outline: none; transition: border-color 0.2s;"></textarea>

        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
            <span id="word-count" style="font-weight: bold; font-size: 1.1rem; min-width: 30px; text-align: right;">0</span>
            <div style="flex-grow: 1; height: 6px; background: var(--border); border-radius: 4px; overflow: hidden;">
                <div id="word-bar" style="height: 100%; width: 0%; background: var(--gray); transition: all 0.3s;"></div>
            </div>
            <span style="font-size: 0.85rem; color: var(--gray);">/ ca. ${cfg.target} Wörter</span>
        </div>

        ${checksHtml}

        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <button id="btn-evaluate" class="btn" style="background: var(--orange); color: white; border: none; font-weight: bold;">🤖 KI-Bewertung anfordern</button>
            <button id="btn-clear" class="btn" style="background: transparent; color: var(--gray); border: none; font-size: 0.85rem;">Text löschen</button>
        </div>

        <div id="error-msg" style="display: none; background: #fef2f2; border: 1px solid #fca5a5; color: var(--red); padding: 10px; border-radius: 8px; margin-top: 15px; font-size: 0.9rem;"></div>
        
        <div id="loading-spinner" class="hidden" style="display: flex; align-items: center; gap: 15px; padding: 20px; background: white; border: 1px solid var(--border); border-radius: 8px; margin-top: 15px;">
            <div style="width: 26px; height: 26px; border: 3px solid var(--border); border-top-color: var(--orange); border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
            <div>
                <div style="font-weight: bold; font-size: 0.95rem;">Bewertung wird erstellt…</div>
                <div style="font-size: 0.8rem; color: var(--gray);">Die KI analysiert Ihren Text nach Goethe-Kriterien. Das kann einige Sekunden dauern.</div>
            </div>
        </div>

        <div id="feedback-container" style="margin-top: 20px;"></div>
    `;

    taskContent.innerHTML = html;
    updateNavButtons();
    showView(viewActiveTask);
    
    // Attach Listeners
    const textarea = document.getElementById('task-textarea');
    const wordCount = document.getElementById('word-count');
    const wordBar = document.getElementById('word-bar');
    const btnClear = document.getElementById('btn-clear');
    const btnEval = document.getElementById('btn-evaluate');

    // Restore text
    if (userTexts[currentTaskIdx]) {
        textarea.value = userTexts[currentTaskIdx];
        updateWordCount(userTexts[currentTaskIdx], cfg.target);
    }

    textarea.addEventListener('input', (e) => {
        userTexts[currentTaskIdx] = e.target.value;
        updateWordCount(e.target.value, cfg.target);
    });

    textarea.addEventListener('focus', () => textarea.style.borderColor = 'var(--blue-md)');
    textarea.addEventListener('blur', () => textarea.style.borderColor = 'var(--border)');

    btnClear.addEventListener('click', () => {
        if(confirm("Wollen Sie den Text wirklich löschen?")) {
            userTexts[currentTaskIdx] = "";
            checklists[currentTaskIdx] = Array(cfg.checks.length).fill(false);
            feedbacks[currentTaskIdx] = null;
            taskDone[currentTaskIdx] = false;
            renderCurrentTask();
        }
    });

    btnEval.addEventListener('click', () => requestEvaluation(cfg, data));

    // Restore feedback
    if (feedbacks[currentTaskIdx]) {
        renderFeedback(feedbacks[currentTaskIdx]);
    }
}

window.toggleCheck = function(taskIdx, checkIdx) {
    checklists[taskIdx][checkIdx] = !checklists[taskIdx][checkIdx];
    // Re-render checklist visuals
    const labels = taskContent.querySelectorAll('.chk-text');
    if(labels[checkIdx]) {
        labels[checkIdx].style.color = checklists[taskIdx][checkIdx] ? 'var(--success)' : 'var(--gray)';
        labels[checkIdx].style.textDecoration = checklists[taskIdx][checkIdx] ? 'line-through' : 'none';
    }
}

function updateWordCount(text, target) {
    const wc = countWords(text);
    const wordCountEl = document.getElementById('word-count');
    const wordBarEl = document.getElementById('word-bar');
    
    if(!wordCountEl || !wordBarEl) return;
    
    wordCountEl.textContent = wc;
    
    const pct = Math.min(Math.round(wc / target * 100), 125);
    wordBarEl.style.width = pct + '%';
    
    if (wc >= Math.round(target * 0.6) && wc <= Math.round(target * 1.3)) {
        wordCountEl.style.color = 'var(--success)';
        wordBarEl.style.background = 'var(--success)';
    } else if (wc > Math.round(target * 1.3)) {
        wordCountEl.style.color = 'var(--warn)';
        wordBarEl.style.background = 'var(--warn)';
    } else {
        wordCountEl.style.color = 'var(--red)';
        wordBarEl.style.background = 'var(--red)';
    }
}

async function requestEvaluation(cfg, data) {
    const text = userTexts[currentTaskIdx];
    const wc = countWords(text);
    const errorMsg = document.getElementById('error-msg');
    
    if (wc < 10) {
        errorMsg.textContent = "Bitte schreiben Sie zuerst Ihren Text (mindestens 10 Wörter).";
        errorMsg.style.display = "block";
        return;
    }
    
    if (!anthropicApiKey) {
        const key = prompt("Bitte geben Sie Ihren Anthropic API Key ein:");
        if (!key) return;
        anthropicApiKey = key;
        localStorage.setItem("anthropic_api_key", key);
    }
    
    errorMsg.style.display = "none";
    document.getElementById('loading-spinner').classList.remove('hidden');
    document.getElementById('btn-evaluate').disabled = true;
    document.getElementById('btn-evaluate').style.opacity = "0.5";
    
    // Prepare prompt
    let ctx = "";
    if (currentTaskIdx === 0) ctx = `Aufgabe: persönliche E-Mail (~80 Wörter). Thema: ${ALL_SETS.find(s=>s.id===currentSetId).thema}.\nSituation: ${data.situation}\nDrei Leitpunkte: ${data.punkte.join(" / ")}`;
    else if (currentTaskIdx === 1) ctx = `Aufgabe: Meinungsbeitrag (~80 Wörter). Thema: ${ALL_SETS.find(s=>s.id===currentSetId).thema}.\nOnline-Beitrag: "${data.meinung}"`;
    else ctx = `Aufgabe: formelle E-Mail (~40 Wörter). Thema: ${ALL_SETS.find(s=>s.id===currentSetId).thema}.\nSituation: ${data.situation}\nAufgabe: ${data.aufgabe}`;
    
    const promptTxt = `${ctx}\n\nABGEGEBENER TEXT (${wc} Wörter):\n"""\n${text}\n"""\n\nAntworte AUSSCHLIESSLICH mit JSON (kein Markdown, keine Backticks):\n{"grades":[{"criterion":"Erfüllung","grade":"B","comment":"..."},{"criterion":"Kohärenz","grade":"A","comment":"..."},{"criterion":"Wortschatz","grade":"C","comment":"..."},{"criterion":"Strukturen","grade":"B","comment":"..."}],"positives":["..."],"improvements":["..."],"tips":["..."],"overallComment":"...","correctedVersion":"..."}`;
    
    try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST", 
            headers: { 
                "Content-Type": "application/json",
                "x-api-key": anthropicApiKey,
                "anthropic-version": "2023-06-01",
                "anthropic-dangerous-direct-browser-access": "true"
            },
            body: JSON.stringify({
                model: "claude-3-5-sonnet-20241022",
                max_tokens: 1000,
                system: "Du bist ein erfahrener Deutschlehrer und Prüfer für das Goethe-Zertifikat B1. Bewerte nach den vier Kriterien: ERFÜLLUNG, KOHÄRENZ, WORTSCHATZ, STRUKTUREN. Notensskala A–E (wobei A=Sehr gut, E=Ungenügend). Antworte NUR mit gültigem JSON, ohne Erklärungen.",
                messages: [{ role: "user", content: promptTxt }]
            })
        });
        
        const resData = await res.json();
        if (!res.ok) throw new Error(resData.error?.message || `HTTP ${res.status}`);
        
        let raw = resData.content[0].text;
        raw = raw.replace(/```json/g, '').replace(/```/g, '').trim();
        
        const fb = JSON.parse(raw);
        feedbacks[currentTaskIdx] = fb;
        taskDone[currentTaskIdx] = true;
        renderFeedback(fb);
        updateNavButtons(); // to update green check in header
        
    } catch (e) {
        errorMsg.textContent = `Fehler bei der KI-Bewertung: ${e.message}\n(Tipp: Prüfen Sie ob Ihr API Key korrekt ist)`;
        errorMsg.style.display = "block";
    } finally {
        const lSp = document.getElementById('loading-spinner');
        if(lSp) lSp.classList.add('hidden');
        const bEv = document.getElementById('btn-evaluate');
        if(bEv) { bEv.disabled = false; bEv.style.opacity = "1"; }
    }
}

function renderFeedback(fb) {
    const container = document.getElementById('feedback-container');
    if (!container || !fb) return;
    
    const colors = { A: 'var(--success)', B: 'var(--blue-md)', C: 'var(--warn)', D: '#ea580c', E: 'var(--red)' };
    const labels = { A: "Sehr gut", B: "Gut", C: "Befriedigend", D: "Ausreichend", E: "Ungenügend" };
    
    let html = `
    <div style="background: white; border-radius: 12px; border: 1px solid var(--border); box-shadow: 0 4px 15px rgba(0,0,0,0.05); overflow: hidden; animation: fadeUp 0.4s ease;">
        <div style="background: linear-gradient(135deg, var(--blue-dk), var(--blue-md)); padding: 15px 20px; color: white;">
            <h3 style="margin: 0; font-family: Georgia, serif; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;"><span>📝</span> KI-Bewertung (Goethe-Institut B1)</h3>
        </div>
        <div style="padding: 20px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 20px;">
                ${fb.grades?.map(g => `
                    <div style="background: var(--cream); border: 1px solid var(--border); border-radius: 8px; padding: 12px; text-align: center;">
                        <div style="font-size: 0.7rem; font-weight: bold; color: var(--gray); text-transform: uppercase;">${g.criterion}</div>
                        <div style="font-size: 2rem; font-family: Georgia; font-weight: bold; color: ${colors[g.grade] || 'black'};">${g.grade}</div>
                        <div style="font-size: 0.8rem; color: var(--gray);">${labels[g.grade]}</div>
                    </div>
                `).join('') || ''}
            </div>
            
            ${fb.positives?.length ? `<div style="margin-bottom: 15px;"><h4 style="color: var(--success); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 5px;">✅ Stärken</h4>${fb.positives.map(p => `<div style="font-size: 0.9rem; margin-bottom: 4px;">• ${p}</div>`).join('')}</div>` : ''}
            ${fb.improvements?.length ? `<div style="margin-bottom: 15px;"><h4 style="color: var(--orange); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 5px;">⚠️ Verbesserungsvorschläge</h4>${fb.improvements.map(p => `<div style="font-size: 0.9rem; margin-bottom: 4px;">• ${p}</div>`).join('')}</div>` : ''}
            ${fb.tips?.length ? `<div style="margin-bottom: 15px;"><h4 style="color: var(--blue-md); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 5px;">💡 Sprachliche Hinweise</h4>${fb.tips.map(p => `<div style="font-size: 0.9rem; margin-bottom: 4px;">• ${p}</div>`).join('')}</div>` : ''}
            
            ${fb.overallComment ? `<div style="border-top: 1px solid var(--border); padding-top: 15px; margin-top: 15px;"><h4 style="color: var(--blue-dk); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 5px;">📋 Gesamtkommentar</h4><p style="font-size: 0.9rem; line-height: 1.5;">${fb.overallComment}</p></div>` : ''}
            
            ${fb.correctedVersion ? `<div style="border-top: 1px solid var(--border); padding-top: 15px; margin-top: 15px;"><h4 style="color: var(--success); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 5px;">✏️ Musterformulierung</h4><div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 15px; font-size: 0.9rem; line-height: 1.6; white-space: pre-wrap;">${fb.correctedVersion}</div></div>` : ''}
        </div>
    </div>
    `;
    container.innerHTML = html;
}

function renderSummary() {
    const set = ALL_SETS.find(s => s.id === currentSetId);
    document.getElementById('summary-subtitle').textContent = `Satz ${set.id}: ${set.thema}`;
    
    const allDone = taskDone.every(Boolean);
    document.getElementById('summary-icon').textContent = allDone ? "🏆" : "📋";
    document.getElementById('summary-title').textContent = allDone ? "Übungssatz abgeschlossen!" : "Zusammenfassung";
    
    const grid = document.getElementById('summary-grid');
    grid.innerHTML = '';
    
    TASK_CONFIGS.forEach((cfg, i) => {
        const wc = countWords(userTexts[i]);
        const card = document.createElement('div');
        card.style = "background: white; border-radius: 10px; border: 1px solid var(--border); padding: 15px; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.05);";
        card.innerHTML = `
            <div style="background: var(--orange); color: white; width: 26px; height: 26px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem; margin-bottom: 10px;">${i + 1}</div>
            <div style="font-weight: bold; font-size: 0.95rem; color: var(--blue-dk); margin-bottom: 5px;">${cfg.title}</div>
            <div style="font-size: 0.8rem; color: ${taskDone[i] ? 'var(--success)' : (wc > 0 ? 'var(--warn)' : 'var(--gray)')}; font-weight: 600;">
                ${taskDone[i] ? `✓ Bewertet · ${wc} Wörter` : wc > 0 ? `${wc} Wörter · Nicht bewertet` : "Noch nicht begonnen"}
            </div>
        `;
        card.onclick = () => {
            currentTaskIdx = i;
            renderCurrentTask();
        };
        grid.appendChild(card);
    });
    
    updateNavButtons();
    showView(viewSummary);
    window.scrollTo(0, 0);
}

document.getElementById('btn-restart').addEventListener('click', handleBack);
document.getElementById('btn-new-attempt').addEventListener('click', handleRestart);

// Init on load
document.addEventListener('DOMContentLoaded', init);
