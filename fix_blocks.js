const fs = require('fs');

try {
    let content = fs.readFileSync('schreiben_app.js', 'utf8');

    // Fix the syntax error in translateFeedback
    content = content.replace(
        /if \(\!res \|\| \!res\.ok\) let dispErrTrans = lastError\.includes\("not found"\) \? "Die Übersetzungs-Server sind überlastet\." : lastError;\n        throw new Error\("Übersetzung fehlgeschlagen: " \+ dispErrTrans\);/,
        'if (!res || !res.ok) {\n            let dispErrTrans = lastError.includes("not found") ? "Die Übersetzungs-Server sind überlastet." : lastError;\n            throw new Error("Übersetzung fehlgeschlagen: " + dispErrTrans);\n        }'
    );

    // Also check requestEvaluation, it probably has the same issue!
    content = content.replace(
        /if \(\!res \|\| \!res\.ok\) let dispErr = lastError\.includes\("not found"\) \? "Die Server sind derzeit extrem überlastet\. Bitte probieren Sie es in wenigen Minuten erneut \(Code 503\/429\)\." : \(lastError \|\| "Unbekannter Fehler"\);\n        throw new Error\(dispErr\);/,
        'if (!res || !res.ok) {\n            let dispErr = lastError.includes("not found") ? "Die Server sind derzeit extrem überlastet. Bitte probieren Sie es in wenigen Minuten erneut (Code 503/429)." : (lastError || "Unbekannter Fehler");\n            throw new Error(dispErr);\n        }'
    );

    fs.writeFileSync('schreiben_app.js', content, 'utf8');
    console.log('Fixed syntax error blocks');
} catch (e) {
    console.error(e);
}
