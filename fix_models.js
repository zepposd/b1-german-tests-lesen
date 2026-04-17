const fs = require('fs');

try {
    let content = fs.readFileSync('schreiben_app.js', 'utf8');

    // Replace ANY fallback array with the flash-only array!
    content = content.replace(/let modelsToTry = \[.*?\];/g, 'let modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash-latest", "gemini-1.5-flash-8b"];');
    
    // In requestEvaluation, catching lastError
    content = content.replace(/throw new Error\(lastError \|\| "Unbekannter Fehler"\);/g, 'let dispErr = lastError.includes("not found") ? "Die Server sind derzeit extrem überlastet. Bitte probieren Sie es in wenigen Minuten erneut (Code 503/429)." : (lastError || "Unbekannter Fehler");\n        throw new Error(dispErr);');

    // In translateFeedback, catching lastError
    content = content.replace(/throw new Error\("Übersetzung fehlgeschlagen: " \+ lastError\);/g, 'let dispErrTrans = lastError.includes("not found") ? "Die Übersetzungs-Server sind überlastet." : lastError;\n        throw new Error("Übersetzung fehlgeschlagen: " + dispErrTrans);');

    fs.writeFileSync('schreiben_app.js', content, 'utf8');
    console.log('Fixed models arrays successfully!');
} catch (e) {
    console.error(e);
}
