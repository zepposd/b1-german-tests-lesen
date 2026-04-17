const fs = require('fs');

let content = fs.readFileSync('schreiben_app.js', 'utf8');

const exitLogic = `
function handleExitTarget(url) {
    const key = localStorage.getItem("gemini_api_key");
    if (!key) {
        window.location.href = url;
        return;
    }

    // Step 1 Modal
    const modalHtml = \`
        <div id="exit-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 10000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
            <div style="background: white; border-radius: 12px; width: 100%; max-width: 500px; padding: 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); animation: fadeUp 0.3s ease;">
                <h3 style="margin-top: 0; color: var(--blue-dk); font-size: 1.3rem;">🚪 Kurs beenden / Exit / Έξοδος</h3>
                
                <div id="exit-step-1">
                    <p style="margin-bottom: 8px;">🇩🇪 Möchten Sie Ihren API-Schlüssel aus dem Browser löschen, bevor Sie gehen?</p>
                    <p style="margin-bottom: 8px;">🇬🇧 Do you want to delete your API key from the browser before leaving?</p>
                    <p style="margin-bottom: 20px;">🇬🇷 Θέλετε να διαγράψετε το κλειδί API από τον περιηγητή πριν αποχωρήσετε;</p>
                    
                    <div style="display: flex; gap: 10px; justify-content: flex-end; flex-wrap: wrap;">
                        <button id="btn-exit-keep" class="btn outline" style="border-color: var(--blue-dk); color: var(--blue-dk);">💾 Behalten / Keep</button>
                        <button id="btn-exit-del" class="btn primary" style="background: var(--red); border-color: var(--red);">🗑️ Löschen / Delete</button>
                    </div>
                </div>

                <div id="exit-step-2" class="hidden">
                    <div style="background: #fff3cd; border: 1px solid #ffeeba; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
                        <h4 style="margin-top: 0; margin-bottom: 10px; color: #856404;">⚠️ Sind Sie sicher? / Are you sure? / Σίγουρα;</h4>
                        <ul style="font-size: 0.85rem; padding-left: 20px; color: #856404; margin-bottom: 0;">
                            <li style="margin-bottom:5px;">🇩🇪 Wenn das ein öffentlicher PC ist, kann jemand Ihren Schlüssel nutzen.</li>
                            <li style="margin-bottom:5px;">🇬🇧 If this is a shared PC, someone else might use your key.</li>
                            <li>🇬🇷 Αν ο υπολογιστής είναι κοινόχρηστος, κάποιος μπορεί να χρεώσει το κλειδί σας.</li>
                        </ul>
                    </div>
                    
                    <div style="display: flex; gap: 10px; justify-content: flex-end; flex-wrap: wrap;">
                        <button id="btn-exit-safe" class="btn outline" style="border-color: var(--gray); color: var(--gray);">✅ Sicher, behalten / Keep safely</button>
                        <button id="btn-exit-del-final" class="btn primary" style="background: var(--red); border-color: var(--red);">🗑️ Doch löschen / Actually Delete</button>
                    </div>
                </div>
            </div>
        </div>
    \`;

    const div = document.createElement('div');
    div.innerHTML = modalHtml;
    document.body.appendChild(div);

    document.getElementById('btn-exit-del').onclick = () => {
        localStorage.removeItem("gemini_api_key");
        window.location.href = url;
    };

    document.getElementById('btn-exit-keep').onclick = () => {
        document.getElementById('exit-step-1').style.display = 'none';
        document.getElementById('exit-step-2').classList.remove('hidden');
    };

    document.getElementById('btn-exit-del-final').onclick = () => {
        localStorage.removeItem("gemini_api_key");
        window.location.href = url;
    };

    document.getElementById('btn-exit-safe').onclick = () => {
        window.location.href = url;
    };
}

// Override the dashboard button to use our exit logic
document.addEventListener('DOMContentLoaded', () => {
    const dashBtn = document.getElementById('btn-dashboard');
    if (dashBtn) {
        dashBtn.removeAttribute('onclick');
        dashBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleExitTarget('index.html');
        });
    }
});
`;

if (!content.includes('handleExitTarget')) {
    content = content.replace(/\/\/ Init on load/, exitLogic + '\n// Init on load');
    fs.writeFileSync('schreiben_app.js', content, 'utf8');
    console.log('Exit logic injected successfully.');
} else {
    console.log('Exit logic is already present.');
}
