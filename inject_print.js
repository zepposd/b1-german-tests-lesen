const fs = require('fs');

let content = fs.readFileSync('schreiben_app.js', 'utf8');

// 1. Inject Print button into renderCurrentTask
// After btn-show-model, add btn-print-simple
if (!content.includes('btn-print-simple')) {
    content = content.replace(
        /<button id="btn-show-model".*?<\/button>/,
        `$& <button id="btn-print-simple" onclick="printExercise(false)" class="btn outline" style="border-color: var(--gray); color: var(--gray); font-weight: bold; padding-left:15px; padding-right:15px;"><span style="margin-right:5px;">🖨️</span> Drucken / PDF</button>`
    );
}

// 2. Inject Print button into renderFeedback
// In the translation buttons div
if (!content.includes('onclick="printExercise(true)"')) {
    content = content.replace(
        /<div style="display: flex; gap: 8px;">/,
        `<div style="display: flex; gap: 8px; flex-wrap: wrap;">\n                <button onclick="printExercise(true)" style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); color: white; border-radius: 6px; padding: 4px 10px; font-size: 0.8rem; cursor: pointer; transition: 0.2s;">🖨️ PDF / Drucken</button>`
    );
}

// 3. Define printExercise function
const printFunc = `
window.printExercise = function(withKI) {
    const set = ALL_SETS.find(s => s.id === currentSetId);
    if (!set) return;
    const cfg = TASK_CONFIGS[currentTaskIdx];
    const data = currentTaskIdx === 0 ? set.aufgabe1 : currentTaskIdx === 1 ? set.aufgabe2 : set.aufgabe3;
    const studentText = document.getElementById('task-textarea')?.value || "Kein Text eingegeben.";
    
    let sitHtml = '';
    if (data.situation) sitHtml += \`<div><strong>Situation:</strong> \${data.situation}</div><br>\`;
    if (data.meinung) sitHtml += \`<div><em>"\${data.meinung}"</em></div><br>\`;
    if (data.punkte) sitHtml += \`<ul>\${data.punkte.map(p => \`<li>\${p}</li>\`).join('')}</ul>\`;
    if (data.aufgabe) sitHtml += \`<div>\${data.aufgabe}</div><br>\`;

    let evaluationHtml = '';
    if (withKI) {
        const fbContainer = document.getElementById('feedback-container');
        if (fbContainer && fbContainer.innerHTML.trim() !== '') {
            evaluationHtml = fbContainer.innerHTML;
            // Clean up UI buttons from print output
            evaluationHtml = evaluationHtml.replace(/<button.*?<\\/button>/g, '');
        } else {
            evaluationHtml = '<p>KI-Bewertung wurde noch nicht durchgeführt.</p>';
        }
    } else {
        let checksHtml = '<h3>✓ Selbstkontrolle</h3><ul style="list-style:none; padding:0;">';
        cfg.checks.forEach((c, i) => {
            const isChecked = checklists[currentTaskIdx] && checklists[currentTaskIdx][i];
            checksHtml += \`<li>[\${isChecked ? 'X' : ' '}] \${c}</li>\`;
        });
        checksHtml += '</ul>';
        evaluationHtml = checksHtml;
    }

    const printWin = window.open('', '_blank');
    printWin.document.write(\`
        <html>
        <head>
            <title>Goethe B1 Schreiben - \${set.thema} (Aufgabe \${currentTaskIdx + 1})</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; color: #333; line-height: 1.5; }
                h1, h2, h3 { color: #1e3a8a; }
                .box { border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin-bottom: 20px; background: #fafafa; }
                .text-box { white-space: pre-wrap; background: #fff; border: 1px solid #ccc; padding: 20px; font-family: monospace; font-size: 14px; }
                @media print { body { padding: 0; } }
            </style>
        </head>
        <body>
            <h1>Goethe-Zertifikat B1: Schriftlicher Ausdruck</h1>
            <h2>Satz \${set.id}: \${set.thema} — Aufgabe \${currentTaskIdx + 1} (\${cfg.title})</h2>
            
            <div class="box">
                \${sitHtml}
            </div>

            <h3>Text des Schülers:</h3>
            <div class="text-box">\${studentText}</div>

            <div style="margin-top: 30px;">
                \${evaluationHtml}
            </div>
            
            <script>
                setTimeout(() => { window.print(); window.close(); }, 500);
            </script>
        </body>
        </html>
    \`);
    printWin.document.close();
};
`;

if (!content.includes('window.printExercise')) {
    content = content.replace(/\/\/ Init on load/, printFunc + '\n// Init on load');
    fs.writeFileSync('schreiben_app.js', content, 'utf8');
    console.log('Print functionality injected.');
} else {
    console.log('Already injected.');
}
