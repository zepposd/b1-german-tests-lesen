const fs = require('fs');

try {
    let content = fs.readFileSync('schreiben_app.js', 'utf8');

    const tFunc = \`
window.translateFeedback = async function(lang) {
    const btn = document.getElementById(\\\`btn-trans-\\\${lang}\\\`);
    if(btn) { btn.textContent = "Lädt..."; btn.disabled = true; btn.style.opacity = "0.6"; }
    
    const fb = feedbacks[currentTaskIdx];
    if(!fb) return;

    if (!geminiApiKey) {
        alert("API Key fehlt. Bitte fordern Sie zuerst eine Bewertung an.");
        if(btn) { btn.textContent = lang === 'el' ? "🇬🇷 Übersetzung EL" : "🇬🇧 Übersetzung EN"; btn.disabled = false; btn.style.opacity = "1"; }
        return;
    }

    const payload = {
        positives: fb.positives || [],
        improvements: fb.improvements || [],
        tips: fb.tips || [],
        overallComment: fb.overallComment || ""
    };

    const targetLang = lang === 'el' ? 'Griechisch (Greek)' : 'Englisch (English)';
    const promptTxt = \\\`Übersetze exakt die Werte des folgenden JSON-Objekts ins \${targetLang}. Lass die JSON-Struktur und die Keys (Schlüssel) komplett unverändert. Antworte NUR im JSON Format. Keine Erklärungen.\\\\n\\\\n\\\` + JSON.stringify(payload);

    try {
        let modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash-latest", "gemini-pro"];
        let res, resData, lastError = "";

        for (let modelName of modelsToTry) {
            const endpoint = \\\`https://generativelanguage.googleapis.com/v1beta/models/\${modelName}:generateContent?key=\\\${geminiApiKey}\\\`;
            res = await fetch(endpoint, {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: promptTxt }] }],
                    generationConfig: { temperature: 0.1, responseMimeType: "application/json" }
                })
            });
            resData = await res.json();
            if (res.ok) break;
            
            lastError = resData.error?.message || "";
            if (lastError.toLowerCase().includes("not found") || lastError.toLowerCase().includes("high demand") || res.status === 503 || res.status === 429) continue;
            break;
        }

        if (!res || !res.ok) throw new Error("Übersetzung fehlgeschlagen: " + lastError);

        let raw = resData.candidates[0].content.parts[0].text;
        raw = raw.replace(/\\\`\\\`\\\`json/g, '').replace(/\\\`\\\`\\\`/g, '').trim();
        const translated = JSON.parse(raw);
        
        if(lang === 'el') fb.translated_el = translated;
        else fb.translated_en = translated;
        
        feedbacks[currentTaskIdx] = fb;
        renderFeedback(fb);

    } catch(e) {
        alert("Fehler bei der Übersetzung: " + e.message);
        if(btn) { btn.textContent = lang === 'el' ? "🇬🇷 Übersetzung EL" : "🇬🇧 Übersetzung EN"; btn.disabled = false; btn.style.opacity = "1"; }
    }
}
\`;

    if (!content.includes('window.translateFeedback')) {
        content = content.replace(/\/\/ Init on load/, tFunc + '\\n// Init on load');
        fs.writeFileSync('schreiben_app.js', content, 'utf8');
        console.log('Function injected successfully');
    } else {
        console.log('Function already exists');
    }
} catch (e) {
    console.error(e);
}
