document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentTest = null;
    let currentPartIndex = 0;
    let userAnswers = {};

    // DOM Elements
    const viewTests = document.getElementById('view-tests');
    const viewActiveTest = document.getElementById('view-active-test');
    const viewResults = document.getElementById('view-results');
    
    const testGrid = document.getElementById('test-grid');
    const currentTestTitle = document.getElementById('current-test-title');
    const testProgress = document.getElementById('test-progress');
    const partSelector = document.getElementById('part-selector');
    const testContent = document.getElementById('test-content');
    
    const btnMenu = document.getElementById('btn-menu');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnEvaluate = document.getElementById('btn-evaluate');
    const btnRestart = document.getElementById('btn-restart');
    const btnPrint = document.getElementById('btn-print');

    // Initialize Menu
    function init() {
        renderTestGrid();
        showView(viewTests);
    }

    function renderTestGrid() {
        testGrid.innerHTML = '';
        testData.forEach((test, index) => {
            const card = document.createElement('div');
            card.className = 'test-card';
            card.innerHTML = `
                <h3>${test.title}</h3>
                <p>30 Aufgaben (Teil 1-5)</p>
                <div style="margin-top: 1rem; color: var(--primary); font-weight: 600;">Starten ➔</div>
            `;
            card.addEventListener('click', () => startTest(test.id));
            testGrid.appendChild(card);
        });
    }

    // Navigation
    function showView(viewElement) {
        [viewTests, viewActiveTest, viewResults].forEach(v => v.classList.remove('active'));
        [viewTests, viewActiveTest, viewResults].forEach(v => v.classList.add('hidden'));
        
        viewElement.classList.remove('hidden');
        viewElement.classList.add('active');
    }

    btnMenu.addEventListener('click', () => {
        if(confirm("Wollen Sie den aktuellen Test wirklich abbrechen?")) {
            init();
        }
    });

    btnRestart.addEventListener('click', () => init());
    btnPrint.addEventListener('click', () => window.print());

    // Test Execution
    function startTest(testId) {
        currentTest = testData.find(t => t.id === testId);
        currentPartIndex = 0;
        userAnswers = {};
        
        currentTestTitle.textContent = currentTest.title;
        renderPartSelectors();
        renderCurrentPart();
        showView(viewActiveTest);
        window.scrollTo(0, 0);
    }

    function renderPartSelectors() {
        partSelector.innerHTML = '';
        currentTest.parts.forEach((part, index) => {
            const btn = document.createElement('button');
            btn.className = 'part-btn';
            btn.textContent = `Teil ${part.part}`;
            btn.onclick = () => {
                currentPartIndex = index;
                renderCurrentPart();
            };
            partSelector.appendChild(btn);
        });
    }

    function updateNavButtons() {
        // Active Part Button
        document.querySelectorAll('.part-btn').forEach((btn, idx) => {
            btn.classList.toggle('active', idx === currentPartIndex);
        });

        // Progress Bar
        const progressPercentage = ((currentPartIndex + 1) / currentTest.parts.length) * 100;
        testProgress.style.width = `${progressPercentage}%`;

        // Prev/Next/Eval Buttons
        btnPrev.disabled = currentPartIndex === 0;
        
        if (currentPartIndex === currentTest.parts.length - 1) {
            btnNext.classList.add('hidden');
            btnEvaluate.classList.remove('hidden');
        } else {
            btnNext.classList.remove('hidden');
            btnEvaluate.classList.add('hidden');
        }
    }

    // Render logic per question type
    function renderCurrentPart() {
        const part = currentTest.parts[currentPartIndex];
        
        let html = `
            <div class="instructions"><strong>Aufgabe:</strong> ${part.instructions}</div>
            <div class="two-column-layout">
                <div class="left-pane reading-text">${part.text}</div>
                <div class="right-pane questions">
        `;

        part.questions.forEach(q => {
            if (part.part === 2) {
                if (q.id === 'q1_7' || q.id === 'q2_7' || q.id === 'q3_7' || q.id === 'q4_7' || q.id === 'q5_7' || q.id === 'q6_7' || q.id === 'q7_7' || q.id === 'q8_7' || q.id === 'q9_7' || q.id === 'q10_7' || q.text.startsWith('7.')) {
                     html += '<h4 style="margin-top: 1rem; color: var(--primary); border-bottom: 2px solid var(--gray-light); padding-bottom: 0.3rem; margin-bottom: 1rem;">Zu Text 1</h4>';
                } else if (q.id === 'q1_10' || q.id === 'q2_10' || q.id === 'q3_10' || q.id === 'q4_10' || q.id === 'q5_10' || q.id === 'q6_10' || q.id === 'q7_10' || q.id === 'q8_10' || q.id === 'q9_10' || q.id === 'q10_10' || q.text.startsWith('10.')) {
                     html += '<h4 style="margin-top: 2rem; color: var(--primary); border-bottom: 2px solid var(--gray-light); padding-bottom: 0.3rem; margin-bottom: 1rem;">Zu Text 2</h4>';
                }
            }

            html += `<div class="question-block" id="block_${q.id}">
                <div class="question-text">${q.text}</div>
                <div class="options">`;
            
            if (q.type === 'tf') {
                html += createRadioOptions(q.id, ['richtig', 'falsch'], userAnswers[q.id]);
            } else if (q.type === 'jn') {
                 html += createRadioOptions(q.id, ['ja', 'nein'], userAnswers[q.id]);
            } else if (q.type === 'abc') {
                html += createABCOptions(q.id, q.options, userAnswers[q.id]);
            } else if (q.type === 'matching') {
                html += createMatchingSelect(q.id, q.options, userAnswers[q.id]);
            }
            
            html += `</div></div>`;
        });

        html += `</div></div>`;
        testContent.innerHTML = html;
        updateNavButtons();
        attachAnswerListeners();
        window.scrollTo(0, 0);
    }

    function createRadioOptions(qId, options, selectedVal) {
        return options.map(opt => `
            <label class="option-label ${selectedVal === opt ? 'selected' : ''}">
                <input type="radio" name="${qId}" value="${opt}" ${selectedVal === opt ? 'checked' : ''}>
                ${opt.charAt(0).toUpperCase() + opt.slice(1)}
            </label>
        `).join('');
    }

    function createABCOptions(qId, options, selectedVal) {
        return options.map(opt => `
            <label class="option-label ${selectedVal === opt.label ? 'selected' : ''}">
                <input type="radio" name="${qId}" value="${opt.label}" ${selectedVal === opt.label ? 'checked' : ''}>
                <strong>${opt.label})</strong> ${opt.text}
            </label>
        `).join('');
    }

    function createMatchingSelect(qId, options, selectedVal) {
        let selectHtml = `<select class="match-select" name="${qId}">
            <option value="">-- Bitte wählen --</option>`;
        options.forEach(opt => {
            selectHtml += `<option value="${opt}" ${selectedVal === opt ? 'selected' : ''}>Anzeige ${opt}</option>`;
        });
        selectHtml += `</select>`;
        return selectHtml;
    }

    function attachAnswerListeners() {
        const inputs = testContent.querySelectorAll('input[type="radio"]');
        inputs.forEach(input => {
            input.addEventListener('change', (e) => {
                userAnswers[e.target.name] = e.target.value;
                // Update selection visual
                const allLabels = e.target.closest('.options').querySelectorAll('.option-label');
                allLabels.forEach(l => l.classList.remove('selected'));
                e.target.closest('.option-label').classList.add('selected');
            });
        });

        const selects = testContent.querySelectorAll('select');
        selects.forEach(select => {
            select.addEventListener('change', (e) => {
                userAnswers[e.target.name] = e.target.value;
            });
        });
    }

    btnPrev.addEventListener('click', () => {
        if (currentPartIndex > 0) {
            currentPartIndex--;
            renderCurrentPart();
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentPartIndex < currentTest.parts.length - 1) {
            currentPartIndex++;
            renderCurrentPart();
        }
    });

    btnEvaluate.addEventListener('click', () => {
        if(Object.keys(userAnswers).length < 30) {
            if(!confirm("Sie haben noch nicht alle Aufgaben gelöst. Trotzdem auswerten?")) {
                return;
            }
        }
        evaluateTest();
    });

    // Evaluation
    function evaluateTest() {
        let score = 0;
        let detailsHtml = '';

        currentTest.parts.forEach(part => {
             let partScore = 0;
             part.questions.forEach(q => {
                 const userAns = userAnswers[q.id];
                 const isCorrect = userAns && userAns.toLowerCase() === q.answer.toLowerCase();
                 if (isCorrect) {
                     score++;
                     partScore++;
                 }
             });
             detailsHtml += `
                <div class="result-part-summary">
                    <span><strong>Teil ${part.part}:</strong> ${part.title}</span>
                    <span>${partScore} / ${part.questions.length}</span>
                </div>
             `;
        });

        
         document.getElementById('final-score').textContent = score;
         
         let detailedQAsHtml = '<h3>Detaillierte Auswertung</h3><div class="qa-list">';
         currentTest.parts.forEach(part => {
             detailedQAsHtml += `<div class="qa-part-title">Teil ${part.part}</div>`;
             part.questions.forEach(q => {
                 const userAns = userAnswers[q.id] || '';
                 const isCorrect = userAns.toLowerCase() === q.answer.toLowerCase();
                 const rowClass = isCorrect ? 'qa-row correct' : 'qa-row incorrect';
                 
                 // Try to grab nice text if ABC options exist
                 let correctText = q.answer.toUpperCase();
                 let userText = userAns ? userAns.toUpperCase() : 'Keine Antwort';
                 
                 if(q.type === 'abc') {
                     const optMatchCorr = q.options.find(o => o.label.toLowerCase() === q.answer.toLowerCase());
                     if(optMatchCorr) correctText += " - " + optMatchCorr.text;
                     
                     if(userAns) {
                         const optMatchUser = q.options.find(o => o.label.toLowerCase() === userAns.toLowerCase());
                         if(optMatchUser) userText += " - " + optMatchUser.text;
                     }
                 }
                 
                 detailedQAsHtml += `
                    <div class="${rowClass}">
                        <div class="qa-question"><strong>${q.text}</strong></div>
                        <div class="qa-answers">
                            <div style="flex:1"><strong>Ihre Antwort:</strong> <span class="qa-ans-badge ${isCorrect ? 'bg-correct' : 'bg-incorrect'}">${userText}</span></div>
                            <div style="flex:1"><strong>Richtige Antwort:</strong> <span class="qa-ans-badge bg-correct">${correctText}</span></div>
                        </div>
                    </div>
                 `;
             });
         });
         detailedQAsHtml += '</div>';

         document.getElementById('detailed-answers').innerHTML = detailedQAsHtml;

        
        const messageEl = document.getElementById('result-message');
        if (score >= 18) { // 60% is passing
            messageEl.textContent = "Herzlichen Glückwunsch! Sie haben bestanden.";
            messageEl.style.color = "var(--success)";
        } else {
            messageEl.textContent = "Leider nicht bestanden. Üben Sie weiter!";
            messageEl.style.color = "var(--error)";
        }

        document.getElementById('results-details').innerHTML = detailsHtml;
        showView(viewResults);
        window.scrollTo(0, 0);
    }

    // Start App
    init();
});
