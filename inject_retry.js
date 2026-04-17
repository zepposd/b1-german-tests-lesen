const fs = require('fs');

let content = fs.readFileSync('schreiben_app.js', 'utf8');

// We need to inject `window.evalRetryCount = 0;` and `window.evalRetryTimeout = null;` at the top of the file
if (!content.includes('window.evalRetryCount')) {
    content = content.replace(/let geminiApiKey = localStorage.getItem\("gemini_api_key"\) \|\| "";/, 'let geminiApiKey = localStorage.getItem("gemini_api_key") || "";\nwindow.evalRetryCount = 0;\nwindow.evalRetryTimeout = null;');
}

// Modify the requestEvaluation signature to accept an isRetry param (optional)
content = content.replace(/async function requestEvaluation\(cfg, data\) {/, 'async function requestEvaluation(cfg, data, isRetry = false) {\n    if (!isRetry) window.evalRetryCount = 0;\n    if (window.evalRetryTimeout) clearTimeout(window.evalRetryTimeout);');


// Find the catch block in requestEvaluation
const oldCatchStr = `    } catch (e) {
        errorMsg.innerHTML = \`
            <strong>Fehler bei der externen Google KI-Bewertung:</strong><br>
            \${e.message}<br><br>
            <span style="font-size: 0.85rem; color: var(--text-main);">Mögliche Lösungen:</span>
            <ul style="margin-top: 5px; padding-left: 20px; font-size: 0.85rem; color: var(--text-main);">
                <li>Verwenden Sie stattdessen den Button <strong>"Musterlösung anzeigen"</strong>, um fehlerfrei fortzufahren.</li>
                <li>Versuchen Sie es in ein paar Minuten erneut (falls die Server überlastet sind).</li>
                <li><a href="#" id="link-reset-key" style="color: var(--blue-dk); font-weight: bold; text-decoration: underline;">Klicken Sie hier, um Ihren API-Schlüssel zu ändern oder neu einzugeben.</a></li>
            </ul>
        \`;
        errorMsg.style.display = "block";
        
        // Add event listener to the reset link
        document.getElementById('link-reset-key').onclick = (ev) => {
            ev.preventDefault();
            localStorage.removeItem("gemini_api_key");
            geminiApiKey = "";
            errorMsg.style.display = "none";
            requestEvaluation(cfg, data); // this will trigger the modal
        };
    } finally {
        const lSp = document.getElementById('loading-spinner');
        if(lSp) lSp.classList.add('hidden');
        const bEv = document.getElementById('btn-evaluate');
        if(bEv) { bEv.disabled = false; bEv.style.opacity = "1"; }
    }`;

const newCatchStr = `    } catch (e) {
        if (e.message === "OVERLOADED_SIGNAL" && window.evalRetryCount < 2) {
            window.evalRetryCount++;
            let secondsLeft = 10;
            
            errorMsg.innerHTML = \`
                <div style="background: #fff3cd; color: #856404; padding: 15px; border-radius: 8px; border: 1px solid #ffeeba;">
                    <div style="font-weight:bold; margin-bottom: 8px;">🔄 Server überlastet / Servers Overloaded / Υπερφόρτωση</div>
                    <ul style="font-size: 0.85rem; padding-left: 20px; margin-bottom: 15px;">
                        <li>🇩🇪 Alle Modelle sind überlastet. Neuer Versuch in <strong id="retry-timer">\${secondsLeft}</strong>... (Versuch \${window.evalRetryCount} von 2)</li>
                        <li>🇬🇧 All AI models are extremely busy. Retrying in <strong id="retry-timer2">\${secondsLeft}</strong>s... (Attempt \${window.evalRetryCount} of 2)</li>
                        <li>🇬🇷 Τα μοντέλα είναι απασχολημένα. Νέα προσπάθεια σε <strong id="retry-timer3">\${secondsLeft}</strong>... (Προσπάθεια \${window.evalRetryCount} από 2)</li>
                    </ul>
                    <button id="btn-cancel-retry" style="background:#dc3545; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer; font-size:0.8rem;">Vorgang abbrechen / Cancel</button>
                </div>
            \`;
            errorMsg.style.display = "block";
            
            const cancelBtn = document.getElementById('btn-cancel-retry');
            
            window.evalRetryTimeout = setInterval(() => {
                secondsLeft--;
                const t1 = document.getElementById('retry-timer');
                const t2 = document.getElementById('retry-timer2');
                const t3 = document.getElementById('retry-timer3');
                if(t1) t1.textContent = secondsLeft;
                if(t2) t2.textContent = secondsLeft;
                if(t3) t3.textContent = secondsLeft;
                
                if (secondsLeft <= 0) {
                    clearInterval(window.evalRetryTimeout);
                    const bEv = document.getElementById('btn-evaluate');
                    if(bEv) { bEv.disabled = true; bEv.style.opacity = "0.6"; }
                    errorMsg.style.display = "none";
                    requestEvaluation(cfg, data, true);
                }
            }, 1000);
            
            cancelBtn.onclick = () => {
                clearInterval(window.evalRetryTimeout);
                errorMsg.style.display = "none";
                const bEv = document.getElementById('btn-evaluate');
                if(bEv) { bEv.disabled = false; bEv.style.opacity = "1"; }
                const lSp = document.getElementById('loading-spinner');
                if(lSp) lSp.classList.add('hidden');
            };
            return; // Exit early, dont hit finally block yet so button stays disabled
        }

        // Standard Error processing
        let displayError = e.message;
        if (e.message === "OVERLOADED_SIGNAL") {
             displayError = "Alle Server sind derzeit extrem überlastet. Automatische Versuche sind fehlgeschlagen.";
        }
        
        errorMsg.innerHTML = \`
            <strong>Fehler bei der externen Google KI-Bewertung:</strong><br>
            \${displayError}<br><br>
            <span style="font-size: 0.85rem; color: var(--text-main);">Mögliche Lösungen:</span>
            <ul style="margin-top: 5px; padding-left: 20px; font-size: 0.85rem; color: var(--text-main);">
                <li>Verwenden Sie stattdessen den Button <strong>"Musterlösung anzeigen"</strong>, um fehlerfrei fortzufahren.</li>
                <li>Versuchen Sie es in ein paar Minuten erneut (falls die Server überlastet sind).</li>
                <li><a href="#" id="link-reset-key" style="color: var(--blue-dk); font-weight: bold; text-decoration: underline;">Klicken Sie hier, um Ihren API-Schlüssel zu ändern oder neu einzugeben.</a></li>
            </ul>
        \`;
        errorMsg.style.display = "block";
        
        document.getElementById('link-reset-key').onclick = (ev) => {
            ev.preventDefault();
            localStorage.removeItem("gemini_api_key");
            geminiApiKey = "";
            errorMsg.style.display = "none";
            requestEvaluation(cfg, data); 
        };
    } finally {
        if (!window.evalRetryTimeout || window.evalRetryCount >= 2 || errorMsg.style.display !== "none") {
            const lSp = document.getElementById('loading-spinner');
            if(lSp) lSp.classList.add('hidden');
            const bEv = document.getElementById('btn-evaluate');
            if(bEv) { bEv.disabled = false; bEv.style.opacity = "1"; }
        }
    }`;

// Modify the error throwing logic right before raw text parsing
const oldErrorThrowStr = `        if (!res) throw new Error("Kein API Fetch ausgeführt.");
        if (!res.ok) {
            // Is it an auth error?
            if (res.status === 400 || res.status === 403) {
                throw new Error("API-Schlüssel ist anscheinend ungültig oder abgelaufen.");
            }
            throw new Error(lastError);
        }`;

const newErrorThrowStr = `        if (!res) throw new Error("Kein API Fetch ausgeführt.");
        if (!res.ok) {
            if (res.status === 400 || res.status === 403) {
                throw new Error("API-Schlüssel ist anscheinend ungültig oder abgelaufen.");
            }
            // Check if the final model failed due to overload or not found
            const isOverloadedLast = lastError.toLowerCase().includes("high demand") || res.status === 503 || res.status === 429;
            const isNotFoundLast = lastError.toLowerCase().includes("not found") || lastError.toLowerCase().includes("not supported");
            
            if (isOverloadedLast || isNotFoundLast) {
               throw new Error("OVERLOADED_SIGNAL");
            }
            throw new Error(lastError);
        }`;


// Using substring replacement
content = content.split(oldErrorThrowStr).join(newErrorThrowStr);
content = content.split(oldCatchStr).join(newCatchStr);

fs.writeFileSync('schreiben_app.js', content, 'utf8');
console.log('Retry injected');

