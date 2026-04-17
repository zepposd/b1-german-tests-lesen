const fs = require('fs');

try {
    let content = fs.readFileSync('schreiben_app.js', 'utf8');

    // 1. Add Buttons to Header
    content = content.replace(
        /<h3 style="margin: 0; font-family: Georgia, serif; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;"><span>📝<\/span> KI-Bewertung \(Goethe-Institut B1\)<\/h3>/g,
        `<h3 style="margin: 0; font-family: Georgia, serif; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;"><span>📝</span> KI-Bewertung (B1)</h3>
            <div style="display: flex; gap: 8px;">
                \${!fb.translated_el ? \`<button id="btn-trans-el" onclick="translateFeedback('el')" style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); color: white; border-radius: 6px; padding: 4px 10px; font-size: 0.8rem; cursor: pointer; transition: 0.2s;">🇬🇷 Übersetzung EL</button>\` : ''}
                \${!fb.translated_en ? \`<button id="btn-trans-en" onclick="translateFeedback('en')" style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); color: white; border-radius: 6px; padding: 4px 10px; font-size: 0.8rem; cursor: pointer; transition: 0.2s;">🇬🇧 Übersetzung EN</button>\` : ''}
            </div>`
    );

    // 2. Adjust header flexbox
    content = content.replace(
        /color: white;">\s*<h3 style="margin: 0; font-family: Georgia, serif; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;"><span>📝<\/span> KI-Bewertung \(B1\)<\/h3>/, 
        'color: white; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">\n            <h3 style="margin: 0; font-family: Georgia, serif; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;"><span>📝</span> KI-Bewertung (B1)</h3>'
    );

    // 3. Map signature fixes
    content = content.replace(/positives\.map\(p =>/g, 'positives.map((p, i) =>');
    content = content.replace(/improvements\.map\(p =>/g, 'improvements.map((p, i) =>');
    content = content.replace(/tips\.map\(p =>/g, 'tips.map((p, i) =>');

    // 4. Inject translations inside mapped arrays
    content = content.replace(/• \$\{p\}<\/div>`\)\.join\(''\)<\/div>`/g, (match, offset, str) => {
        if (str.substring(0, offset).includes('Stärken')) {
            return `• \${p}\${fb.translated_el?.positives?.[i] ? \`<div style="font-size: 0.85rem; color: var(--gray); margin-top: 2px; padding-left: 10px;">↳ 🇬🇷 \${fb.translated_el.positives[i]}</div>\` : ''}\${fb.translated_en?.positives?.[i] ? \`<div style="font-size: 0.85rem; color: var(--gray); margin-top: 2px; padding-left: 10px;">↳ 🇬🇧 \${fb.translated_en.positives[i]}</div>\` : ''}</div>\`).join('')}</div>\``;
        }
        if (str.substring(0, offset).includes('Verbesserungsvorschläge')) {
            return `• \${p}\${fb.translated_el?.improvements?.[i] ? \`<div style="font-size: 0.85rem; color: var(--gray); margin-top: 2px; padding-left: 10px;">↳ 🇬🇷 \${fb.translated_el.improvements[i]}</div>\` : ''}\${fb.translated_en?.improvements?.[i] ? \`<div style="font-size: 0.85rem; color: var(--gray); margin-top: 2px; padding-left: 10px;">↳ 🇬🇧 \${fb.translated_en.improvements[i]}</div>\` : ''}</div>\`).join('')}</div>\``;
        }
        if (str.substring(0, offset).includes('Sprachliche Hinweise')) {
            return `• \${p}\${fb.translated_el?.tips?.[i] ? \`<div style="font-size: 0.85rem; color: var(--gray); margin-top: 2px; padding-left: 10px;">↳ 🇬🇷 \${fb.translated_el.tips[i]}</div>\` : ''}\${fb.translated_en?.tips?.[i] ? \`<div style="font-size: 0.85rem; color: var(--gray); margin-top: 2px; padding-left: 10px;">↳ 🇬🇧 \${fb.translated_en.tips[i]}</div>\` : ''}</div>\`).join('')}</div>\``;
        }
        return match;
    });

    // 5. Inject translation in overallComment
    content = content.replace(
        /<p style="font-size: 0.9rem; line-height: 1.5;">\$\{fb.overallComment\}<\/p><\/div>`/g,
        `<p style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 5px;">\${fb.overallComment}</p>\${fb.translated_el?.overallComment ? \`<p style="font-size: 0.85rem; color: var(--gray); margin-top: 5px;">↳ 🇬🇷 \${fb.translated_el.overallComment}</p>\` : ''}\${fb.translated_en?.overallComment ? \`<p style="font-size: 0.85rem; color: var(--gray); margin-top: 5px;">↳ 🇬🇧 \${fb.translated_en.overallComment}</p>\` : ''}</div>\``
    );

    fs.writeFileSync('schreiben_app.js', content, 'utf8');
    console.log('Script updated successfully');
} catch (e) {
    console.error(e);
}
