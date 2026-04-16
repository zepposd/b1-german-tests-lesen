const testData = [
  {
    id: 1,
    title: "Modellsatz 1: Alltag und Gesellschaft",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie den Blog und die E-Mail. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Blog von Michael</h3>
          <p>Hallo Leute, ich muss euch unbedingt von meinem letzten Wochenende erzählen. Wie ihr wisst, bin ich vor kurzem in meine erste eigene Wohnung gezogen. Das Ausziehen bei meinen Eltern war wirklich aufregend, aber ich habe nicht erwartet, dass es so viel Arbeit bedeutet! Am Samstag wollte ich eigentlich entspannen und meine neue Küche einweihen, aber dann fiel plötzlich der Strom aus. Ich stand da im Dunkeln mit meinem halb fertigen Nudelgericht. Zum Glück wusste ich, wo der Sicherungskasten ist. Danach habe ich gemerkt, dass mein Kühlschrank kaputt ist. Was für ein Chaos! Trotzdem fühle ich mich super in meinen eigenen vier Wänden. Es ist toll, nachts Musik hören zu können, ohne dass jemand sagt: „Mach das leiser!“ Wie waren eure ersten Erfahrungen mit der ersten Wohnung?</p>
          <hr/>
          <h3>E-Mail von Sarah an Michael</h3>
          <p>Lieber Michael,<br>
          ich habe gerade deinen Blog-Eintrag gelesen. Herzlichen Glückwunsch zur neuen Wohnung! Das mit dem Strom und dem Kühlschrank tut mir echt leid. Das ist ein furchtbarer Start. Als ich damals in meine erste Wohnung zog, hatte ich wochenlang kein warmes Wasser. Das war im Winter richtig ungemütlich! Du hast geschrieben, dass dein Kühlschrank kaputt ist. Mein Bruder hat letzte Woche einen neuen gekauft und seinen alten noch im Keller stehen. Er funktioniert noch prima und er würde ihn dir sicher billig verkaufen. Melde dich doch mal, wenn du Interesse hast.<br>
          Liebe Grüße, Sarah</p>
        `,
        questions: [
          { id: "q1_1", text: "1. Michael wohnt noch bei seinen Eltern.", type: "tf", answer: "falsch" },
          { id: "q1_2", text: "2. Am Samstag wollte Michael zum ersten Mal in seiner neuen Küche kochen.", type: "tf", answer: "richtig" },
          { id: "q1_3", text: "3. Michael mag es nicht, wenn es laut ist.", type: "tf", answer: "falsch" },
          { id: "q1_4", text: "4. Sarah hatte am Anfang in ihrer Wohnung keine Heizung.", type: "tf", answer: "falsch" },
          { id: "q1_5", text: "5. Sarah hat Michaels Blog-Eintrag gelesen.", type: "tf", answer: "richtig" },
          { id: "q1_6", text: "6. Sarahs Bruder möchte Michael einen Kühlschrank schenken.", type: "tf", answer: "falsch" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Zeitungsmeldung</h3>
          <p><strong>Neue App für den öffentlichen Verkehr</strong><br>
          Die Verkehrsbetriebe der Stadt haben gestern eine neue Smartphone-App vorgestellt. Mit dieser App können Fahrgäste nicht nur Fahrpläne prüfen und Tickets kaufen, sondern auch in Echtzeit sehen, wo sich ihr Bus oder ihre Bahn gerade befindet. Verspätungen werden sofort angezeigt. Ein besonderes Feature: Wenn ein Anschlusszug verpasst wird, schlägt die App automatisch alternative Routen vor. Kritiker merken allerdings an, dass die App auf älteren Smartphones nicht funktioniert und seniorenfreundlichere Alternativen weiterhin fehlen. Die Nutzung der App ist kostenlos, allerdings braucht man für die Ticketfunktion eine Kreditkarte.</p>
          <br>
          <h3>Text 2: Informationsblatt</h3>
          <p><strong>Aktion „Saubere Stadt“</strong><br>
          Liebe Bürgerinnen und Bürger, am kommenden Samstag findet wieder unsere jährliche Aktion „Saubere Stadt“ statt. Wir treffen uns um 9:00 Uhr am Marktplatz. Jedes Jahr sammeln freiwillige Helfer Müll in unseren Parks und an den Straßenrändern. Letztes Jahr haben über 500 Menschen teilgenommen und zusammen vier Tonnen Müll gesammelt. Müllsäcke und Handschuhe werden vom Rathaus gestellt. Nach der Aktion, gegen 13:00 Uhr, sind alle Helfer herzlich zu einem kostenlosen Mittagessen (Suppe und Brot) im Gemeindehaus eingeladen. Wir bitten um eine kurze Anmeldung bis Donnerstag, damit wir das Essen besser planen können.</p>
        `,
        questions: [
          { id: "q2_7", text: "7. Der Text informiert hauptsächlich über ...", type: "abc", options: [{label: "a", text: "eine neue App für den öffentlichen Verkehr."}, {label: "b", text: "den Kauf von neuen Smartphones."}, {label: "c", text: "die Verspätungen aller Bussen in der Stadt."}], answer: "a" },
          { id: "q2_8", text: "8. Was sagen Kritiker über die App?", type: "abc", options: [{label: "a", text: "Sie kostet zu viel Geld."}, {label: "b", text: "Sie ist nicht für alle Handys geeignet."}, {label: "c", text: "Man braucht keine Kreditkarte."}], answer: "b" },
          { id: "q2_9", text: "9. Die Verkehrsbetriebe...", type: "abc", options: [{label: "a", text: "verkaufen jetzt Handys."}, {label: "b", text: "haben eine App präsentiert."}, {label: "c", text: "haben neue Busse gekauft."}], answer: "b" },
          { id: "q2_10", text: "10. Worum geht es in dem Text?", type: "abc", options: [{label: "a", text: "Um den normalen Müll der Stadt."}, {label: "b", text: "Um eine Aktion, bei der Leute zusammen Müll sammeln."}, {label: "c", text: "Um ein tägliches Mittagessen für arme Leute."}], answer: "b" },
          { id: "q2_11", text: "11. Wer bei der Aktion mitmacht,...", type: "abc", options: [{label: "a", text: "muss eigene Müllsäcke mitbringen."}, {label: "b", text: "bekommt etwas zu essen."}, {label: "c", text: "muss für das Mittagessen bezahlen."}], answer: "b" },
          { id: "q2_12", text: "12. Warum soll man sich anmelden?", type: "abc", options: [{label: "a", text: "Weil es nicht genug Handschuhe gibt."}, {label: "b", text: "Weil nicht jeder mitmachen darf."}, {label: "c", text: "Damit genug Essen vorbereitet werden kann."}], answer: "c" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Anzeigen. Finden Sie für jede Situation die passende Anzeige. Es gibt eine Situation, für die keine Anzeige passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Anzeigen</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) Computerkurs für Senioren</strong>. Lernen Sie das Internet kennen! Jeden Mittwochvormittag im Stadtteilzentrum. Kostenlos für Rentner.</li>
            <li class="anzeige-box"><strong>B) Günstige Möbel abzugeben</strong>. Wegen Umzug verkaufe ich mein Sofa (fast neu) und einen Esstisch. Preis verhandelbar. Nur Selbstabholer. Tel: 0176...</li>
            <li class="anzeige-box"><strong>C) Studenten-WG sucht Mitbewohner(in)</strong>. Zimmer (20qm) frei ab 1. Oktober. Wir sind keine Zweck-WG und kochen oft zusammen. Miete 350€ warm.</li>
            <li class="anzeige-box"><strong>D) Sprachschule „Weltweit“</strong>. Intensivkurse in Englisch, Spanisch und Französisch. Nachmittags von 14 bis 18 Uhr. 10% Rabatt für Studenten.</li>
            <li class="anzeige-box"><strong>E) Reparatur-Service Blitz</strong>. Egal ob PC, Smartphone oder Tablet – wir reparieren Ihr Gerät innerhalb von 24 Stunden! Fair & transparent.</li>
            <li class="anzeige-box"><strong>F) Transport und Umzughilfe</strong>. Sie ziehen um und haben kein Auto? Wir helfen günstig. Rufen Sie uns an für ein Angebot!</li>
            <li class="anzeige-box"><strong>G) Tanzschule „Rhythmus“</strong>. Neue Salsa-Kurse für Anfänger am Abend. Keine Vorkenntnisse nötig! Melden Sie sich mit Partner oder allein an.</li>
            <li class="anzeige-box"><strong>H) Suche Nachhilfe in Mathematik</strong>. Bin in der 10. Klasse und brauche Hilfe. Biete im Tausch Hilfe am Computer an.</li>
          </ul>
        `,
        questions: [
          { id: "q3_13", text: "13. Eine Kollegin möchte abends etwas Neues lernen und sich gleichzeitig bewegen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "G" },
          { id: "q3_14", text: "14. Ihr Studium beginnt bald und Sie suchen noch einen Platz zum Wohnen in netter Gesellschaft.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "C" },
          { id: "q3_15", text: "15. Ihr Laptopbildschirm ist kaputt gegangen und Sie müssen am Wochenende eine wichtige Arbeit schreiben.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "E" },
          { id: "q3_16", text: "16. Ein Freund zieht in eine neue Wohnung, aber er hat keinen Führerschein.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "F" },
          { id: "q3_17", text: "17. Ihre Oma (70 Jahre alt) hat ein Tablet geschenkt bekommen, weiß aber nicht, wie man das Internet benutzt.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "A" },
          { id: "q3_18", text: "18. Sie haben eine kleine Wohnung gefunden, haben aber noch keine Stühle und Tische.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "B" },
          { id: "q3_19", text: "19. Sie wollen am Wochenende einen Kochkurs besuchen, um neue Rezepte zu lernen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für ein Verbot von Autos im Stadtzentrum?",
        text: `
          <h3>Diskussionsthema: Sollen Autos im Stadtzentrum verboten werden?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für ein Verbot. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Clara, 28:</strong> Ich finde es furchtbar, wie viel Verkehr wir in der Stadt haben. Man kann kaum atmen vor lauter Abgasen. Wenn die Straßen frei von Autos wären, hätten wir Platz für mehr Bäume und Radwege, das wäre ein Traum!</p>
          <p><strong>21. Thomas, 45:</strong> Ich habe ein Geschäft in der Einkaufsstraße. Wenn die Kunden nicht mehr mit dem Auto kommen können, wie sollen sie dann schwere Sachen transportieren? Das wäre das Ende für viele kleine Läden hier.</p>
          <p><strong>22. Miriam, 33:</strong> Auf jeden Fall! Ich bin letztens in einer Stadt gewesen, wo die ganze Innenstadt nur für Fußgänger ist. Die Atmosphäre dort war wunderbar. Kein Lärm, keine Gefahr für Kinder. Wir sollten das hier auch einführen.</p>
          <p><strong>23. Jürgen, 58:</strong> Für junge Leute auf dem Fahrrad ist das leicht gesagt. Aber ich kann nicht mehr gut laufen und der Bus hält zu weit weg von meiner Arztpraxis im Zentrum. Deshalb brauche ich mein Auto, um in die Stadt zu fahren.</p>
          <p><strong>24. Amira, 22:</strong> Unser öffentlicher Verkehr ist schon jetzt überfüllt und oft verspätet. Wenn man jetzt auch noch die Autofahrer zwingt, auf Bus und Bahn umzusteigen, bricht das System komplett zusammen. Deshalb bin ich absolut dagegen.</p>
          <p><strong>25. Felix, 30:</strong> Ich lebe direkt an einer Hauptstraße im Zentrum. Der Lärm am Flughafen ist nichts dagegen. Ich kann im Sommer nicht mal das Fenster aufmachen. Autofreie Zonen in der Innenstadt müssen so schnell wie möglich kommen.</p>
          <p><strong>26. Petra, 41:</strong> Eigentlich bin ich ja für Umweltschutz, aber in unserer Stadt gibt es außerhalb des Zentrums fast keine Park&Ride-Plätze. Man kann das Auto nicht einfach verbieten, ohne vorher gute Alternativen aufzubauen.</p>
          </div>
        `,
        questions: [
          { id: "q4_20", text: "20. Clara", type: "jn", answer: "ja" },
          { id: "q4_21", text: "21. Thomas", type: "jn", answer: "nein" },
          { id: "q4_22", text: "22. Miriam", type: "jn", answer: "ja" },
          { id: "q4_23", text: "23. Jürgen", type: "jn", answer: "nein" },
          { id: "q4_24", text: "24. Amira", type: "jn", answer: "nein" },
          { id: "q4_25", text: "25. Felix", type: "jn", answer: "ja" },
          { id: "q4_26", text: "26. Petra", type: "jn", answer: "nein" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Hausordnung und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Hausordnung des Studentenwohnheims „Campusblick“</h3>
          <p>Liebe Bewohnerinnen und Bewohner,<br>
          damit das Zusammenleben in unserem Wohnheim für alle 120 Studierenden angenehm ist, bitten wir um Beachtung folgender Regeln:</p>
          <p><strong>Lärm:</strong> Zwischen 22:00 Uhr und 07:00 Uhr sowie sonntags ganztägig gilt die Nachtruhe. In dieser Zeit sind Musik, laute Gespräche und das Benutzen von Waschmaschinen so zu reduzieren, dass die Nachbarn nicht gestört werden.<br>
          <strong>Besuch:</strong> Gäste sind herzlich willkommen. Übernachtungsgäste dürfen maximal drei Nächte im Monat bleiben. Wenn ein Gast länger bleibt, muss dies der Hausverwaltung zwei Tage vorher gemeldet werden. Aus Sicherheitsgründen dürfen Gäste keine eigenen Haustürschlüssel bekommen.<br>
          <strong>Küche und Müll:</strong> Die Gemeinschaftsküchen auf jedem Stockwerk müssen nach Benutzung sofort aufgeräumt werden. Der Müll ist strikt zu trennen (Papier, Plastik, Restmüll). Der Hausmeister kontrolliert jeden Dienstag die Küchen. Werden diese verschmutzt vorgefunden, kann die Küche für drei Tage abgeschlossen werden.<br>
          <strong>Rauchen:</strong> Das Rauchen ist auf den Zimmern und in den Fluren strengstens verboten. Es darf nur draußen vor dem Eingang oder auf dem großen Dachbalkon geraucht werden.</p>
        `,
        questions: [
          { id: "q5_27", text: "27. Wann darf man laute Musik hören?", type: "abc", options: [{label: "a", text: "Am Sonntagnachmittag."}, {label: "b", text: "Zwischen 07:00 und 22:00 Uhr (außer sonntags)."}, {label: "c", text: "Jeden Tag, wenn man die Tür zumacht."}], answer: "b" },
          { id: "q5_28", text: "28. Wenn ein Freund für 5 Tage im Wohnheim übernachten will, ...", type: "abc", options: [{label: "a", text: "braucht er einen eigenen Haustürschlüssel."}, {label: "b", text: "muss man das der Hausverwaltung vorher sagen."}, {label: "c", text: "muss er dafür eine Gebühr bezahlen."}], answer: "b" },
          { id: "q5_29", text: "29. Die Küchen ...", type: "abc", options: [{label: "a", text: "werden vom Hausmeister gereinigt."}, {label: "b", text: "dürfen nur am Dienstag benutzt werden."}, {label: "c", text: "können bei Unsauberkeit geschlossen werden."}], answer: "c" },
          { id: "q5_30", text: "30. Rauchen darf man ...", type: "abc", options: [{label: "a", text: "auf dem Dachbalkon."}, {label: "b", text: "in seinem eigenen Zimmer."}, {label: "c", text: "auf den Fluren, wenn das Fenster offen ist."}], answer: "a" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Modellsatz 2: Arbeit und Beruf",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie den Blog und die E-Mail. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Blog von Lukas</h3>
          <p>Hallo zusammen, ich habe heute die erste Woche meines neuen Praktikums bei einer großen Marketing-Agentur hinter mir. Ich war vorher super nervös, weil ich noch nie in so einem großen Team gearbeitet habe. Am ersten Tag wurde ich von der Personalleiterin durch alle Abteilungen geführt. Jeder hat mich freundlich begrüßt, aber ich konnte mir unmöglich alle Namen merken. Meine erste richtige Aufgabe war es, Präsentationsfolien für ein wichtiges Meeting mit einem Kunden vorzubereiten. Ich habe zwei Tage dafür gebraucht und war ziemlich stolz auf das Ergebnis. Leider hat der Projektmanager dann fast die Hälfte meiner Ideen wieder gestrichen, weil sie angeblich zu teuer in der Umsetzung wären. Das war ein bisschen frustrierend, aber ich lerne hier wirklich viel. Habt ihr ähnliche Erfahrungen bei euren ersten Jobs gemacht?</p>
          <hr/>
          <h3>E-Mail von Mia an Lukas</h3>
          <p>Hallo Lukas,<br>
          ich habe gerade gelesen, wie es bei deinem Praktikum läuft. Zuerst einmal: Mach dir keine Sorgen wegen der gestrichenen Ideen! Das ist in der Arbeitswelt völlig normal und bedeutet nicht, dass deine Vorschläge schlecht waren. Wenn man neu ist, kennt man das Budget der Kunden einfach noch nicht genau. An meinem ersten Job nach dem Studium in einer IT-Firma wollte ich auch gleich das ganze System modernisieren. Mein Chef hat mich damals sehr deutlich gebremst. Wenn du nächste Woche mal Zeit hast, können wir uns gerne auf einen Kaffee treffen und uns austauschen. Ich habe meine Unterlagen von der Agentur, wo du jetzt arbeitest, noch irgendwo herumliegen. Die könnte ich dir mitbringen, vielleicht helfen sie dir weiter.<br>
          Liebe Grüße, Mia</p>
        `,
        questions: [
          { id: "q2_1", text: "1. Lukas kannte das Team bereits vor seinem Praktikum.", type: "tf", answer: "falsch" },
          { id: "q2_2", text: "2. Lukas konnte sich die Namen seiner neuen Kollegen gut merken.", type: "tf", answer: "falsch" },
          { id: "q2_3", text: "3. Lukas hat Präsentationsfolien für ein Kundenmeeting erstellt.", type: "tf", answer: "richtig" },
          { id: "q2_4", text: "4. Der Projektmanager fand alle Ideen von Lukas sehr gut.", type: "tf", answer: "falsch" },
          { id: "q2_5", text: "5. Mia findet es unnormal, dass Vorschläge gestrichen werden.", type: "tf", answer: "falsch" },
          { id: "q2_6", text: "6. Mia möchte sich mit Lukas treffen, um ihm zu helfen.", type: "tf", answer: "richtig" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Artikel aus einem Wirtschaftsmagazin</h3>
          <p><strong>Neue Arbeitsmodelle: Die 4-Tage-Woche im Test</strong><br>
          Immer mehr Unternehmen in Deutschland experimentieren mit der 4-Tage-Woche bei vollem Lohnausgleich. Eine kürzlich durchgeführte Studie mit 50 mittelständischen Firmen zeigte überraschende Ergebnisse: Während die Arbeitszeit um 20 Prozent reduziert wurde, blieb die Produktivität der Mitarbeiter stabil oder stieg sogar leicht an. Experten erklären dies damit, dass die Angestellten konzentrierter arbeiten und Pausenzeiten effektiver nutzen, wenn sie wissen, dass sie ein längeres Wochenende haben. Zudem sanken die Krankmeldungen in den beteiligten Firmen um fast ein Drittel. Dennoch gibt es auch Kritik: In Pflegeberufen oder im Einzelhandel lässt sich das Modell kaum umsetzen, da hier die Anwesenheit der Mitarbeiter zwingend erforderlich ist.</p>
          <br>
          <h3>Text 2: Informationsbroschüre</h3>
          <p><strong>Weiterbildung ist der Schlüssel zum Erfolg</strong><br>
          Der Arbeitsmarkt verändert sich rasant. Durch die Digitalisierung fallen alte Berufe weg, während ständig neue entstehen. Eine Untersuchung der Arbeitsagentur zeigt, dass Menschen, die regelmäßig an Weiterbildungen teilnehmen, ein deutlich geringeres Risiko haben, arbeitslos zu werden. Wir bieten ab sofort ein neues, kostenloses Beratungsprogramm für Berufstätige ab 40 Jahren an. Hier können Sie gemeinsam mit Experten herausfinden, welche Kurse für Ihren Karriereweg sinnvoll sind. Die Beratungen finden immer donnerstags zwischen 15 und 19 Uhr im Bildungszentrum statt. Da die Plätze begrenzt sind, bitten wir um eine telefonische Reservierung spätestens zwei Wochen im Voraus.</p>
        `,
        questions: [
          { id: "q2_7", text: "7. Worüber berichtet der Text?", type: "abc", options: [{label: "a", text: "Die Probleme der 4-Tage-Woche."}, {label: "b", text: "Die positiven Folgen der 4-Tage-Woche."}, {label: "c", text: "Wie viel Geld Mitarbeiter weniger verdienen."}], answer: "b" },
          { id: "q2_8", text: "8. Warum arbeiten Mitarbeiter in der 4-Tage-Woche oft effektiver?", type: "abc", options: [{label: "a", text: "Weil sie mehr kontrolliert werden."}, {label: "b", text: "Weil sie sich auf das verlängerte Wochenende freuen."}, {label: "c", text: "Weil sie längere Pausen machen dürfen."}], answer: "b" },
          { id: "q2_9", text: "9. Wo ist das neue Modell schwer einzuführen?", type: "abc", options: [{label: "a", text: "In Firmen mit mehr als 50 Mitarbeitern."}, {label: "b", text: "In Berufen, wo man immer vor Ort sein muss."}, {label: "c", text: "In Unternehmen, die international arbeiten."}], answer: "b" },
          { id: "q2_10", text: "10. Was ist das Thema von Text 2?", type: "abc", options: [{label: "a", text: "Dass Berufe sich durch neue Technologie schnell verändern."}, {label: "b", text: "Dass nur noch Maschinen arbeiten werden."}, {label: "c", text: "Dass die Arbeitsagentur neue Büros aufbaut."}], answer: "a" },
          { id: "q2_11", text: "11. Um was für ein Programm geht es in der Broschüre?", type: "abc", options: [{label: "a", text: "Um kostenlose Computerkurse für Arbeitslose."}, {label: "b", text: "Um Beratung für eine bestimmte Altersgruppe."}, {label: "c", text: "Um Seminare, die am Wochenende stattfinden."}], answer: "b" },
          { id: "q2_12", text: "12. Wer an dem Programm teilnehmen möchte, ...", type: "abc", options: [{label: "a", text: "muss am Donnerstag anrufen."}, {label: "b", text: "muss persönlich im Bildungszentrum vorbeikommen."}, {label: "c", text: "muss sich rechtzeitig anmelden."}], answer: "c" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Anzeigen. Finden Sie für jede Situation die passende Anzeige. Es gibt eine Situation, für die keine Anzeige passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Stellenanzeigen</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) Aushilfe im Service gesucht</strong>. Unser Café in der Altstadt sucht freundliche Mitarbeiter/-innen für die Wochenenden. Du bist zeitlich flexibel und hast Freude am Umgang mit Gästen? Dann bewirb dich jetzt!</li>
            <li class="anzeige-box"><strong>B) Junior Web-Entwickler(in)</strong>. Für unser Start-up suchen wir ab sofort Unterstützung (Vollzeit). Erste Erfahrungen in HTML/CSS und JavaScript sind Voraussetzung. Wir bieten ein junges Team und moderne Büroräume.</li>
            <li class="anzeige-box"><strong>C) Gärtner/-in für Parkanlagen</strong>. Die Stadtverwaltung sucht eine motivierte Kraft für die Pflege unserer öffentlichen Grünanlagen. Sie sollten Erfahrung in der Gartenarbeit haben und gerne draußen arbeiten. Arbeitszeit von Mo-Fr.</li>
            <li class="anzeige-box"><strong>D) Buchhaltung leicht gemacht - Kurs</strong>. Haben Sie Probleme mit den Steuern in Ihrem kleinen Unternehmen? Wir helfen Ihnen. Intensivkurs an zwei Wochenenden. Für Anfänger geeignet.</li>
            <li class="anzeige-box"><strong>E) Erfahrene Lehrkraft für Deutschkurse</strong>. Unsere Sprachschule sucht dringend Verstärkung für die Abendkurse (Niveau B1/B2). Sie haben bereits Erfahrung als Lehrer(in) und sind kommunikativ? Wir zahlen überdurchschnittlich.</li>
            <li class="anzeige-box"><strong>F) Nebenjob als Kurierfahrer</strong>. Bringen Sie Pakete sicher ans Ziel. Wir suchen Fahrer(innen) mit eigenem Auto für nachmittags. Guter Stundenlohn!</li>
            <li class="anzeige-box"><strong>G) Praktikant(in) im Bereich Grafikdesign</strong>. Du bist im Studium und suchst ein 3-monatiges Pflichtpraktikum? Wir suchen kreative Köpfe für die Gestaltung von Werbemitteln. Keine Bezahlung, aber tolles Arbeitsklima.</li>
            <li class="anzeige-box"><strong>H) Ausbildung zum/zur Industriekaufmann/-frau</strong>. Starten Sie Ihre Karriere bei uns! Größeres Industrieunternehmen sucht junge Talente mit gutem Schulabschluss. Bewerbungsfrist endet am 30. Mai.</li>
          </ul>
        `,
        questions: [
          { id: "q2_13", text: "13. Ein Freund studiert Informatik und möchte nach dem Studium nun das erste Mal 40 Stunden pro Woche arbeiten.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "B" },
          { id: "q2_14", text: "14. Eine Kollegin möchte Geld dazuverdienen und hat samstags und sonntags viel Zeit.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "A" },
          { id: "q2_15", text: "15. Sie sind Lehrerin und suchen abends noch eine gut bezahlte Beschäftigung.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "E" },
          { id: "q2_16", text: "16. Ihr Bruder hat ein eigenes Auto und sucht Arbeit für den Nachmittag.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "F" },
          { id: "q2_17", text: "17. Ihre Tante arbeitet selbstständig und möchte lernen, wie sie ihre Steuern besser vorbereiten kann.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "D" },
          { id: "q2_18", text: "18. Ein Nachbar liebt die Natur und sucht eine feste Arbeit, die nur unter der Woche stattfindet.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "C" },
          { id: "q2_19", text: "19. Eine Bekannte sucht eine bezahlte Arbeit im Büro, wo sie auch kreativ sein kann.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für Home-Office als dauerhaftes Arbeitsmodell?",
        text: `
          <h3>Diskussionsthema: Sollte Home-Office das normale Arbeitsmodell der Zukunft sein?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für Home-Office. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Julia, 32:</strong> Ich spare jeden Tag zwei Stunden Fahrtzeit, seit ich von zu Hause arbeite. Diese Zeit kann ich mit meiner Familie verbringen oder Sport machen. Meine Ergebnisse sind genauso gut wie im Büro, deshalb finde ich, dass alle zu Hause arbeiten sollten, wenn es der Job erlaubt.</p>
          <p><strong>21. Markus, 48:</strong> Mir fehlt der persönliche Kontakt zu meinen Kollegen extrem. Die kurzen Gespräche in der Kaffeeküche oder das gemeinsame Mittagessen lassen sich nicht über Videokonferenzen ersetzen. Die Arbeitskultur geht auf lange Sicht komplett verloren, wenn niemand mehr ins Büro kommt.</p>
          <p><strong>22. Sabine, 27:</strong> Da ich in einer kleinen Wohnung mitten in der Stadt lebe, habe ich gar keinen Platz für einen richtigen Schreibtisch. Ich muss am Küchentisch arbeiten und bekomme Rückenschmerzen. Ich bin froh, wenn ich jeden Tag ins Büro kann.</p>
          <p><strong>23. Klaus, 55:</strong> Am Anfang war ich skeptisch. Aber die Firma spart so viel Geld für Büromiete, Heizung und Strom. Und die Mitarbeiter sind entspannter, weil sie sich den Tag selbst einteilen können. Wir sollten die alten Büropflichten so schnell wie möglich abschaffen.</p>
          <p><strong>24. Emma, 30:</strong> Im Team kreativ zu sein, funktioniert über den Bildschirm einfach nicht. Wenn wir an neuen Projekten arbeiten, müssen wir zusammen in einem Raum sitzen und Ideen auf ein Board schreiben können. Von mir aus kann das Home-Office wieder abgeschafft werden.</p>
          <p><strong>25. Leon, 39:</strong> Ich wohne auf dem Land und die Mieten in der Stadt in der Nähe der Firma sind viel zu hoch. Durch die Arbeit am Laptop spare ich extrem viel Benzin und tue auch noch etwas Gutes für die Umwelt. Etwas Besseres konnte mir nicht passieren.</p>
          <p><strong>26. Anna, 44:</strong> Zuhause verschwimmt die Grenze zwischen Arbeit und Freizeit. Ich arbeite abends oft noch spät, weil der Computer sowieso auf dem Tisch steht. Im Büro hat man wenigstens ab 17 Uhr richtig Feierabend. Auf Dauer macht einen die Arbeit von zu Hause kaputt.</p>
          </div>
        `,
        questions: [
          { id: "q2_20", text: "20. Julia", type: "jn", answer: "ja" },
          { id: "q2_21", text: "21. Markus", type: "jn", answer: "nein" },
          { id: "q2_22", text: "22. Sabine", type: "jn", answer: "nein" },
          { id: "q2_23", text: "23. Klaus", type: "jn", answer: "ja" },
          { id: "q2_24", text: "24. Emma", type: "jn", answer: "nein" },
          { id: "q2_25", text: "25. Leon", type: "jn", answer: "ja" },
          { id: "q2_26", text: "26. Anna", type: "jn", answer: "nein" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Hausordnung und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Hausordnung für das Bürogebäude „Sonnenturm“</h3>
          <p>Willkommen im Sonnenturm. Wir bitten alle Mieter und Mitarbeiter, folgende Regeln zu beachten:</p>
          <p><strong>Zugang und Ausweise:</strong> Das Gebäude ist montags bis freitags von 06:00 bis 20:00 Uhr geöffnet. Wenn Sie außerhalb dieser Zeiten oder am Wochenende arbeiten möchten, müssen Sie Ihren elektronischen Firmenausweis am Haupteingang scannen. Bitte tragen Sie Ihren Ausweis im Gebäude jederzeit sichtbar an der Kleidung.<br>
          <strong>Besucher:</strong> Externe Besucher müssen sich am Empfang im Erdgeschoss anmelden und ein Gäste-Namensschild erhalten. Besucher dürfen sich ohne Begleitung eines Mitarbeiters nicht im Gebäude aufhalten.<br>
          <strong>Sicherheit:</strong> Fluchtwege und Treppenhäuser müssen zwingend freigehalten werden. Das Abstellen von Fahrrädern, Kisten oder anderen Gegenständen auf den Gängen ist untersagt. Im Falle eines Feueralarms darf der Aufzug nicht mehr benutzt werden. Verlassen Sie das Gebäude über das Treppenhaus.<br>
          <strong>Parkplätze:</strong> Die Tiefgarage ist nur für Firmenfahrzeuge und Mitarbeiter mit einem speziellen Parkausweis reserviert. Kunden und Gäste werden gebeten, das Parkhaus im benachbarten Einkaufszentrum (gebührenpflichtig) zu nutzen.</p>
        `,
        questions: [
          { id: "q2_27", text: "27. Wie kommt man am Samstag ins Gebäude?", type: "abc", options: [{label: "a", text: "Der Haupteingang ist wie immer offen."}, {label: "b", text: "Man braucht einen speziellen Ausweis."}, {label: "c", text: "Man muss sich am Empfang anmelden."}], answer: "b" },
          { id: "q2_28", text: "28. Leute, die nicht im Gebäude arbeiten, ...", type: "abc", options: [{label: "a", text: "brauchen einen elektronischen Firmenausweis."}, {label: "b", text: "dürfen das Gebäude nur von 6 bis 20 Uhr betreten."}, {label: "c", text: "dürfen nicht alleine durch das Haus laufen."}], answer: "c" },
          { id: "q2_29", text: "29. Aus Sicherheitsgründen ...", type: "abc", options: [{label: "a", text: "darf man Fahrräder nur ins Treppenhaus stellen."}, {label: "b", text: "darf man bei einem Feuer nicht mit dem Fahrstuhl fahren."}, {label: "c", text: "muss man Kisten auf den Gängen genau kontrollieren."}], answer: "b" },
          { id: "q2_30", text: "30. Wo können Besucher des Hauses parken?", type: "abc", options: [{label: "a", text: "Kostenlos in der Tiefgarage."}, {label: "b", text: "Beim Einkaufszentrum nebenan für Geld."}, {label: "c", text: "Überall vor dem Haupteingang."}], answer: "b" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Modellsatz 3: Reisen und Urlaub",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie den Blogbeitrag und die Nachricht. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Reiseblog von Sophie</h3>
          <p>Hallo Reisefreunde! Ich melde mich heute aus dem wunderschönen Lissabon. Die Entscheidung, alleine nach Portugal zu reisen, war die beste Idee des Jahres. Geplant war eigentlich nur ein kurzes Wochenende, aber die Stadt hat mich so fasziniert, dass ich meinen Rückflug spontan um vier Tage verschoben habe. Mein Airbnb liegt direkt im alten Stadtviertel Alfama. Die engen Gassen sind ein Traum, allerdings war es gestern Nacht extrem laut, da direkt vor meinem Fenster ein Straßenfest stattfand. Schlafen war unmöglich! Heute Morgen habe ich dann den berühmten Turm von Belém besichtigt. Wahnsinn, wie viele Touristen schon um 9 Uhr dort waren. Ich habe bemerkt, dass mein Reisebudget langsam knapp wird. Eigentlich wollte ich morgen noch an die Algarve fahren, aber die Zugtickets sind viel teurer als erwartet. Vielleicht bleibe ich einfach hier und genieße noch ein paar Pastéis de Nata am Meer. Hat jemand von euch günstige Tipps für Lissabon?</p>
          <hr/>
          <h3>Nachricht von Tobias an Sophie</h3>
          <p>Hey Sophie!<br>
          Deine Bilder aus Lissabon sehen unfassbar toll aus! Ich bin richtig neidisch. Dass du einfach länger geblieben bist, passt total zu dir. Gut, dass du das mit dem Straßenfest erwähnst – darüber hatte ich nämlich auch nachgedacht, weil ich im September für eine Woche nach Lissabon fliege. Wahrscheinlich buche ich mir dann doch lieber ein Hotel etwas außerhalb des Zentrums, um nachts meine Ruhe zu haben. Wegen deiner Frage zu günstigen Tipps: Du musst unbedingt mit der Straßenbahnlinie 28 fahren! Das kostet nur drei Euro und du siehst fast die ganze historische Altstadt. Und spar dir das teure Essen in den Touristengebieten am Hafen. In den kleinen Gassen gibt es winzige Restaurants, die "Tasca" heißen. Da isst man fantastisch und zahlt kaum etwas. Genieß die letzten Tage!<br>
          Liebe Grüße, Tobias</p>
        `,
        questions: [
          { id: "q3_1", text: "1. Sophie hatte von Anfang an geplant, eine Woche in Lissabon zu bleiben.", type: "tf", answer: "falsch" },
          { id: "q3_2", text: "2. Sophie konnte in einer Nacht wegen einer Feier nicht gut schlafen.", type: "tf", answer: "richtig" },
          { id: "q3_3", text: "3. Sophie wird morgen sicher an die Algarve reisen.", type: "tf", answer: "falsch" },
          { id: "q3_4", text: "4. Tobias war im September schon einmal in Lissabon.", type: "tf", answer: "falsch" },
          { id: "q3_5", text: "5. Tobias empfiehlt Sophie ein teures Hotel im Zentrum.", type: "tf", answer: "falsch" },
          { id: "q3_6", text: "6. Laut Tobias können kleine, lokale Restaurants sehr günstig sein.", type: "tf", answer: "richtig" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Zeitungsartikel</h3>
          <p><strong>Campingboom: Zurück zur Natur</strong><br>
          Camping ist in Europa so beliebt wie nie zuvor. Eine aktuelle Tourismus-Studie zeigt, dass die Buchungszahlen für Campingplätze im letzten Jahr um unglaubliche 35 Prozent gestiegen sind. Besonders Familien mit Kindern und junge Erwachsene zwischen 20 und 30 Jahren entscheiden sich zunehmend für den Urlaub im Zelt oder Wohnmobil. Experten sehen den Grund dafür nicht nur in den extrem gestiegenen Flug- und Hotelpreisen. Viele Urlauber suchen ganz bewusst nach einer Flucht aus der digitalen Welt und wollen wieder eine engere Verbindung zur Natur spüren. Dieser Boom bringt jedoch auch Probleme mit sich: In beliebten Urlaubsregionen, wie etwa am Gardasee oder in Südfrankreich, sind die Plätze oft monatelang im Voraus ausgebucht, und Wildcampen wird zunehmend von den lokalen Behörden mit hohen Geldstrafen geahndet.</p>
          <br>
          <h3>Text 2: Informationsblatt</h3>
          <p><strong>Das neue Europaticket für Jugendliche</strong><br>
          Die Europäische Union hat ein neues Programm gestartet, um jungen Menschen das Reisen durch Europa zu erleichtern. Mit dem "DiscoverEU"-Pass können 18-Jährige, die EU-Bürger sind, bis zu einem Monat lang kostenlos mit dem Zug durch alle Mitgliedsländer reisen. Das Ziel ist es, den kulturellen Austausch zu fördern und das Verständnis für andere europäische Länder zu stärken. Interessierte müssen an einem Online-Quiz über die europäische Geschichte teilnehmen. Die besten 35.000 Teilnehmer erhalten dann das Ticket. Flugzeuge und Busse sind von diesem Ticket in der Regel ausgeschlossen, es sei denn, man lebt auf einer Insel, die nicht mit dem Zug erreichbar ist. Die Bewerbungsfrist für die Reisephase im Sommer endet am 15. März.</p>
        `,
        questions: [
          { id: "q3_7", text: "7. Worum geht es in diesem Artikel?", type: "abc", options: [{label: "a", text: "Um Gründe, warum Camping wieder sehr beliebt ist."}, {label: "b", text: "Um die Kosten von Flugtickets."}, {label: "c", text: "Um den Bau von großen Naturparks."}], answer: "a" },
          { id: "q3_8", text: "8. Wer macht besonders häufig Camping-Urlaub?", type: "abc", options: [{label: "a", text: "Rentner und Senioren."}, {label: "b", text: "Junge Leute und Familien."}, {label: "c", text: "Experten für Tourismus."}], answer: "b" },
          { id: "q3_9", text: "9. Was ist ein Problem an dem Camping-Trend?", type: "abc", options: [{label: "a", text: "Wildcampen kostet viel Geld."}, {label: "b", text: "Man findet am Meer keine echten Campingplätze mehr."}, {label: "c", text: "Man muss oft sehr früh reservieren, um einen Platz zu bekommen."}], answer: "c" },
          { id: "q3_10", text: "10. Der Text informiert darüber, ...", type: "abc", options: [{label: "a", text: "wie teuer Züge in Europa sind."}, {label: "b", text: "wie EU-Bürger gratis mit dem Zug reisen können."}, {label: "c", text: "welche Schulen die besten Reisen planen."}], answer: "b" },
          { id: "q3_11", text: "11. Wie kann man das Ticket gewinnen?", type: "abc", options: [{label: "a", text: "Man muss einen Text über Europa schreiben."}, {label: "b", text: "Man muss Fragen im Internet richtig beantworten."}, {label: "c", text: "Man muss sich im Sommer schnell bewerben."}], answer: "b" },
          { id: "q3_12", text: "12. Mit welchen Verkehrsmitteln darf man normalerweise reisen?", type: "abc", options: [{label: "a", text: "Mit allen Zügen in Europa."}, {label: "b", text: "Nur mit dem Bus und dem Zug."}, {label: "c", text: "Auch mit dem Flugzeug, wenn man es möchte."}], answer: "a" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Angebote. Finden Sie für jede Situation das passende Angebot. Es gibt eine Situation, für die kein Angebot passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Urlaubs- und Reiseangebote</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) Familienhotel "Sonnenstrand"</strong>. All-Inclusive an der Ostsee. Großer Spielplatz, Kinderbetreuung (3-12 Jahre) am Vor- und Nachmittag. Entspannen Sie sich, während Ihre Kinder spielen!</li>
            <li class="anzeige-box"><strong>B) Sprachreise Brighton</strong>. Englisch lernen mit Spaß! Intensivkurse am Vormittag, nachmittags Kulturprogramm und Surfkurs. Unterkunft in Gastfamilien. Für Jugendliche von 14 bis 18 Jahren.</li>
            <li class="anzeige-box"><strong>C) Alpen-Retreat für Erwachsene</strong>. Keine Handys, kein Internet, absolute Ruhe. Yoga-Kurse am Morgen und geführte Meditationen im Wald. Nur für Alleinreisende ohne Kinder.</li>
            <li class="anzeige-box"><strong>D) Städtereise Paris</strong>. Wochenende der Romantik! 3 Nächte im zentralen 4-Sterne-Hotel inkl. Candle-Light-Dinner auf dem Eiffelturm und Bootsfahrt auf der Seine. Perfekt für Paare.</li>
            <li class="anzeige-box"><strong>E) Aktivurlaub in den Dolomiten</strong>. Für alle, die den Nervenkitzel suchen: 5 Tage Klettern, Mountainbiken und Rafting. Übernachtung in einfachen Berghütten. Gute Kondition erforderlich.</li>
            <li class="anzeige-box"><strong>F) Seniorenreise "Kultur pur"</strong>. Entdecken Sie Rom und Florenz mit Gleichgesinnten! Reise im bequemen Bus inkl. deutschsprachiger Reiseleitung, Eintrittsgelder für alle Museen und Vollpension.</li>
            <li class="anzeige-box"><strong>G) Work & Travel in Australien</strong>. Organisation von Visum, Flügen und ersten Vorstellungsgesprächen in Down Under. Für alle zwischen 18 und 30 Jahren, die das Abenteuer suchen und arbeiten wollen.</li>
            <li class="anzeige-box"><strong>H) Erlebnisbauernhof "Glückliche Kuh"</strong>. Urlaub auf dem Land. Helfen Sie bei der Ernte, füttern Sie die Tiere und schlafen Sie im Heu. Ein unvergessliches Erlebnis für Familien mit kleinen Kindern.</li>
          </ul>
        `,
        questions: [
          { id: "q3_13", text: "13. Ihr 16-jähriger Sohn möchte in den Ferien seine Noten in seiner ersten Fremdsprache verbessern.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "B" },
          { id: "q3_14", text: "14. Ein befreundetes Ehepaar möchte seinen 10. Hochzeitstag an einem besonderen und romantischen Ort feiern.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "D" },
          { id: "q3_15", text: "15. Ihre Großeltern interessieren sich sehr für Geschichte und Kunst und reisen gerne bequem und organisiert.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "F" },
          { id: "q3_16", text: "16. Eine gestresste Managerin sucht dringend Erholung ganz allein in der Stille der Natur, weit weg vom Handy.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "C" },
          { id: "q3_17", text: "17. Sie wollen mit ihren beiden Kindern (4 und 7 Jahre) verreisen und suchen ein Hotel direkt am Meer.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "A" },
          { id: "q3_18", text: "18. Ein sportlicher Freund liebt die Berge und sucht im Urlaub körperliche Herausforderungen und extreme Sportarten.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "E" },
          { id: "q3_19", text: "19. Ein Opa möchte zusammen mit seinem Enkel einen Urlaub in der heißen Wüste buchen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für eine Pauschalreise (All-Inclusive-Urlaub)?",
        text: `
          <h3>Diskussionsthema: Ist eine Pauschalreise die beste Art, Urlaub zu machen?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für Pauschalreisen. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Andrea, 34:</strong> Für mich ist Urlaub die kostbarste Zeit des Jahres. Ich arbeite hart und will mich um nichts kümmern müssen. Flug, Transfer, Hotel, Essen – wenn einmal alles bezahlt ist, muss ich an nichts mehr denken. Das ist wahre Erholung!</p>
          <p><strong>21. Felix, 29:</strong> Ich finde es furchtbar, zwei Wochen lang denselben Strand und denselben Speisesaal zu sehen. Man lernt das Land und die Einheimischen doch gar nicht kennen, wenn man das Hotel nicht verlässt. Für mich ist das kein echtes Reisen.</p>
          <p><strong>22. Miriam, 41:</strong> Mit drei Kindern ist ein spontaner Trip mit dem Rucksack absolut keine Option mehr. Wir brauchen feste Strukturen, einen Pool und ein Buffet, bei dem jedes Kind etwas findet. So etwas ist nur als gut organisierte Komplettreise bezahlbar.</p>
          <p><strong>23. Simon, 50:</strong> Wir buchen schon lange keine "Das komplette Paket"-Reisen mehr. Das Essen am Buffet schmeckt jeden Tag gleich und die Liegen am Pool sind morgens um sechs Uhr schon besetzt. Lieber miete ich eine kleine Hütte und koche selbst.</p>
          <p><strong>24. Laura, 25:</strong> Wenn etwas schiefgeht – zum Beispiel wenn ein Flug ausfällt –, hat man bei einer Pauschalreise einen Ansprechpartner. Der Veranstalter muss einem helfen und ein Ersatzhotel besorgen. Diese Sicherheit ist mir sehr wichtig.</p>
          <p><strong>25. David, 38:</strong> Ich unterstütze lieber Restaurants, kleine Läden und die lokale Wirtschaft am Urlaubsort. Bei diesen riesigen Hotelanlagen, bei denen der Gast schon für alles bezahlt hat, geht das Geld fast nur an große internationale Konzerne. Deshalb mache ich das nicht.</p>
          <p><strong>26. Karin, 62:</strong> In meinem Alter möchte ich Sicherheit und Komfort. Ich spreche keine Fremdsprachen und es hilft mir sehr, wenn im Hotel ein deutschsprachiger Reiseleiter ist, der bei Problemen helfen kann. Man wird vom Flughafen abgeholt und genau dorthin zurückgebracht.</p>
          </div>
        `,
        questions: [
          { id: "q3_20", text: "20. Andrea", type: "jn", answer: "ja" },
          { id: "q3_21", text: "21. Felix", type: "jn", answer: "nein" },
          { id: "q3_22", text: "22. Miriam", type: "jn", answer: "ja" },
          { id: "q3_23", text: "23. Simon", type: "jn", answer: "nein" },
          { id: "q3_24", text: "24. Laura", type: "jn", answer: "ja" },
          { id: "q3_25", text: "25. David", type: "jn", answer: "nein" },
          { id: "q3_26", text: "26. Karin", type: "jn", answer: "ja" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Fluggastinformationen und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Fluggesellschaft „AeroNord“ – Wichtige Reiseinformationen</h3>
          <p>Sehr geehrte Passagiere, bitte beachten Sie folgende Regeln für Ihren Flug:</p>
          <p><strong>Handgepäck:</strong> Jeder Passagier (außer Babys) darf ein Stück Handgepäck mitnehmen. Dieses darf maximal 8 kg wiegen und die Maße 55 x 40 x 20 cm nicht überschreiten. Ein zusätzlicher kleiner persönlicher Gegenstand, wie eine Handtasche oder Laptoptasche, ist erlaubt, wenn er unter den Vordersitz passt.<br>
          <strong>Check-in:</strong> Der Online-Check-in öffnet 24 Stunden vor dem planmäßigen Abflug und schließt 2 Stunden vorher. Passagiere, die ausschließlich Handgepäck zu haben, können direkt zur Sicherheitskontrolle gehen. Wenn Sie Gepäck aufgeben möchten, müssen Sie mindestens 90 Minuten vor Abflug an den Schaltern C1 bis C12 eintreffen.<br>
          <strong>Sicherheitskontrolle:</strong> Flüssigkeiten im Handgepäck sind nur in Behältern von maximal 100 ml erlaubt. Alle Behälter müssen in einem transparenten, wiederverschließbaren Plastikbeutel (max. 1 Liter) verpackt sein. Elektronische Großgeräte wie Laptops müssen vor dem Röntgen separat in die Kiste gelegt werden.<br>
          <strong>Boarding:</strong> Seien Sie spätestens 30 Minuten vor dem Abflug am Gate. Das Gate schließt strikt 15 Minuten vor Abflug. Passagiere, die später eintreffen, haben keinen Anspruch auf Beförderung und der Ticketpreis wird nicht erstattet.</p>
        `,
        questions: [
          { id: "q3_27", text: "27. Was darf man zusätzlich zum normalen Handgepäck (8kg) mit in die Kabine nehmen?", type: "abc", options: [{label: "a", text: "Nichts."}, {label: "b", text: "Einen Rucksack für Kleidung."}, {label: "c", text: "Eine kleine Computertasche."}], answer: "c" },
          { id: "q3_28", text: "28. Wann müssen Sie am Schalter sein, wenn Sie einen Koffer (aufgegebenes Gepäck) haben?", type: "abc", options: [{label: "a", text: "Spätestens 2 Stunden vor dem Flug."}, {label: "b", text: "Spätestens eineinhalb Stunden vor dem Flug."}, {label: "c", text: "Sie können damit direkt zur Sicherheitskontrolle gehen."}], answer: "b" },
          { id: "q3_29", text: "29. Wie muss man Shampoo oder Parfüm (Flüssigkeiten) transportieren?", type: "abc", options: [{label: "a", text: "Sie müssen in einem Rucksack versteckt sein."}, {label: "b", text: "Sie dürfen nicht mehr als 100 ml pro Person sein."}, {label: "c", text: "Sie müssen in einer kleinen durchsichtigen Tüte sein."}], answer: "c" },
          { id: "q3_30", text: "30. Was passiert, wenn man erst 10 Minuten vor Abflug am Gate ankommt?", type: "abc", options: [{label: "a", text: "Man muss Strafe zahlen, darf aber fliegen."}, {label: "b", text: "Man darf nicht mehr in das Flugzeug."}, {label: "c", text: "Man bekommt das Geld für den Flug zurück."}], answer: "b" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Modellsatz 4: Gesundheit und Ernährung",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie den Blogbeitrag und die E-Mail. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Blog von Melanie – „Fit fürs Leben“</h3>
          <p>Hallo zusammen! Der Frühling ist da und viele von uns wollen jetzt schnell noch ein paar Kilos verlieren, bevor der Sommer kommt. Auch ich habe in den letzten Wochen eine neue Diät ausprobiert, von der momentan alle reden: Low Carb. Das bedeutet, man verzichtet fast komplett auf Kohlenhydrate wie Brot, Nudeln oder Kartoffeln. In den ersten fünf Tagen war ich extrem müde und hatte schlechte Laune. Aber danach ging es mir erstaunlich gut! Ich habe viel mehr Energie und tatsächlich schon drei Kilo abgenommen. Das Kochen dauert allerdings länger, weil ich ständig frisches Gemüse schnippeln muss. Außerdem ist es sehr schwierig, abends mit Freunden essen zu gehen, da in den meisten Restaurants Kohlenhydrate die Basis des Gerichts bilden. Letzte Woche beim Italiener durfte ich nur einen kleinen Salat essen, während die anderen Pizza genossen haben. Habt ihr Erfahrungen mit Ernährungsplänen gemacht?</p>
          <hr/>
          <h3>E-Mail von Jens an Melanie</h3>
          <p>Hallo Melanie,<br>
          dein Blogbeitrag spricht mir aus der Seele! Ich habe letztes Jahr für sechs Monate versucht, komplett auf Zucker und Kohlenhydrate zu verzichten. Am Anfang ist es wirklich extrem schwer, weil der Körper Zeit braucht, um sich umzustellen. Ich habe zwar abgenommen, aber ich habe gemerkt, dass meine Ausdauer beim Sport extrem abgenommen hat. Als ich für einen Halbmarathon trainieren wollte, war Low Carb absolut der falsche Weg. Kohlenhydrate sind wichtig für die Energie, wenn man viel Sport macht! Mittlerweile esse ich wieder ganz normal, aber ich achte darauf, mehr Vollkornprodukte zu kaufen und auf Süßigkeiten zu verzichten. Falls du mal leckere Low-Carb-Rezepte brauchst, melde dich. Ich habe noch ein ganzes Kochbuch mit tollen Ideen zu Hause, das ich dir gerne ausleihen kann.<br>
          Viele Grüße, Jens</p>
        `,
        questions: [
          { id: "q4_1", text: "1. Melanie hat in der ersten Woche der Diät viel Energie gehabt.", type: "tf", answer: "falsch" },
          { id: "q4_2", text: "2. Melanie findet es leicht, in Restaurants Gerichte ohne Kohlenhydrate zu finden.", type: "tf", answer: "falsch" },
          { id: "q4_3", text: "3. Melanie hat durch die Diät Gewicht verloren.", type: "tf", answer: "richtig" },
          { id: "q4_4", text: "4. Jens hat ebenfalls Erfahrungen mit einer strengen Diät gemacht.", type: "tf", answer: "richtig" },
          { id: "q4_5", text: "5. Jens fand, dass er mit der Diät besser laufen konnte.", type: "tf", answer: "falsch" },
          { id: "q4_6", text: "6. Jens möchte Melanie ein Kochbuch schenken.", type: "tf", answer: "falsch" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Artikel aus einer Gesundheitszeitschrift</h3>
          <p><strong>Die Gefahr des ständigen Sitzens</strong><br>
          Viele Menschen in Deutschland verbringen den Großteil ihres Tages sitzend: im Büro, im Auto und abends auf dem Sofa. Mediziner warnen zunehmend vor den Folgen, die dieser Lebensstil auf unsere Gesundheit hat. Zu langes Sitzen erhöht nicht nur das Risiko für Rückenschmerzen, sondern auch für schwerwiegende Krankheiten wie Diabetes und Herz-Kreislauf-Probleme. Die Weltgesundheitsorganisation empfiehlt, sich jeden Tag mindestens 30 Minuten aktiv zu bewegen. Neuere Forschungen zeigen jedoch, dass dies allein nicht ausreicht, um die negativen Effekte eines achtstündigen Büroarbeitstages auszugleichen. Experten fordern daher, dass Unternehmen höhenverstellbare Schreibtische zur Verfügung stellen sollten, damit Mitarbeiter zwischen Stehen und Sitzen wechseln können. Auch kleine Gewohnheiten, wie beim Telefonieren aufzustehen oder die Treppe statt des Aufzugs zu nehmen, können bereits helfen.</p>
          <br>
          <h3>Text 2: Flyer der Stadtverwaltung</h3>
          <p><strong>Neue App: „Trink Wasser!“</strong><br>
          Der Sommer wird immer heißer und viele Bürgerinnen und Bürger vergessen, bei hohen Temperaturen ausreichend Flüssigkeit zu sich zu nehmen. Vor allem ältere Menschen spüren oft keinen Durst und trinken deshalb viel zu wenig, was zu gefährlichen Kreislaufproblemen führen kann. Die Stadt unterstützt deshalb die Entwicklung der neuen kostenlosen Smartphone-App „Trink Wasser!“. Die App berechnet anhand von Gewicht und Wetterlage den individuellen Tagesbedarf und erinnert den Nutzer regelmäßig durch sanfte Töne daran, ein Glas Wasser zu trinken. Zusätzlich zeigt die App auf einer interaktiven Karte alle 150 öffentlichen Trinkbrunnen im Stadtgebiet an, an denen man seine Flasche kostenlos auffüllen kann. Apotheken verteilen in dieser Woche Flyer mit einem QR-Code zum Download der App.</p>
        `,
        questions: [
          { id: "q4_7", text: "7. Welches Thema behandelt der Text?", type: "abc", options: [{label: "a", text: "Die große Gefahr von zu wenig Bewegung am Arbeitstag."}, {label: "b", text: "Wie viel die Arbeit am Computer die Augen schädigt."}, {label: "c", text: "Probleme von Arbeitern mit Rückenschmerzen."}], answer: "a" },
          { id: "q4_8", text: "8. Was reicht nach neuen Forschungen nicht aus?", type: "abc", options: [{label: "a", text: "Acht Stunden im Büro zu stehen."}, {label: "b", text: "Höhenverstellbare Schreibtische zu kaufen."}, {label: "c", text: "Nur eine halbe Stunde am Tag Sport zu machen."}], answer: "c" },
          { id: "q4_9", text: "9. Was sollen Firmen nach Meinung der Experten tun?", type: "abc", options: [{label: "a", text: "Möbel kaufen, an denen man auch im Stehen arbeiten kann."}, {label: "b", text: "Mitarbeitern verbieten, oft mit dem Aufzug zu fahren."}, {label: "c", text: "Jeden Tag 30 Minuten Sport am Arbeitsplatz anbieten."}], answer: "a" },
          { id: "q4_10", text: "10. Worum geht es in dem Text?", type: "abc", options: [{label: "a", text: "Warum alle Senioren ins Krankenhaus müssen."}, {label: "b", text: "Warum man besonders im Sommer als alter Mensch viel trinken sollte."}, {label: "c", text: "Warum junge Leute nie Durst haben."}], answer: "b" },
          { id: "q4_11", text: "11. Was macht die App „Trink Wasser!“?", type: "abc", options: [{label: "a", text: "Sie erinnert einen daran, regelmäßig zum Arzt zu gehen."}, {label: "b", text: "Sie macht einen lauten Ton, wenn das Wetter heiß wird."}, {label: "c", text: "Sie zeigt eine Karte mit Orten für kostenloses Wasser."}], answer: "c" },
          { id: "q4_12", text: "12. Woher bekommt man Informationen zur App?", type: "abc", options: [{label: "a", text: "Von der Stadtverwaltung per Post."}, {label: "b", text: "Durch Flyer in den Apotheken."}, {label: "c", text: "Durch Anrufe von Krankenhäusern."}], answer: "b" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Angebote. Finden Sie für jede Situation das passende Angebot. Es gibt eine Situation, für die kein Angebot passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Angebote aus dem Gesundheitsbereich</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) Entspann dich – Yoga für Schwangere</strong>. Spezieller Kurs für werdende Mütter zur Vorbereitung auf die Geburt. Atemübungen und leichte Dehnung. Sanfte Musik inklusive. Maximal 8 Teilnehmerinnen pro Gruppe.</li>
            <li class="anzeige-box"><strong>B) Ernährungsberatung „Vital“</strong>. Fühlen Sie sich schlapp oder wollen Sie gesund abnehmen? Unser Experte erstellt Ihnen einen persönlichen Ernährungsplan. Erstgespräch zur Analyse Ihrer Blutwerte kostenlos!</li>
            <li class="anzeige-box"><strong>C) Reha-Zentrum Süd</strong>. Wir helfen Ihnen nach Operationen am Knie oder der Hüfte schnell wieder auf die Beine. Aquagymnastik und Physiotherapie von ausgebildetem Fachpersonal. Nur mit ärztlichem Rezept.</li>
            <li class="anzeige-box"><strong>D) Veganer Kochkurs für Anfänger</strong>. Lernen Sie, wie einfach der Verzicht auf tierische Produkte sein kann! Wir kochen ein Drei-Gänge-Menü komplett ohne Fleisch, Eier oder Milch. Probieren ausdrücklich erwünscht!</li>
            <li class="anzeige-box"><strong>E) „Lauf los!“ - Anfängergruppe</strong>. Gemeinsam macht Sport mehr Spaß! Wir bereiten Sie in 12 Wochen darauf vor, 30 Minuten ohne Pause zu joggen. Treffpunkt immer dienstags im Stadtpark.</li>
            <li class="anzeige-box"><strong>F) Seminar „Stressfrei im Berufsalltag“</strong>. Wie gehe ich mit Zeitdruck und hohen Erwartungen im Büro um? Entspannungstechniken und Zeitmanagement für Fach- und Führungskräfte. 2-Tages-Workshop am Wochenende.</li>
            <li class="anzeige-box"><strong>G) Erste-Hilfe-Kurs am Kind</strong>. Für Eltern und Großeltern. Was tun bei Verbrennungen, Stürzen oder Fieberkrämpfen? Erfahrene Notärzte zeigen Ihnen, wie Sie im Notfall als Erstes richtig handeln.</li>
            <li class="anzeige-box"><strong>H) „Beweglicher Rücken“</strong>. Ein spezielles Training für Menschen, die viel sitzen. Stärken Sie ihre Muskeln! Keine Vorkenntnisse erforderlich, wir gehen auf Ihre individuellen Rückenbeschwerden ein.</li>
          </ul>
        `,
        questions: [
          { id: "q4_13", text: "13. Ihr Mann ist beim Sport gestürzt und hat Schmerzen im Knie; er braucht Physiotherapie.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "C" },
          { id: "q4_14", text: "14. Eine Kollegin sucht nach neuen Rezepten, weil sie ab sofort auf Milchprodukte und Fleisch verzichten möchte.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "D" },
          { id: "q4_15", text: "15. Ihr Bruder ist sehr übergewichtig und sucht jemanden, der ihm sagt, welche Lebensmittel gut für ihn sind.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "B" },
          { id: "q4_16", text: "16. Eine Freundin erwartet ein Baby und möchte sich gerne sanft bewegen und vorbereiten.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "A" },
          { id: "q4_17", text: "17. Sie arbeiten im Büro, haben abends oft Schmerzen im Nacken und wollen ihre Haltung verbessern.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "H" },
          { id: "q4_18", text: "18. Sie haben die Sorge, dass sie nicht wissen, was sie tun sollen, wenn sich ihr kleines Kind verletzt.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "G" },
          { id: "q4_19", text: "19. Eine Bekannte sucht eine Gruppe, um im Schwimmbad Aqua-Fitness ohne ärztliches Rezept zu machen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für eine Zuckersteuer auf ungesunde Lebensmittel?",
        text: `
          <h3>Diskussionsthema: Brauchen wir in Deutschland eine Steuer auf besonders zuckerhaltige Lebensmittel, um die Gesundheit der Bevölkerung zu verbessern?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für eine Steuer. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Peter, 45:</strong> Ich finde es unmöglich, dass der Staat mir vorschreiben will, was ich essen oder trinken darf. Wenn ich mir nach einem harten Arbeitstag eine eiskalte Cola mit viel Zucker gönnen möchte, dann ist das meine freie Entscheidung. Eine extra Steuer auf Limonade ist für mich der falsche Weg.</p>
          <p><strong>21. Sandra, 38:</strong> Wir sehen doch bei unseren Kindern in den Schulen, dass sie immer dicker werden. Die Lebensmittelindustrie mischt fast überall versteckten Zucker hinein, um die Produkte billig süß zu machen. Wenn zuckerhaltige Produkte im Supermarkt teurer wären, würden Familien bewusster einkaufen.</p>
          <p><strong>22. Monika, 64:</strong> Ich glaube nicht, dass etwas teureres Essen die Ernährungsgewohnheiten von Menschen nachhaltig ändert. Jemand, der gerne Schokolade isst, wird diese auch kaufen, wenn sie 50 Cent mehr kostet. Besser wäre es, das Geld in die Aufklärung und Aufklärungskampagnen an Schulen zu investieren.</p>
          <p><strong>23. Tom, 29:</strong> Eine Steuer auf ungesundes Essen trifft in erster Linie nur die ärmere Bevölkerung. Reiche Familien werden den Preisaufschlag bei Fruchtgummis überhaupt nicht spüren. Es ist extrem ungerecht, wenn sich Familien mit wenig Geld bestimmte Lebensmittel wegen einer Steuer nicht mehr leisten können.</p>
          <p><strong>24. Lisa, 32:</strong> In vielen skandinavischen Ländern oder in Großbritannien wurde die Zuckersteuer schon sehr erfolgreich eingeführt. Seit die Hersteller plötzlich mehr zahlen müssten, haben sie die Rezepturen komplett verändert und extrem viel Zucker aus ihren Produkten genommen. Bei uns sollte das also sofort gemacht werden.</p>
          <p><strong>25. Christian, 55:</strong> Krankheiten wie Diabetes behandeln zu müssen, kostet unser Gesundheitssystem jährlich Milliarden Euro. Wer durch den Konsum von extrem süßen Produkten krank wird, liegt der Allgemeinheit auf der Tasche. Deshalb ist es nur fair, wenn diejenigen, die ungesund essen und trinken, auch beim Einkauf mehr Geld zahlen sollen.</p>
          <p><strong>26. Martina, 41:</strong> Wenn man anfängt, Süßigkeiten zu besteuern, wo hört man dann auf? Muss ich bald Steuern auf eine fettige Pizza oder auf rotes Fleisch zahlen, weil das auch nicht optimal ist? Das ist ein großer Einschnitt in die wirtschaftliche Freiheit der Menschen.</p>
          </div>
        `,
        questions: [
          { id: "q4_20", text: "20. Peter", type: "jn", answer: "nein" },
          { id: "q4_21", text: "21. Sandra", type: "jn", answer: "ja" },
          { id: "q4_22", text: "22. Monika", type: "jn", answer: "nein" },
          { id: "q4_23", text: "23. Tom", type: "jn", answer: "nein" },
          { id: "q4_24", text: "24. Lisa", type: "jn", answer: "ja" },
          { id: "q4_25", text: "25. Christian", type: "jn", answer: "ja" },
          { id: "q4_26", text: "26. Martina", type: "jn", answer: "nein" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Patienteninformationen und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Patienteninformation für Ihren Aufenthalt im Klinikum „St. Anna“</h3>
          <p>Sehr geehrte Patientin, sehr geehrter Patient,<br>
          wir heißen Sie in unserer Klinik willkommen. Für einen reibungslosen Ablauf beachten Sie bitte die folgenden Hinweise:</p>
          <p><strong>Visite und Untersuchungen:</strong> Die tägliche Arztvisite findet auf der chirurgischen Station zwischen 08:00 Uhr und 10:00 Uhr statt. Bitte bleiben Sie in dieser Zeit zwingend in Ihrem Zimmer. Für spezielle Untersuchungen, wie Röntgen oder Ultraschall, werden Sie von unserem Pflegepersonal direkt abgeholt.<br>
          <strong>Besuchszeiten:</strong> Angehörige fördern die Genesung, allerdings brauchen unsere Patienten auch absolute Ruhe. Offizielle Besuchszeiten sind täglich von 14:00 bis 18:00 Uhr. Ausnahmeregelungen (z.B. für berufstätige Partner) können im Voraus individuell mit der Stationsleitung vereinbart werden. Blumen mit viel Erde (Topfpflanzen) dürfen aus hygienischen Gründen nicht in die Krankenzimmer gebracht werden.<br>
          <strong>Essen und Trinken:</strong> In Absprache mit Ihrem behandelnden Arzt dürfen Sie Besuchern gerne erlauben, Ihnen bestimmtes Essen mitzubringen, sofern Sie keine spezielle Diät einhalten müssen. Das Essen der Klinikküche kann jeden Mittag anhand eines Speiseplans, den Sie am Vortag ausfüllen müssen, aus drei Gerichten ausgewählt werden.<br>
          <strong>Entlassung:</strong> Wenn medizinisch nichts dagegen spricht, ist der Entlassungstag meist der Vormittag. Sie erhalten Ihre Papiere und Rezepte bis um 11 Uhr und müssen das Zimmer bis 12 Uhr für die nächsten Patienten räumen.</p>
        `,
        questions: [
          { id: "q4_27", text: "27. Was sollen die Patienten am Vormittag (bis 10 Uhr) machen?", type: "abc", options: [{label: "a", text: "In einen speziellen Raum für Untersuchungen gehen."}, {label: "b", text: "Nicht das Bett oder das Zimmer verlassen."}, {label: "c", text: "Sich ihre Medikamente am Schwesternzimmer abholen."}], answer: "b" },
          { id: "q4_28", text: "28. Verwandte und Freunde ...", type: "abc", options: [{label: "a", text: "können in Ausnahmen auch außerhalb der Zeiten kommen."}, {label: "b", text: "dürfen jeden Morgen vor 8 Uhr zu Besuch kommen."}, {label: "c", text: "können als Geschenk Topfpflanzen mitbringen."}], answer: "a" },
          { id: "q4_29", text: "29. Wer bestimmt das Mittagessen?", type: "abc", options: [{label: "a", text: "Der Arzt wählt jeden Tag aus, was gut für den Patienten ist."}, {label: "b", text: "Der Patient wählt am Tag davor ein Essen aus dem Plan aus."}, {label: "c", text: "Besucher müssen das Mittagessen im Voraus bestellen."}], answer: "b" },
          { id: "q4_30", text: "30. Bis wann muss man am letzten Tag das Zimmer verlassen?", type: "abc", options: [{label: "a", text: "Bis der Arzt alle Papiere bringt."}, {label: "b", text: "Bis spätestens zwölf Uhr mittags."}, {label: "c", text: "Bis die nächsten Patienten da sind."}], answer: "b" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Modellsatz 5: Wohnen und Leben",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie den Beitrag aus einem Forum und die Antwort. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Forumsbeitrag von Simon</h3>
          <p>Hallo Leute! Ich brauche dringend einen Rat. Ich wohne seit drei Jahren in einer wunderschönen Altbauwohnung im Zentrum meiner Stadt. Die hohen Decken und der Holzfußboden sind ein Traum! Leider hat die Sache einen großen Haken: Im Winter wird es extrem kalt. Die Fenster schließen nicht mehr richtig und es zieht an allen Ecken. Letzten Monat habe ich eine Nebenkostenabrechnung bekommen, bei der mir fast das Herz stehen geblieben ist. Ich muss 400 Euro für die Heizkosten vom letzten Jahr nachzahlen! Ich habe schon mit dem Vermieter gesprochen und ihn gebeten, neue Fenster einzubauen. Er weigert sich allerdings, weil das Haus unter Denkmalschutz steht und die Renovierung zu teuer wäre. Jetzt bin ich total unschlüssig. Soll ich nach einer neuen Wohnung suchen, obwohl die Mieten inzwischen überall gestiegen sind, oder gibt es noch andere Möglichkeiten, die Wohnung warm zu bekommen, ohne sich finanziell zu ruinieren?</p>
          <hr/>
          <h3>Antwort von Lena an Simon</h3>
          <p>Hallo Simon,<br>
          das mit der Heizkostenabrechnung tut mir echt leid. Das ist wirklich wahnsinnig ärgerlich! Ich kenne das Problem mit Altbauwohnungen nur zu gut. Bevor ich in meinen Neubau gezogen bin, hatte ich dieselben Probleme mit undichten Fenstern. Du musst nicht sofort ausziehen. Es gibt spezielle Isolierklebebänder, die man selbst innen an die Fenster kleben kann. Die kosten im Baumarkt nur wenige Euro und helfen gegen die Zugluft enorm! Außerdem habe ich damals schwere Vorhänge vor die Fenster gehängt. Das isoliert zusätzlich. Was deinen Vermieter angeht: Da er sich weigert, etwas zu tun, solltest du dich beim Mieterverein beraten lassen. Manchmal darf man die Miete senken (Mietminderung), wenn die Wohnung nicht richtig warm wird. Ein Umzug ist aktuell sicher die teuerste Lösung, also versuch erst einmal diese kleinen Dinge.<br>
          Liebe Grüße, Lena</p>
        `,
        questions: [
          { id: "q5_1", text: "1. Simon ist mit seiner Wohnung eigentlich sehr zufrieden.", type: "tf", answer: "richtig" },
          { id: "q5_2", text: "2. Simon musste an seinen Vermieter 400 Euro für neue Fenster bezahlen.", type: "tf", answer: "falsch" },
          { id: "q5_3", text: "3. Der Vermieter plant, nächsten Monat neue Fenster einzubauen.", type: "tf", answer: "falsch" },
          { id: "q5_4", text: "4. Lena wohnt im Moment auch in einem alten Haus.", type: "tf", answer: "falsch" },
          { id: "q5_5", text: "5. Lena fand Isolierklebebänder sehr teuer.", type: "tf", answer: "falsch" },
          { id: "q5_6", text: "6. Lena rät Simon, sich rechtlich informieren zu lassen.", type: "tf", answer: "richtig" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Artikel in einer Tageszeitung</h3>
          <p><strong>Wohnen auf wenigen Quadratmetern: Das Tiny House</strong><br>
          Ein eigenes Haus bauen – das ist für viele junge Familien aufgrund der hohen Grundstückspreise und Baukosten oft ein unerfüllbarer Traum. Doch immer mehr Deutsche finden eine Alternative: "Tiny Houses". Diese winzigen Häuser haben oft nicht mehr als 20 bis 30 Quadratmeter Wohnfläche, bieten aber alles, was man zum Leben braucht. Küche, Bad, Bett und ein kleiner Tisch sind auf engstem Raum clever integriert. Der große Vorteil: Ein Tiny House kostet oft weniger als ein neues Auto und verbraucht kaum Energie. Zudem sind viele Modelle auf Anhängern gebaut und können wie ein Wohnwagen bewegt werden. Die rechtliche Lage ist in Deutschland jedoch schwierig. Man darf sein Tiny House nicht einfach auf eine Wiese stellen, sondern braucht ein erschlossenes Grundstück mit Anschlüssen für Wasser und Strom, wofür oft eine lange Baugenehmigung erforderlich ist.</p>
          <br>
          <h3>Text 2: Informationsbroschüre</h3>
          <p><strong>Das Mehrgenerationenhaus – Gemeinsam statt einsam</strong><br>
          Immer mehr Menschen fühlen sich in ihren Wohnungen einsam. Die Stadtverwaltung fördert deshalb das Projekt "Mehrgenerationenwohnen". Die Idee: In einem Wohnkomplex leben Familien mit Kindern, Paare, Singles und ältere Senioren zusammen unter einem Dach. Jeder hat seine eigene abgeschlossene Wohnung, aber es gibt große Gemeinschaftsräume, eine geteilte Terrasse und einen Garten. Dies fördert den Austausch. So können beispielsweise die Senioren nachmittags auf die Kinder aufpassen, während junge Leute im Gegenzug für ältere Nachbarn schwere Einkäufe erledigen. Das Stadtteilzentrum plant nun den Bau eines weiteren Hauses mit 15 Mietwohnungen im Süden der Stadt. Interessierte Bürger können sich am kommenden Mittwoch ab 18 Uhr im großen Saal des Rathauses über die Bewerbungsbedingungen informieren. Voraussetzung ist die Bereitschaft, monatlich 10 Stunden ehrenamtliche Arbeit für die Gemeinschaft zu leisten.</p>
        `,
        questions: [
          { id: "q5_7", text: "7. Was ist das Thema des Textes?", type: "abc", options: [{label: "a", text: "Das Wohnen in besonders kleinen Häusern."}, {label: "b", text: "Die Probleme von Autos mit Anhängern."}, {label: "c", text: "Das Leben in fremden Städten."}], answer: "a" },
          { id: "q5_8", text: "8. Was ist positiv an Tiny Houses?", type: "abc", options: [{label: "a", text: "Sie verbrauchen wenig Strom und Gas."}, {label: "b", text: "Sie haben sehr große Küchen und Bäder."}, {label: "c", text: "Man bekommt dafür kostenlos ein Stück Land."}], answer: "a" },
          { id: "q5_9", text: "9. Welches Problem besteht bei den Minihäusern in Deutschland?", type: "abc", options: [{label: "a", text: "Man darf nicht auf Straßen mit einem Anhänger fahren."}, {label: "b", text: "Es ist kompliziert, einen offiziellen Stellplatz zu bekommen."}, {label: "c", text: "Sie haben oft kein eigenes Wasser und keinen Strom."}], answer: "b" },
          { id: "q5_10", text: "10. Worüber berichtet dieser Artikel?", type: "abc", options: [{label: "a", text: "Das Zusammenleben von ganz jungen und ganz alten Menschen."}, {label: "b", text: "Die Probleme von lauten Kindern in Wohnungen."}, {label: "c", text: "Den Bau von ganz normalen Altenheimen."}], answer: "a" },
          { id: "q5_11", text: "11. Wie funktioniert das Projekt?", type: "abc", options: [{label: "a", text: "Alle schlafen und essen im selben großen Raum."}, {label: "b", text: "Man hat seine eigene Wohnung, hilft sich aber gegenseitig."}, {label: "c", text: "Senioren kaufen für die Kinder ein."}], answer: "b" },
          { id: "q5_12", text: "12. Wer in das Haus einziehen möchte, ...", type: "abc", options: [{label: "a", text: "Muss 15 Monate auf eine Wohnung warten."}, {label: "b", text: "Muss sich am Mittwochabend im Rathaus bewerben."}, {label: "c", text: "Muss Freizeit für das Projekt zur Verfügung stellen."}], answer: "c" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Anzeigen. Finden Sie für jede Situation die passende Anzeige. Es gibt eine Situation, für die keine Anzeige passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Kleinanzeigen rund ums Wohnen</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) Maler- und Renovierungsarbeiten</strong>. Frische Farbe für Ihre Wände! Wir tapezieren und streichen schnell und sauber. Günstige Festpreise. Rufen Sie unverbindlich an.</li>
            <li class="anzeige-box"><strong>B) Haushaltshilfe gesucht</strong>. Familie in Hannovermit zwei Kindern sucht zuverlässige Person für Reinigung und Bügeln, ca. 4 Stunden pro Woche. Bezahlung auf Rechnung (Voraussetzung: Sie sind angemeldet!).</li>
            <li class="anzeige-box"><strong>C) Sofa zu verschenken!</strong>. Großes Ecksofa, grau, wegen Neukauf abzugeben. Hat leichte Gebrauchsspuren von einer Katze, ist aber sehr bequem. Abholung am Wochenende im 3. Stock.</li>
            <li class="anzeige-box"><strong>D) Nachmieter gesucht: 2-Zimmer-Wohnung</strong>. Schöne, helle Wohnung (60qm) in ruhiger Lage am Stadtrand zu vermieten. Balkon vorhanden. Küche muss für 500 Euro übernommen werden. Sofort frei.</li>
            <li class="anzeige-box"><strong>E) Zuverlässige Handwerker gesucht</strong>. Wasserhahn tropft? Die Heizung ist kalt? Wir reparieren alles rund um Bad und Küche in nur 24 Stunden. 24/7 Notfallservice an Wochenenden.</li>
            <li class="anzeige-box"><strong>F) Lagerraum / Keller zu vermieten</strong>. Sie haben keinen Platz mehr in der Wohnung? Trockener, sicherer Kellerraum (10qm) im Zentrum für 50 Euro pro Monat ab sofort zu vermieten.</li>
            <li class="anzeige-box"><strong>G) Reinigungsservice "Blitzblank"</strong>. Keine Lust auf Fensterputzen? Wir reinigen Ihre Wohnung komplett für den Frühling. Gründlich und mit biologischen Mitteln. Fordern Sie ein Angebot an!</li>
            <li class="anzeige-box"><strong>H) Suche WG-Zimmer</strong>. Medizinstudent (20), ruhig, sucht nettes Zimmer in einer entspannten WG nah an der Universität. Miete warm bis max. 350 Euro. Ich koche gerne!</li>
          </ul>
        `,
        questions: [
          { id: "q5_13", text: "13. Ihr Mitbewohner zieht bald aus und Sie suchen nun eine ruhige neue Person für das leere Zimmer in Ihrer Wohnung.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "H" },
          { id: "q5_14", text: "14. Sie ziehen in eine neue Stadt und wollen ab sofort eine kleine Wohnung mieten, weil Sie bei der Arbeit keine Zeit zum Suchen haben.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "D" },
          { id: "q5_15", text: "15. Am Sonntagnachmittag ist in Ihrem Badezimmer ein Rohr kaputt gegangen und das Wasser läuft auf den Boden.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "E" },
          { id: "q5_16", text: "16. Sie haben ein großes Haus und schaffen es nicht, alle Zimmer neben dem Beruf selbst aufzuräumen und sauber zu machen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "B" },
          { id: "q5_17", text: "17. Eine Bekannte zieht in eine winzige Wohnung und weiß nicht, wohin sie ihre Möbel für einige Monate stellen soll.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "F" },
          { id: "q5_18", text: "18. Ihr Studentenbettzeug ist im Auto und sie suchen eine billige Couch für das Wohnzimmer Ihres neuen Apartments. Sie haben kein Geld.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "C" },
          { id: "q5_19", text: "19. Sie suchen dringend ein Ticket für das ausverkaufte Fußballspiel heute Abend.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für ein Verbot von Hunden in Mietwohnungen?",
        text: `
          <h3>Diskussionsthema: Dürfen Vermieter verbieten, Hunde in der Wohnung zu halten?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für ein Verbot. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Andrea, 34:</strong> Absolut! In unserem Haus wohnen mehrere Familien mit großen Hunden. Fast jeden Tag höre ich Bellen im Treppenhaus. Außerdem wird der Boden im Flur an Regentagen durch die nassen Pfoten ständig schmutzig. Man sollte Hunde in Mietshäusern nicht erlauben.</p>
          <p><strong>21. Thomas, 41:</strong> Ein Haustier ist für viele Menschen wie ein Familienmitglied, besonders für Ältere, die sonst sehr einsam wären. Es ist herzlos und ungerecht, wenn Wohnungsbaugesellschaften vertraglich festlegen, dass solche Tiere nicht einziehen dürfen.</p>
          <p><strong>22. Miriam, 55:</strong> Meine Freundin wurde als Kind von einem Hund gebissen und hat nun panische Angst vor ihnen. Wenn sie abends im dunklen Treppenhaus auf einen Schäferhund trifft, bekommt sie Atemnot. Es muss deshalb möglich sein, das Halten von großen Hunden zu verbieten, um die anderen Bewohner zu schützen.</p>
          <p><strong>23. Stefan, 29:</strong> Ich hatte selbst schon einen Hund in meiner Wohnung. Klar bellt der ab und zu, aber Kinder im Haus sind oft wesentlich lauter! Solange das Tier gut erzogen ist, sehe ich überhaupt keinen Grund, warum ein Vermieter das verbieten sollte.</p>
          <p><strong>24. Laura, 31:</strong> Hunde zerstören oft den Parkettboden in Wohnungen, weil ihre Krallen tiefe Kratzer im Holz hinterlassen. Am Ende muss der Vermieter die teuren Reparaturen bezahlen. Es ist das Eigentum des Vermieters, somit muss ein striktes Verbot erlaubt bleiben.</p>
          <p><strong>25. David, 45:</strong> Das Argument, Hunde würden Wohnungen immer kaputtmachen, stimmt doch gar nicht. Man zahlt ja eine Kaution für Schäden und kann zudem eine Haftpflichtversicherung abschließen. Wohnen darf nicht bedeutet, dass man Menschen ihre kleinen Freunde wegnimmt. Ich finde Verbote unmöglich.</p>
          <p><strong>26. Karin, 62:</strong> Ein Mietshaus ist keine Farm. Es gibt Leute, die gegen Hundehaare allergisch sind, und oft riecht der Eingangsbereich unangenehm, wenn viele Tiere im Haus leben. Wenn jemand unbedingt einen Hund will, muss er sich ein eigenes Haus mit Garten auf dem Land kaufen.</p>
          </div>
        `,
        questions: [
          { id: "q5_20", text: "20. Andrea", type: "jn", answer: "ja" },
          { id: "q5_21", text: "21. Thomas", type: "jn", answer: "nein" },
          { id: "q5_22", text: "22. Miriam", type: "jn", answer: "ja" },
          { id: "q5_23", text: "23. Stefan", type: "jn", answer: "nein" },
          { id: "q5_24", text: "24. Laura", type: "jn", answer: "ja" },
          { id: "q5_25", text: "25. David", type: "jn", answer: "nein" },
          { id: "q5_26", text: "26. Karin", type: "jn", answer: "ja" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Information für Mieter und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Mülltrennung in unserer Wohnanlage</h3>
          <p>Liebe Mieterinnen und Mieter,<br>
          wir möchten Sie an die korrekte Mülltrennung erinnern, da in letzter Zeit vermehrt Strafgebühren für falsch sortierten Müll von der Stadtverwaltung erhoben wurden. Bitte beachten Sie:</p>
          <p><strong>Blaue Tonne (Papier):</strong> Hier gehören Kartons, Zeitungen und Kataloge hinein. Achtung: Große Pappkartons müssen vorher zerkleinert werden. Beschmutztes Papier (z.B. benutzte Pizzakartons mit Essensresten) gehört nicht hierhin, sondern in den Restmüll.<br>
          <strong>Gelbe Tonne (Wertstoffe):</strong> Ausschließlich für Plastikverpackungen, Konservendosen und Aluminiumfolie. Bitte spülen Sie Joghurtbecher nicht aus, das verschwendet Wasser. Sie müssen aber völlig leer sein.<br>
          <strong>Braune Tonne (Biomüll):</strong> Speisereste, Obst- und Gemüseschalen, sowie Pflanzen und Blumen. Sehr wichtig: In die Biotonne dürfen keine normalen Plastiktüten geworfen werden, auch keine sogenannten 'kompostierbaren' Plastiktüten aus dem Supermarkt. Nutzen Sie am besten Papiertüten.<br>
          <strong>Glas:</strong> Altglas (Flaschen, kaputte Gläser) darf nicht in den Restmüll. Bitte bringen Sie Glas zu den öffentlichen Glascontainern in der Lindenstraße. Das Einwerfen in die Container ist sonntags und an Feiertagen gesetzlich streng verboten.</p>
        `,
        questions: [
          { id: "q5_27", text: "27. Was muss in die graue Tonne (Restmüll) geworfen werden?", type: "abc", options: [{label: "a", text: "Ein komplett sauberer, großer Karton von einem Fernseher."}, {label: "b", text: "Ein Karton von einer Pizza, worauf noch Öl und Käse kleben."}, {label: "c", text: "Eine leere Dose für Hundefutter."}], answer: "b" },
          { id: "q5_28", text: "28. Joghurtbecher sollen ...", type: "abc", options: [{label: "a", text: "vor dem Wegwerfen gründlich mit viel Wasser gereinigt werden."}, {label: "b", text: "leer in die Gelbe Tonne geworfen werden."}, {label: "c", text: "nicht weggeworfen, sondern wiederverwendet werden."}], answer: "b" },
          { id: "q5_29", text: "29. Für den Abfall vom Kochen (z.B. Apfelschalen) darf man ...", type: "abc", options: [{label: "a", text: "keine Tüten aus Plastik zum Transport benutzen."}, {label: "b", text: "den Biomüll nur in Plastiktüten aus dem Supermarkt lagern."}, {label: "c", text: "nur die Biotonne am Wochenende benutzen."}], answer: "a" },
          { id: "q5_30", text: "30. Warum darf man am Feiertag kein Glas wegbringen?", type: "abc", options: [{label: "a", text: "Weil Feiertage in der Lindenstraße stattfinden."}, {label: "b", text: "Weil es laut einem Gesetz nicht erlaubt ist."}, {label: "c", text: "Weil dann Strafgebühren im Haus bezahlt werden müssen."}], answer: "b" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Modellsatz 6: Umwelt und Natur",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie den Blogbeitrag und den Kommentar. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Klimablog von Max</h3>
          <p>Letzte Woche habe ich beschlossen, einen Monat lang komplett auf Plastik zu verzichten. Ich dachte mir: Das kann doch nicht so schwer sein. Oh Mann, da habe ich mich geirrt! Schon beim ersten Einkauf im Supermarkt stand ich vor einem riesigen Problem. Fast alles, von den Nudeln bis zum Käse, ist in Plastik verpackt. Selbst Biogemüse ist oft in Folie gewickelt. Ich musste also einen sogenannten "Unverpackt-Laden" suchen. Dort bringt man seine eigenen Gläser mit und füllt sich Müsli, Reis oder Nudeln selbst ab. Das Konzept ist toll, aber der Laden ist am anderen Ende der Stadt und die Produkte sind fast doppelt so teuer wie im normalen Supermarkt. Auf Fleisch habe ich komplett verzichtet, weil man an der Frischetheke oft trotzdem Plastikpapier bekommt. Zum Glück gibt es auf dem Wochenmarkt Obst und Gemüse ganz ohne Verpackung. Mein Fazit nach einer Woche: Es ist machbar, aber man braucht viel mehr Zeit für die Planung und auch mehr Geld im Alltag.</p>
          <hr/>
          <h3>Kommentar von Julian</h3>
          <p>Hallo Max,<br>
          Hut ab für deinen Versuch! Ich habe vor ein paar Monaten etwas Ähnliches probiert. Bei mir hat es allerdings nur fünf Tage geklappt. Danach war ich so frustriert, dass ich aufgegeben habe. Was das Biogemüse angeht: Ich habe neulich in einem Umweltmagazin gelesen, warum gerade dieses oft in Plastik eingepackt ist. Das liegt paradoxerweise an den Gesetzen. Bio-Produkte und konventionelle Produkte müssen im Kassenbereich durch einen Barcode auf der Folie sicher unterschieden werden, damit niemand aus Versehen (oder absichtlich) den billigeren Preis zahlt. Deswegen ist ausgerechnet das umweltfreundliche Gemüse oft in Plastik eingewickelt! Ich versuche inzwischen einfach, woanders Plastik zu sparen. Ich habe zum Beispiel immer einen Stoffbeutel dabei und kaufe mein Wasser nur noch in Glasflaschen. Weiter so!<br>
          Viele Grüße, Julian</p>
        `,
        questions: [
          { id: "q6_1", text: "1. Max fand es sehr einfach, im Supermarkt Produkte ohne Plastik zu finden.", type: "tf", answer: "falsch" },
          { id: "q6_2", text: "2. Max nutzt für seinen Einkauf in einem speziellen Laden alte Gläser.", type: "tf", answer: "richtig" },
          { id: "q6_3", text: "3. Ein Leben ohne Plastik kostet Max mehr Zeit und Geld.", type: "tf", answer: "richtig" },
          { id: "q6_4", text: "4. Julian hat seinen Versuch, ohne Plastik zu leben, nach einem Monat beendet.", type: "tf", answer: "falsch" },
          { id: "q6_5", text: "5. Biogemüse in Plastik einzupacken ist in Deutschland eigentlich streng verboten.", type: "tf", answer: "falsch" },
          { id: "q6_6", text: "6. Julian trinkt sein Wasser nicht mehr aus Plastikflaschen.", type: "tf", answer: "richtig" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Magazinbeitrag</h3>
          <p><strong>Carsharing in der Großstadt</strong><br>
          Ein eigenes Auto in der Stadt zu haben, bedeutet oft Stress: Man steht im Stau, muss Steuern zahlen und findet abends keinen Parkplatz. Aus diesem Grund wächst der Trend zum "Carsharing", dem Teilen von Autos. Das Prinzip ist einfach: Nach der Online-Registrierung kann man jederzeit über eine App auf dem Handy sehen, wo das nächste freie Auto in der Nähe parkt. Man bucht das Fahrzeug, öffnet es mit dem Smartphone und zahlt nur die Minuten, in denen man tatsächlich fährt. Benzin und Versicherungen sind im Preis inklusive. Experten betonen die positiven Effekte für die Umwelt: Ein Carsharing-Auto kann bis zu 15 private Fahrzeuge ersetzen. Dadurch gibt es weniger Verkehr und man gewinnt freien Raum auf den Straßen zurück, der für Bäume oder Fahrradwege genutzt werden könnte. Kritiker bemängeln jedoch, dass das System oft nur in den gut verdienenden Innenstadtvierteln funktioniert und Menschen am Stadtrand wenig davon profitieren.</p>
          <br>
          <h3>Text 2: Informationsflyer</h3>
          <p><strong>Die Aktion „Rettet die Bienen!“</strong><br>
          Die Zahl der Insekten und besonders der Wildbienen ist in den letzten Jahren dramatisch gesunken. Verantwortlich dafür sind vor allem Pestizide in der Landwirtschaft, aber auch Gärten in denen nur Rasen gemäht wird. Eine Umweltorganisation hat nun die Aktion "Rettet die Bienen!" ins Leben gerufen und fordert die Bürger zum Handeln auf. Auf dem Rathausplatz verteilt der Verein heute Nachmittag kostenlose Päckchen mit Wildblumensamen. Diese Pflanzen bieten den Bienen im Hochsommer genug Nektar. Wer keinen eigenen Garten hat, kann die Samen auch in kleinen Töpfen auf dem Balkon pflanzen. Außerdem bietet die Organisation am kommenden Wochenende einen Kurs an, bei dem man lernt, Insektenhotels für den Winter selbst zu bauen. Der Verein warnt eindringlich davor, kranke oder müde Bienen im Sommer mit normalem Haushaltszuckerwasser zu füttern, da dies für die Tiere schädlich sein kann.</p>
        `,
        questions: [
          { id: "q6_7", text: "7. Der Text informiert hauptsächlich über ...", type: "abc", options: [{label: "a", text: "die Funktionsweise des Carsharings in Städten."}, {label: "b", text: "die Kosten von neuem Benzin."}, {label: "c", text: "den Kauf von neuen Autos."}], answer: "a" },
          { id: "q6_8", text: "8. Was ist ein Vorteil des Auto-Teilens?", type: "abc", options: [{label: "a", text: "Man kann als Fahrer Geld verdienen."}, {label: "b", text: "Es gibt wieder mehr Platz auf den Straßen."}, {label: "c", text: "Es gibt plötzlich viel weniger Unfälle in der Stadt."}], answer: "b" },
          { id: "q6_9", text: "9. Was sehen manche Leute skeptisch beim Carsharing?", type: "abc", options: [{label: "a", text: "Die Autos sind oft schmutzig und alt."}, {label: "b", text: "Es gibt diese Autos nicht überall in der Stadt."}, {label: "c", text: "Die App funktioniert nicht richtig."}], answer: "b" },
          { id: "q6_10", text: "10. Worum geht es in dem Flyer?", type: "abc", options: [{label: "a", text: "Um den Schutz und die Hilfe für Bienen."}, {label: "b", text: "Um die Arbeit auf einem Bauernhof."}, {label: "c", text: "Um den perfekten Honig zum Kochen."}], answer: "a" },
          { id: "q6_11", text: "11. Wie hilft die Organisation den Bürgern heute?", type: "abc", options: [{label: "a", text: "Sie verteilt kostenlos Insekten auf dem Markt."}, {label: "b", text: "Sie gibt den Menschen Pflanzen, die sie einpflanzen sollen."}, {label: "c", text: "Sie baut für jeden ein Insektenhotel aus Holz."}], answer: "b" },
          { id: "q6_12", text: "12. Wenn man eine müde Biene sieht, soll man nicht ...", type: "abc", options: [{label: "a", text: "Wasser in einem Tontopf auf den Balkon stellen."}, {label: "b", text: "sie mit normalem, süßem Wasser füttern."}, {label: "c", text: "eigene Kräuter oder Tomaten in der Natur pflanzen."}], answer: "b" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Angebote. Finden Sie für jede Situation das passende Angebot. Es gibt eine Situation, für die kein Angebot passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Aktionen und Produkte für den Umweltschutz</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) Upcycling-Workshop für Kleidung</strong>. Haben Sie T-Shirts oder Pullover mit Löchern, die Sie wegwerfen wollen? Wir zeigen Ihnen, wie Sie aus kaputter Kleidung neue Taschen oder Kissenbezüge nähen! Nähmaschinen werden gestellt.</li>
            <li class="anzeige-box"><strong>B) Repair-Café Südring</strong>. Ihr alter Toaster wird nicht mehr warm? Das Radio bleibt stumm? Bevor ab in den Müll, kommen Sie samstags zu uns! Ehrenamtliche Techniker helfen Ihnen, alte Elektrogeräte kostenlos zu reparieren. (Achtung: Keine Handys!).</li>
            <li class="anzeige-box"><strong>C) Aktion 'Sauberer Wald'</strong>. Jedes Jahr am 1. Mai treffen wir uns am großen Parkplatz am Waldrand. Wir sammeln mit Mülltüten und Handschuhen alle Flaschen und Verpackungen im Wald. Die Stadt spendiert abends Würstchen für alle Helfer.</li>
            <li class="anzeige-box"><strong>D) Second-Hand-Möbellager</strong>. Werfen Sie gute alte Möbel nicht weg! Wir holen Tische, Schränke und Sofas kostenlos ab. Die Sachen werden in unserer Werkstatt gereinigt und für nur wenig Geld an junge Leute verkauft.</li>
            <li class="anzeige-box"><strong>E) Kurs 'Naturkosmetik selbstgemacht'</strong>. Herkömmliche Hautcremes enthalten oft Mikroplastik, das das Grundwasser verschmutzt. In unserem dreistündigen Kurs lernen Sie, Shampoo und Cremes aus Olivenöl und Heilpflanzen herzustellen. Inklusive Infomaterial.</li>
            <li class="anzeige-box"><strong>F) Tauschmarkt für Bücher und DVDs</strong>. Haben Sie volle Regale? Am Samstag in der Bibliothek: Bringen Sie die Romane und Filme mit, die Sie schon kennen, und tauschen Sie diese einfach gegen Geschichten von anderen Leuten - ganz ohne Geld!</li>
            <li class="anzeige-box"><strong>G) Stromfresser-Check</strong>. Wissen Sie, ob Ihr alter Kühlschrank zu viel Energie verbraucht? Leihen Sie bei uns kostenlos Messgeräte aus, um den Stromverbrauch Ihrer teuren Haushaltsgeräte in der Wohnung zu überprüfen!</li>
            <li class="anzeige-box"><strong>H) Patenschaft für Obstbäume</strong>. Für nur 50 Euro im Jahr pflanzen wir in der Region einen neuen Apfel- oder Birnenbaum mit Ihrem Namen. Eine wunderbare Idee, um etwas gegen die CO2-Belastung zu tun.</li>
          </ul>
        `,
        questions: [
          { id: "q6_13", text: "13. Ihr alter Drucker ist kaputtgegangen und Sie möchten, dass sich jemand ihn anschaut, bevor Sie einen neuen kaufen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "B" },
          { id: "q6_14", text: "14. Sie ziehen um und haben ein Bett, das nicht mehr in das neue Auto passt. Sie wollen es nicht wegwerfen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "D" },
          { id: "q6_15", text: "15. Ihre Freundin hat ein kaputtes Kleid und sucht nun jemand, der das Kleid professionell reparieren kann.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" },
          { id: "q6_16", text: "16. Sie haben nach einem Spaziergang bemerkt, dass im Wald viel Müll und Plastik in den Büschen liegt und wollen helfen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "C" },
          { id: "q6_17", text: "17. Sie zahlen sehr viel Geld für Energie jeden Monat und wollen herausfinden, welche Maschine im Haus so teuer ist.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "G" },
          { id: "q6_18", text: "18. Sie haben eine Allergie gegen künstliche Inhaltsstoffe in Seifen und wollen wissen, wie man natürliche Alternativen produziert.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "E" },
          { id: "q6_19", text: "19. Sie haben eine Jeans, die an den Knien kaputt ist, und wollen kreativ etwas Neues daraus machen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "A" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für ein Verbot von Kurzstreckenflügen in Europa?",
        text: `
          <h3>Diskussionsthema: Sollen Flugreisen unter 500 Kilometern in Europa verboten werden, um das Klima zu retten?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für ein Flugverbot. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Andrea, 34:</strong> Ein Verbot ist absolut notwendig! Es ist absurd, dass Leute von Frankfurt nach München fliegen, nur weil es vielleicht 20 Minuten schneller geht als mit dem Zug. Die Flugzeuge verursachen wahnsinnig viele Abgase auf so kurzen Strecken. Wenn wir den Klimawandel stoppen wollen, müssen wir damit anfangen.</p>
          <p><strong>21. Felix, 29:</strong> Ich arbeite bei einer internationalen Firma und muss oft beruflich verreisen. Wenn ich nach Brüssel oder Paris muss, schaffe ich das mit dem Flugzeug an einem Tag, weil ich sehr früh hin- und abends zurückfliege. Ein Verbot würde meine ganze Arbeit viel komplizierter und langsamer machen.</p>
          <p><strong>22. Miriam, 41:</strong> Wenn man kurze Flüge verbieten will, muss man erstmal das Bahnfahren billiger und zuverlässiger machen. Solange ein Zugticket teurer ist und zehn Stunden dauert und man nie weiß, ob man ankommt, darf man den Leuten kurze Flüge nicht verbieten.</p>
          <p><strong>23. Simon, 50:</strong> Wir fliegen nicht, weil wir das Flugzeug lieben, sondern weil in Europa das Zugnetz gar nicht gut genug funktioniert. Wenn die EU ein solches Verbot durchsetzen will, müssten erst überall Hochgeschwindigkeitszüge fahren wie in Japan. Ohne diese Züge halte ich ein Flugverbot im Moment für falsch.</p>
          <p><strong>24. Laura, 31:</strong> Ich fliege schon aus Prinzip keine Kurzstrecke mehr! Frankreich hat gezeigt, dass es geht. Dort sind viele Inlandsflüge verboten worden, wenn ein Zug die gleiche Strecke in unter zweieinhalb Stunden schafft. Ich finde, ganz Europa sollte sofort das französische Modell kopieren.</p>
          <p><strong>25. David, 38:</strong> Statt Flugzeuge immer sofort zu verbieten, sollte man Steuern erhöhen. Wenn das Flugticket 150 Euro extra an Umweltsteuern kostet, fliegen die Menschen von ganz alleine nicht mehr kurze Strecken nach Berlin. Man muss über den Markt arbeiten, nicht über Verbote.</p>
          <p><strong>26. Karin, 62:</strong> Ein einzelner kurzer Flug in Mitteleuropa schadet dem Klima viel mehr als ein Jahr Autofahren. Es ist ein Wahnsinn. In einem modernen Kontinent gibt es andere Wege, um an sein Ziel zu kommen. Solange Flüge erlaubt sind, werden die Airlines immer billige Angebote machen, die verlockend sind. Ich fordere einen klaren gesetzlichen Schluss!</p>
          </div>
        `,
        questions: [
          { id: "q6_20", text: "20. Andrea", type: "jn", answer: "ja" },
          { id: "q6_21", text: "21. Felix", type: "jn", answer: "nein" },
          { id: "q6_22", text: "22. Miriam", type: "jn", answer: "nein" },
          { id: "q6_23", text: "23. Simon", type: "jn", answer: "nein" },
          { id: "q6_24", text: "24. Laura", type: "jn", answer: "ja" },
          { id: "q6_25", text: "25. David", type: "jn", answer: "nein" },
          { id: "q6_26", text: "26. Karin", type: "jn", answer: "ja" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Informationstafel auf dem Recyclinghof und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Regeln auf dem städtischen Recyclinghof „Grüner Weg“</h3>
          <p>Willkommen auf dem Wertstoffhof! Um einen reibungslosen Ablauf zu garantieren und Unfälle zu vermeiden, bitten wir Sie, unsere Platzordnung einzuhalten:</p>
          <p><strong>Einfahrt:</strong> Auf dem direkten Gelände dürfen nur Fahrzeuge mit einem gelben Stempel der Stadt fahren. Das maximale Gewicht der PKW darf 3,5 Tonnen nicht überschreiten. Wenn Sie mit großen Anhängern oder Transportern kommen, müssen Sie das Tor 2 an der Nordseite nutzen. Dort wird die Einfahrt gesondert kontrolliert.<br>
          <strong>Sondermüll:</strong> Farben, Lacke, Batterien und giftige Chemikalien wie Reinigungsmittel sind hochgradig gefährlich für das Grundwasser. Geben Sie diese Stoffe niemals unbeaufsichtigt ab! Sie müssen direkt bei unserem Personal am Schalter B persönlich übergeben werden. Mischen Sie niemals verschiedene Flüssigkeiten in einem Behälter!<br>
          <strong>Kosten:</strong> Die Abgabe von Grünschnitt (z.B. Blätter und Äste aus dem Garten) ist bis zu einem Volumen von einem Kubikmeter für alle Bürger kostenlos. Für Elektroschrott (wie Fernseher oder Waschmaschinen) aus privaten Haushalten wird seit April keine Gebühr mehr fällig. Nur für Bauschutt aus Renovierungen (z.B. Steine oder Fliesen) zahlen Sie pro hundert Kilo pauschal 15 Euro.<br>
          <strong>Kinder:</strong> Aus Sicherheitsgründen (wegen großer Maschinen und LKW) ist Kindern unter 12 Jahren das Verlassen des Autos auf dem gesamten Wertstoffhof strikt untersagt.</p>
        `,
        questions: [
          { id: "q6_27", text: "27. Was muss man tun, wenn man einen Anhänger dabei hat?", type: "abc", options: [{label: "a", text: "Man muss einen gelben Stempel in sein Buch machen."}, {label: "b", text: "Man muss das Auto weit außerhalb des Hofes parken."}, {label: "c", text: "Man muss durch einen anderen Eingang auf den Hof fahren."}], answer: "c" },
          { id: "q6_28", text: "28. Alte Autobatterien oder Reste von giftigen Farben ...", type: "abc", options: [{label: "a", text: "darf man nicht einfach an einer Ecke auf den Boden stellen."}, {label: "b", text: "muss man vor der Abgabe gut in einer Flasche mischen."}, {label: "c", text: "darf man nur auf dem Recyclinghof auskippen."}], answer: "a" },
          { id: "q6_29", text: "29. Für welche Dinge muss man heute an der Kasse extra bezahlen?", type: "abc", options: [{label: "a", text: "Für große Bäume oder Blätter."}, {label: "b", text: "Für Bauabfall wie alte Fliesen."}, {label: "c", text: "Für alte Fernseher und elektrische Heizungen."}], answer: "b" },
          { id: "q6_30", text: "30. Warum dürfen kleine Kinder nicht aussteigen?", type: "abc", options: [{label: "a", text: "Weil sie sich schmutzig machen könnten."}, {label: "b", text: "Weil es keinen Spielplatz dort gibt."}, {label: "c", text: "Weil es wegen großen Fahrzeugen gefährlich ist."}], answer: "c" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Modellsatz 7: Lernen und Medien",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie den Blogbeitrag und den Kommentar. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Lernblog von Sara</h3>
          <p>Hallo zusammen! Ich lerne gerade für meine Abschlussprüfung an der Uni und dachte, ich teile meine Erfahrungen mit euch. Früher habe ich mir immer in der Bibliothek dicke Bücher ausgeliehen und stundenlang Texte markiert. Diesen Monat habe ich etwas Neues ausprobiert: Ich lerne fast nur noch mit Podcasts und YouTube-Videos. Das ist so viel praktischer! Ich kann mir Vorlesungen anhören, während ich im Park spazieren gehe oder in der Bahn sitze. Allerdings merke ich, dass mir manchmal die Konzentration fehlt. Wenn ich beim Hören aufs Handy schaue, um eine Nachricht zu lesen, weiß ich nach drei Minuten nicht mehr, worüber im Podcast gesprochen wurde. Vor zwei Tagen habe ich dann alle Apps auf meinem Handy blockiert, während ich lerne. Das hilft enorm! Trotzdem werde ich mir für die schweren Theorietexte wohl doch wieder klassische Bücher ausleihen müssen, weil man sich Bilder und Grafiken über das Hören einfach schlecht vorstellen kann. Wie lernt ihr am besten?</p>
          <hr/>
          <h3>Kommentar von Jonas</h3>
          <p>Hi Sara,<br>
          ich kann total verstehen, was du meinst. Ich bereite mich aktuell auf meine Meisterprüfung vor und lerne wahnsinnig gerne mit Lern-Apps auf dem Tablet. Dort werden einem oft kleine Quizfragen gestellt, sodass man direkt testen kann, ob man den Stoff verstanden hat. Das motiviert mich viel mehr als das Lesen von trockenen Texten. Mein Tipp: Lass das Handy komplett im Wohnzimmer, wenn du am Schreibtisch sitzt! Selbst wenn du Apps blockierst, lenkt das Gerät auf dem Tisch dich ab, weil das Gehirn immer erwartet, dass gleich eine Nachricht kommt. Ich habe mir extra einen alten MP3-Player gekauft, auf den ich meine Hörbücher für die Prüfung lade. So gehe ich ohne Smartphone spazieren und höre die Texte sehr fokussiert. Für Grafiken nutze ich übrigens kleine Karteikarten aus Papier. Die schreibe ich selbst, das ist laut vielen Studien die effektivste Methode!<br>
          Viel Erfolg, Jonas</p>
        `,
        questions: [
          { id: "q7_1", text: "1. Sara hat früher sehr oft Bücher aus der Bibliothek benutzt.", type: "tf", answer: "richtig" },
          { id: "q7_2", text: "2. Sara kann sich beim Spazierengehen am allerbesten konzentrieren.", type: "tf", answer: "falsch" },
          { id: "q7_3", text: "3. Sara möchte für schwierige Themen wieder gedruckte Texte lesen.", type: "tf", answer: "richtig" },
          { id: "q7_4", text: "4. Jonas lernt momentan für ein Studium an der Universität.", type: "tf", answer: "falsch" },
          { id: "q7_5", text: "5. Jonas meint, auch ein gesperrtes Handy auf dem Tisch ist eine Störung.", type: "tf", answer: "richtig" },
          { id: "q7_6", text: "6. Jonas macht online am Computer Karteikarten für Grafiken.", type: "tf", answer: "falsch" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Schulmagazin</h3>
          <p><strong>Hausaufgaben abschaffen?</strong><br>
          Seit Jahren streiten sich Eltern, Lehrer und Politiker über den Sinn von Hausaufgaben. Eine neue Studie des Instituts für Bildungsforschung hat nun Öl ins Feuer gegossen: Die Forscher fanden heraus, dass Hausaufgaben bei Schülern unter 12 Jahren kaum zu besseren Noten führen. Stattdessen verursachen sie oft enormen Stress in den Familien. Viele Kinder sitzen nach einem langen Schultag noch zwei Stunden am Schreibtisch, anstatt draußen zu spielen oder sich zu bewegen. In einigen skandinavischen Ländern wurden Hausaufgaben bereits vor Jahren, besonders in den unteren Klassen, weitgehend verboten. Die Schüler dort schneiden in internationalen Tests trotzdem hervorragend ab. Befürworter der Hausaufgaben in Deutschland argumentieren jedoch, dass Kinder durch die Aufgaben lernen, eigenverantwortlich zu arbeiten und sich selbst zu organisieren – eine wichtige Fähigkeit für das spätere Berufsleben.</p>
          <br>
          <h3>Text 2: Artikel aus einer Computerzeitschrift</h3>
          <p><strong>Die Gefahr beim Online-Spielen</strong><br>
          Videospiele im Internet sind das beliebteste Hobby vieler Jugendlicher. Man kann mit Freunden weltweit kommunizieren und gemeinsam virtuelle Welten erkunden. Doch Experten warnen nun vor einer speziellen Mechanik in vielen neuen Spielen: den sogenannten "Lootboxen". Das sind virtuelle Überraschungskisten, die Spieler mit echtem Geld kaufen können. Man weiß vorher nie, was in der Box ist – manchmal ist es ein seltenes Outfit für den eigenen Spielcharakter, meistens jedoch nur wertlose Gegenstände. Psychologen vergleichen dieses System mit Glücksspiel, da es besonders bei jungen Menschen schnell zu einer Sucht führen kann. Einige Eltern berichten, dass ihre Kinder heimlich Hunderte Euro von der Kreditkarte abgebucht haben, um diese Boxen zu kaufen. Die Verbraucherzentrale fordert nun ein politisches Gesetz, das den Verkauf solcher Glückskisten an Personen unter 18 Jahren streng verbietet.</p>
        `,
        questions: [
          { id: "q7_7", text: "7. Der Artikel spricht über ...", type: "abc", options: [{label: "a", text: "den Sinn und Unsinn von Hausaufgaben."}, {label: "b", text: "die Noten in der Schule allgemein."}, {label: "c", text: "Hobbys am Nachmittag."}], answer: "a" },
          { id: "q7_8", text: "8. Was zeigt das Beispiel aus Skandinavien laut Text?", type: "abc", options: [{label: "a", text: "Ohne Hausaufgaben können Kinder trotzdem gute Leistungen zeigen."}, {label: "b", text: "Dort verbieten die Eltern den Kindern das Lernen zu Hause."}, {label: "c", text: "In Skandinavien gibt es keine internationalen Tests mehr."}], answer: "a" },
          { id: "q7_9", text: "9. Warum finden einige Leute Hausaufgaben aber immer noch wichtig?", type: "abc", options: [{label: "a", text: "Weil der Lehrer sonst nachmittags nichts zu tun hat."}, {label: "b", text: "Weil die Schüler so lernen, selbstständig Pflichten zu erledigen."}, {label: "c", text: "Weil sie wollen, dass die Kinder auch am Wochenende üben."}], answer: "b" },
          { id: "q7_10", text: "10. Was ist das Thema des Textes?", type: "abc", options: [{label: "a", text: "Warum Computerspiele viel Spaß machen."}, {label: "b", text: "Eine Kostenfalle in modernen Spielen."}, {label: "c", text: "Wie man eigene Spiele baut."}], answer: "b" },
          { id: "q7_11", text: "11. Welches Problem gibt es mit diesen Boxen laut den Psychologen?", type: "abc", options: [{label: "a", text: "Sie können junge Menschen süchtig nach Glücksspielen machen."}, {label: "b", text: "Sie kosten immer exakt hundert Euro pro Stück."}, {label: "c", text: "Die Spiele werden dadurch zu schwierig zu spielen."}], answer: "a" },
          { id: "q7_12", text: "12. Was verlangen die Verbraucherschützer?", type: "abc", options: [{label: "a", text: "Die Spiele sollen auf Kreditkarten verboten werden."}, {label: "b", text: "Minderjährige sollen diese Kisten durch ein Gesetz nicht mehr kaufen dürfen."}, {label: "c", text: "Das Internet muss für Jugendliche am Abend verboten werden."}], answer: "b" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Anzeigen. Finden Sie für jede Situation die passende Anzeige. Es gibt eine Situation, für die keine Anzeige passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Angebote aus Bildung und Medien</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) Nachhilfezentrum „Schlaumeier“</strong>. Wir bieten professionelle Nachhilfe in Mathematik, Physik und Chemie. Sowohl für Grundschüler als auch für Abiturienten. Individueller Unterricht bei Ihnen zu Hause oder online.</li>
            <li class="anzeige-box"><strong>B) Workshop: 'Fotografie für Anfänger'</strong>. Sie haben eine teure Digitalkamera, nutzen aber nur den Automatikmodus? Wir erklären Ihnen Blende, Belichtungszeit und Motivwahl an einem Samstag in der Volkshochschule. </li>
            <li class="anzeige-box"><strong>C) Computerkurs für Senioren</strong>. Keine Angst vor Maus und Tastatur! In einer kleinen Gruppe lernen Sie altersgerecht, Emails zu schreiben, das Internet sicher zu nutzen und Fotos von Enkeln zu speichern. Freitags 10:00 - 12:00 Uhr.</li>
            <li class="anzeige-box"><strong>D) Sprachschule „Hola“ - Spanisch intensiv</strong>. Lernen Sie Spanisch für den nächsten Urlaub oder den Beruf. In unseren Abendkursen (Di. und Do.) bereiten wir echte Konversationen vor. Nur für Erwachsene mit Vorkenntnissen (B1).</li>
            <li class="anzeige-box"><strong>E) Programmier-Camp für Teenager</strong>. In den Sommerferien tauchen Jugendliche (13-17 Jahre) in die Welt des Programmierens ein. Sie programmieren ihr eigenes kleines Spiel in Python. Vorkenntnisse sind nicht nötig!</li>
            <li class="anzeige-box"><strong>F) Seminar „Erfolgreich vor Publikum sprechen“</strong>. Haben Sie Angst, im Büro vor Kollegen einen Vortrag zu halten? Lernen Sie Körpersprache, Atemtechniken und klare Rhetorik für Ihre nächste große Präsentation. Zweitägiges Intensivseminar.</li>
            <li class="anzeige-box"><strong>G) Musikschule Saitensprung</strong>. Klassische Gitarre, E-Gitarre oder Bass. Wir unterrichten alle Altersklassen ab 6 Jahren. Leihinstrumente können für die ersten Monate günstig zur Verfügung gestellt werden.</li>
            <li class="anzeige-box"><strong>H) Bewerbungstraining - Der perfekte Lebenslauf</strong>. Wie schreibe ich ein gutes Anschreiben? Wie bereite ich mich auf schwierige Fragen im Job-Interview vor? Kostenlose Beratung für Arbeitssuchende jeden Mittwochnachmittag im Rathaus.</li>
          </ul>
        `,
        questions: [
          { id: "q7_13", text: "13. Ihr 15-jähriger Sohn interessiert sich extrem für Computer und sucht eine sinnvolle Beschäftigung in den großen Schulferien.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "E" },
          { id: "q7_14", text: "14. Eine Kollegin aus Südamerika sucht einen Kurs, um nachmittags Deutsch zu lernen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" },
          { id: "q7_15", text: "15. Ihre Großmutter möchte endlich lernen, wie sie auf ihrem Laptop Bilder anschauen und Nachrichten verschicken kann.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "C" },
          { id: "q7_16", text: "16. Sie haben ein großes Problem in der Arbeit und stehen unter Stress, weil Sie nervös sind, wenn Sie vor vielen Menschen sprechen müssen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "F" },
          { id: "q7_17", text: "17. Eine Freundin ist seit drei Monaten ohne Job und weiß nicht, wie sie sich bei neuen Firmen am besten schriftlich vorstellt.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "H" },
          { id: "q7_18", text: "18. Ihr 18-jähriger Bruder braucht dringend Hilfe, um sich auf die Mathe-Klausuren in seinem letzten Schuljahr vorzubereiten.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "A" },
          { id: "q7_19", text: "19. Sie sprechen schon gut Spanisch, möchten sich aber nach der Arbeit abends noch weiter verbessern, um im Business besser kommunizieren zu können.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "D" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für Smartphones im Schulunterricht?",
        text: `
          <h3>Diskussionsthema: Sollen Smartphones im Schulunterricht zur Unterstützung (z.B. für Recherchen) erlaubt sein?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für Smartphones in der Schule. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Andrea, 34:</strong> Das Handy ist heute das wichtigste Informationsmedium. Es ist total unlogisch, dieses Gerät in Schulen zu verbieten. Anstatt die Kinder vor den Bildschirmen zu schützen, sollten Lehrer ihnen beibringen, wie man Fake News erkennt und sinnvoll mit dem Smartphone nach Fakten sucht.</p>
          <p><strong>21. Felix, 29:</strong> Auf keinen Fall! Selbst wenn Lehrer sagen, die Kinder sollen im Internet recherchieren, schreiben sich die Schüler in Wahrheit heimlich WhatsApp-Nachrichten unter dem Tisch oder schauen lustige Videos. Handys zerstören jegliche Konzentration im Klassenraum.</p>
          <p><strong>22. Miriam, 41:</strong> Wenn Handys erlaubt sind, gibt es sofort Streit darüber, wer das neuste und teuerste Telefon hat. Kinder aus ärmeren Familien fühlen sich dann ausgegrenzt. Für die Schule sollten dicke Bücher oder schuleigene Computer genutzt werden, nicht die privaten Geräte der Kinder.</p>
          <p><strong>23. Simon, 50:</strong> Wir leben im 21. Jahrhundert und nicht mehr im Mittelalter. Meine Schüler nutzen für Biologie oft Bestimmungs-Apps auf ihren Handys, mit denen sie im Schulgarten sofort herausfinden können, wie eine bestimmtes Insekt heißt. Das weckt ein viel größeres Interesse als jedes Schulbuch! Das muss erlaubt sein.</p>
          <p><strong>24. Laura, 31:</strong> Ich habe oft bemerkt, dass im Unterricht schnell Fotos oder Videos von Lehrern oder Mitschülern gemacht wurden, um diese dann ins Netz zu stellen und Leute auszulachen (Cybermobbing). Solange Handys angeschaltet auf den Tischen liegen, ist die Privatsphäre aller Personen in Gefahr. Deswegen müssen sie aus bleiben.</p>
          <p><strong>25. David, 38:</strong> Ständig schwere Lexika in die Schule zu tragen, ruiniert den Rücken der Jugendlichen. Wenn sie unbekannte Vokabeln im Englischunterricht in zwei Sekunden über ihr Handy in einem Online-Wörterbuch nachschlagen können, ist das effizient und gesundheitlich besser.</p>
          <p><strong>26. Karin, 62:</strong> Ein Smartphone verleitet einfach zu sehr zur Dauerablenkung. Es piept hier, es vibriert da. Wie soll man sich da in Mathematik auf komplizierte Gleichungen konzentrieren? Wenn es nach mir ginge, müssten alle Schüler ihre Handys morgens in einer Kiste beim Rektor abgeben.</p>
          </div>
        `,
        questions: [
          { id: "q7_20", text: "20. Andrea", type: "jn", answer: "ja" },
          { id: "q7_21", text: "21. Felix", type: "jn", answer: "nein" },
          { id: "q7_22", text: "22. Miriam", type: "jn", answer: "nein" },
          { id: "q7_23", text: "23. Simon", type: "jn", answer: "ja" },
          { id: "q7_24", text: "24. Laura", type: "jn", answer: "nein" },
          { id: "q7_25", text: "25. David", type: "jn", answer: "ja" },
          { id: "q7_26", text: "26. Karin", type: "jn", answer: "nein" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Hausordnung der Universität und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Hausordnung der Universitätsbibliothek (UB) der Stadt</h3>
          <p>Liebe Studierende, liebe Gäste, für ein ruhiges und erfolgreiches Arbeiten in der UB gelten folgende Regeln:</p>
          <p><strong>Gepäck und Jacken:</strong> Jacken, Mäntel, Rucksäcke sowie große Handtaschen dürfen nicht in die Lesesäle mitgenommen werden. Bitte schließen Sie diese in die kostenlosen Schließfächer im Foyer ein. An den Informationsschaltern erhalten Sie dafür bei Bedarf durchsichtige Plastiktaschen, um Ihre Laptops, Bücher und Stifte in den Saal zu tragen.<br>
          <strong>Essen und Trinken:</strong> In sämtlichen Lesesälen ist das Essen strengstens untersagt. Auch der Verzehr von kleinen Snacks wie Schokoriegeln ist nicht gestattet. Das Trinken ist ausschließlich aus fest verschließbaren Wasserflaschen erlaubt. Thermoskannen mit Kaffee oder offene Becher sind wegen der Fleckengefahr auf Teppichen und Büchern verboten.<br>
          <strong>Arbeitsplätze:</strong> In der Prüfungszeit (Januar und Juni) dürfen Arbeitsplätze nicht länger als 30 Minuten durch das Auslegen von Büchern "reserviert" werden, wenn Sie sich nicht am Platz befinden. Wer länger Pause macht, muss seinen Platz für andere freimachen. Das Personal ist berechtigt, die Sachen nach einer halben Stunde abzuräumen.<br>
          <strong>Ausleihe:</strong> Die normale Leihfrist beträgt vier Wochen. Wenn ein Buch nicht von einem anderen Studenten vorgemerkt ist, kann die Frist online bis zu zweimal um jeweils vier Wochen verlängert werden. Bei verspäteter Rückgabe fallen pro Buch und Tag 2 Euro Mahngebühren an.</p>
        `,
        questions: [
          { id: "q7_27", text: "27. Was muss man tun, bevor man in den Lesesaal geht?", type: "abc", options: [{label: "a", text: "Man muss Handtaschen und Jacken in einen Schrank einschließen."}, {label: "b", text: "Man muss bezahlen, um eine durchsichtige Plastiktasche zu kaufen."}, {label: "c", text: "Man darf keine Stifte und speziellen Papiere mit hineinnehmen."}], answer: "a" },
          { id: "q7_28", text: "28. Welches Getränk darf man während des Lesens am Platz trinken?", type: "abc", options: [{label: "a", text: "Kaffee aus einem Plastikbecher."}, {label: "b", text: "Wasser aus einer Flasche, die man zuschrauben kann."}, {label: "c", text: "Heißen Tee aus einer Thermoskanne."}], answer: "b" },
          { id: "q7_29", text: "29. Was passiert im Januar in der Bibliothek?", type: "abc", options: [{label: "a", text: "Man darf seinen Tisch nicht stundenlang leer stehen lassen."}, {label: "b", text: "Das Personal räumt alle Bücher alle 30 Minuten weg."}, {label: "c", text: "Niemand darf während des Lernens eine Pause machen."}], answer: "a" },
          { id: "q7_30", text: "30. Wie oft darf man ein Buch im Normalfall verlängern? (Wenn es kein anderer braucht)", type: "abc", options: [{label: "a", text: "Überhaupt nicht, man zahlt zwei Euro."}, {label: "b", text: "Maximal für vier Wochen."}, {label: "c", text: "Insgesamt zweimal."}], answer: "c" }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Modellsatz 8: Gesellschaft und Technologie",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie den Beitrag aus einem Online-Magazin und den Brief. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Gastbeitrag von Anna: Leben ohne Smartphone?</h3>
          <p>Für viele meiner Freunde ist es unvorstellbar, aber ich habe mein Smartphone vor drei Monaten verkauft und besitze nun wieder ein altes Klapphandy ohne Internet. Warum ich das getan habe? Ich habe gemerkt, dass meine "Bildschirmzeit" täglich bei über vier Stunden lag! Jeden Abend lag ich im Bett und habe Videos geschaut, anstatt zu schlafen oder ein Buch zu lesen. Der ständige Druck, auf Nachrichten auf WhatsApp sofort zu reagieren, hat mich extrem gestresst. Seitdem ich das Smartphone weggegeben habe, fühle ich mich viel freier. Am Anfang war es natürlich schwer. Wenn ich mich jetzt mit Leuten in der Stadt treffe, muss ich vorher genau einen Treffpunkt und eine Uhrzeit abmachen. Ich kann nicht mehr spontan schreiben: "Bin 10 Minuten später da". Manche Termine und Einladungen verpasse ich auch, weil sie nur noch in speziellen Chat-Gruppen verschickt werden. Aber ich schlafe viel besser und genieße die Natur auf dem Weg zur Arbeit, anstatt auf einen kleinen schwarzen Bildschirm zu starren. Ich kann den digitalen Entzug nur empfehlen!</p>
          <hr/>
          <h3>Brief von Onkel Bernd an Anna</h3>
          <p>Liebe Anna,<br>
          deine Mutter hat mir gestern am Telefon erzählt, dass du jetzt komplett ohne Internet-Handy lebst. Ich muss ehrlich zugeben: Ich bewundere dich für diesen konsequenten Schritt! Ich selbst bin mit meinen 58 Jahren oft schon verzweifelt an diesen Geräten. Obwohl ich mir geschworen hatte, nie so ein Ding zu kaufen, brauche ich es beruflich jeden Tag. Ständig blinkt und klingelt es. Manchmal schalte ich es sonntags aus, aber dann ärgern sich die Kunden, wenn ich nicht sofort auf ihre E-Mails antworte. Was mich aber am meisten überrascht hat, ist deine Aussage mit den Verabredungen. Zu meiner Studienzeit war es völlig normal, sich für 15 Uhr ohne Handy am Bahnhof zu verabreden. Wer zu spät kam, hatte Pech! Wir brauchten keine ständige Kommunikation, um Freunde zu treffen. Nächste Woche fahre ich in den Schwarzwald in Urlaub, und dort habe ich in der Hütte absolut keinen Empfang. Ich freue mich schon sehr darauf, mal wie du ohne Internet zu sein.<br>
          Liebe Grüße, dein Onkel Bernd</p>
        `,
        questions: [
          { id: "q8_1", text: "1. Anna hat jetzt gar kein Telefon mehr.", type: "tf", answer: "falsch" },
          { id: "q8_2", text: "2. Anna war oft erschöpft von der Erwartung, schnell auf Nachrichten zu antworten.", type: "tf", answer: "richtig" },
          { id: "q8_3", text: "3. Anna ist nun immer super pünktlich an jedem Treffpunkt.", type: "tf", answer: "falsch" },
          { id: "q8_4", text: "4. Onkel Bernd muss wegen seiner Arbeit ein Smartphone haben.", type: "tf", answer: "richtig" },
          { id: "q8_5", text: "5. Onkel Bernd findet, dass man ohne Handy keine Freunde treffen kann.", type: "tf", answer: "falsch" },
          { id: "q8_6", text: "6. Onkel Bernd freut sich, im Urlaub kein Handynetz zu haben.", type: "tf", answer: "richtig" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Artikel aus dem Wirtschaftsblatt</h3>
          <p><strong>Roboter im Pflegeheim</strong><br>
          Die deutsche Gesellschaft wird immer älter, und schon jetzt fehlen zehntausende Pflegekräfte in Kliniken und Altenheimen. Um das Personal zu entlasten, probieren einige Heime nun den Einsatz von Pflegerobotern aus. Diese Maschinen sehen oft nicht aus wie Menschen, sondern ähneln fahrenden Computern mit einem freundlichen Bildschirm-Gesicht. Sie können keine Patienten heilen oder pflegen, aber sie helfen bei der Logistik: Sie transportieren schmutzige Wäsche in den Keller, bringen den Bewohnern Wasser an den Tisch oder spielen mit ihnen einfache elektronische Spiele, um deren Gedächtnis fit zu halten. Die erste Reaktion der älteren Menschen auf diese Technik war gemischt. Viele hatten Angst vor den künstlichen Geräuschen, aber mittlerweile haben einige Senioren den Robotern sogar eigene Namen gegeben. Gewerkschaften warnen trotzdem davor, dass Roboter niemals die menschliche Zuwendung ersetzen dürfen.</p>
          <br>
          <h3>Text 2: Meldung auf einer Technologie-Website</h3>
          <p><strong>Künstliche Intelligenz schreibt Romane</strong><br>
          Noch vor wenigen Jahren galt es als unmöglich, aber nun haben Forscher in den USA ein Computerprogramm vorgestellt, das kreativ schreiben kann. Die Künstliche Intelligenz (KI) wurde mit Tausenden von Büchern gefüttert – von historischen Romanen bis hin zu modernen Krimis. Gibt man der Maschine einen Satz als Anfang oder nennt man ihr drei Stichworte, so schreibt die KI innerhalb von Sekunden eine eigene kleine Geschichte. Manchmal sind die Sätze grammatikalisch nicht perfekt, oder die Geschichte verliert am Ende den Sinn, aber bei kurzen Texten kann ein normaler Leser oft nicht mehr erkennen, ob die Worte von einem Menschen oder einem Computer stammen. Verlage fürchten nun, dass diese Technologie bald die Arbeit von Journalisten und einfachen Autoren übernehmen könnte, da ein Computer weder Geld verdient noch jemals Pausen machen muss.</p>
        `,
        questions: [
          { id: "q8_7", text: "7. Worum geht es in dem Zeitungsartikel?", type: "abc", options: [{label: "a", text: "Den Einsatz von digitalen Pflegern bei älteren Leuten."}, {label: "b", text: "Junge Menschen und deren Jobs."}, {label: "c", text: "Die Angst von Lehrern vor Technik."}], answer: "a" },
          { id: "q8_8", text: "8. Was machen die Roboter im Moment konkret?", type: "abc", options: [{label: "a", text: "Sie pflegen die Menschen am Krankenbett."}, {label: "b", text: "Sie erledigen Transportaufgaben und trainieren den Kopf der alten Leute."}, {label: "c", text: "Sie arbeiten am Computer in den Kliniken."}], answer: "b" },
          { id: "q8_9", text: "9. Wie haben die Senioren reagiert?", type: "abc", options: [{label: "a", text: "Sie gaben den Robotern nach einiger Zeit Namen."}, {label: "b", text: "Sie wollten von Anfang an nur mit den Robotern spielen."}, {label: "c", text: "Sie forderten, dass alle Roboter menschlich aussehen."}], answer: "a" },
          { id: "q8_10", text: "10. Der Text handelt davon, dass ...", type: "abc", options: [{label: "a", text: "Autoren nun viel mehr Geld fordern."}, {label: "b", text: "Softwareprogramme selbst Bücher schreiben können."}, {label: "c", text: "Leute keine echten Bücher mehr kaufen wollen."}], answer: "b" },
          { id: "q8_11", text: "11. Was ist ein Schwachpunkt der Maschine?", type: "abc", options: [{label: "a", text: "Sie braucht einen menschlichen Begleiter zum Schreiben."}, {label: "b", text: "Ihre längeren Geschichten haben oft unlogische Stellen."}, {label: "c", text: "Ein Leser kann sehr leicht erkennen, dass es ein Computer war."}], answer: "b" },
          { id: "q8_12", text: "12. Wovor haben Buchverlage Angst?", type: "abc", options: [{label: "a", text: "Dass Autoren durch die KI viel mehr Geld fordern."}, {label: "b", text: "Dass Leser keine Bücher von Computern kaufen möchten."}, {label: "c", text: "Dass die Maschine in Zukunft die menschlichen Autoren ersetzt."}], answer: "c" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Angebote. Finden Sie für jede Situation das passende Angebot. Es gibt eine Situation, für die kein Angebot passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Dienstleistungen rund um IT und Technik</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) Webdesign "Creative"</strong>. Sie wollen Ihre Bäckerei oder Ihren Handwerksbetrieb im Internet präsentieren? Wir erstellen professionelle Webseiten für kleine Firmen und Geschäfte. Inklusive Fotoservice für Ihr Unternehmen. Faire Preise!</li>
            <li class="anzeige-box"><strong>B) Handy-Reparatur-Point</strong>. Display kaputt? Akku schnell leer? Wir reparieren alle gängigen Smartphones (Samsung, Apple, Huawei) in nur 60 Minuten. Während wir arbeiten, trinken Sie unseren kostenlosen Kaffee im Laden. Garantierte Festpreise.</li>
            <li class="anzeige-box"><strong>C) Computerkurs für Kinder</strong>. Was ist ein Betriebssystem? Wie schreibe ich ein Spiel? In unseren Ferienkursen erklären wir Schülern ab 8 Jahren, wie PCs funktionieren. Nicht geeignet für absolute Anfänger. Eigener Laptop erforderlich.</li>
            <li class="anzeige-box"><strong>D) PC-Notdienst Meier</strong>. Ihr Rechner startet nicht mehr? Bildschirm bleibt schwarz? Keine Panik. Unser Vor-Ort-Service kommt am gleichen Tag zu Ihnen nach Hause. Wir retten Ihre Daten und beseitigen Computerviren. Anfahrt in der Stadt kostenlos!</li>
            <li class="anzeige-box"><strong>E) Workshop "Digitale Fotografie"</strong>. Raus aus der Automatik! Lernen Sie, wie man Tiere und Sport in Bewegung fotografiert. Wir machen am Sonntag einen Fotowalk durch den Zoo. Leihkamera und Objektive im Kurspreis inbegriffen.</li>
            <li class="anzeige-box"><strong>F) Seminar "Sicher im Internet"</strong>. Online-Banking und Shopping müssen nicht gefährlich sein. Für Senioren und Erwachsene erklären wir verständlich, woran man Betrugs-E-Mails erkennt und wie man sichere Passwörter erstellt. Abendkasse 15 Euro.</li>
            <li class="anzeige-box"><strong>G) App-Entwicklung für StartUps</strong>. Haben Sie eine großartige Idee für eine Handy-App, können aber nicht programmieren? Wir helfen Startups bei der Umsetzung. Von der ersten Zeichnung bis in den App-Store. Kostenloses erstes Beratungsgespräch.</li>
            <li class="anzeige-box"><strong>H) Gebrauchtelektronik Hoffmann</strong>. Kaufen Sie bei uns günstig überholte Computer und Drucker. Alle Geräte wurden gereinigt und getestet und haben 1 Jahr Garantie. Perfekt für das Home-Office ohne großes Budget.</li>
          </ul>
        `,
        questions: [
          { id: "q8_13", text: "13. Ihr Bildschirmfenster am Laptop ist komplett kaputt, weil das Gerät vom Tisch gefallen ist, und Sie brauchen ihn am Abend wieder.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" },
          { id: "q8_14", text: "14. Sie haben einen Friseursalon aufgemacht und brauchen dringend eine moderne Homepage, auf der Sie Bilder Ihrer Arbeit zeigen können.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "A" },
          { id: "q8_15", text: "15. Ihre Tochter hat sich eine teure Spiegelreflexkamera gewünscht und möchte nun lernen, wie man den Familienhund damit bei Action fotografiert.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "E" },
          { id: "q8_16", text: "16. Sie wollen für Ihre alte Kaffeemaschine ein Programm fürs Telefon schreiben lassen, mit dem Kunden den Kaffee aus der Ferne bezahlen können.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "G" },
          { id: "q8_17", text: "17. Sie haben auf einen komischen Link geklickt, seitdem haben Sie Angst, dass Kriminelle Ihre Bankdaten sehen können. Ihr PC hat eine rote Meldung.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "D" },
          { id: "q8_18", text: "18. Sie haben nicht viel Geld und brauchen für Ihren Sohn, der anfängt zu studieren, einen zuverlässigen Rechner zum Schreiben von Hausarbeiten.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "H" },
          { id: "q8_19", text: "19. Eine Freundin ist schon älter und hat Sorge, online einzukaufen, weil sie nicht weiß, was Kriminelle tun könnten. Sie möchte das lernen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "F" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für Bargeldloses Bezahlen?",
        text: `
          <h3>Diskussionsthema: Sollen Schweden und andere Länder als Vorbild dienen und alles Bargeld abschaffen, sodass wir nur noch mit Karte oder Handy zahlen?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für bargeldloses Zahlen. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Andrea, 34:</strong> Absolut! In Schweden kann man fast gar nicht mehr mit Scheinen zahlen, nicht mal beim Bäcker für ein einzelnes Brötchen. Es geht so viel schneller. Man legt sein Handy kurz aufs Gerät und fertig. Kein Suchen nach Münzen mehr, das muss überall der Standard werden.</p>
          <p><strong>21. Felix, 29:</strong> Ich zahle selbst fast immer mit der Karte, aber ich sehe das mit dem Bargeldlos-System sehr kritisch. Wenn wir kein Bargeld mehr haben, werden wir total abhängig von den Banken und Stromnetzen. Was passiert, wenn mal tagelang das Internet ausfällt? Dann könnten wir keine Lebensmittel mehr kaufen!</p>
          <p><strong>22. Miriam, 41:</strong> Wenn ich mit der EC-Karte zahle, weiß die Bank oder das Kreditinstitut ganz genau, wann, wo und was ich gekauft habe. Ich habe aber ein Recht auf Privatsphäre. Was ich mit meinem Geld mache, geht den Staat überhaupt nichts an. Deswegen muss Bargeld erhalten bleiben.</p>
          <p><strong>23. Simon, 50:</strong> Bargeld abzuschaffen hilft enorm, die organisierte Kriminalität zu stoppen. Ohne Koffer voller Scheine ist es extrem schwer, illegale Waffen zu kaufen oder Schwarzgeld einzunehmen, weil jede Überweisung digital kontrolliert werden kann. Das macht unsere Gesellschaft sicherer.</p>
          <p><strong>24. Laura, 31:</strong> Für Menschen, die nicht gut mit Technik umgehen können – vor allem ältere Senioren –, wäre das eine Katastrophe. Man darf diese Menschen nicht ausschließen, nur weil alles digital sein muss. Solange ein Geldschein so herrlich einfach funktioniert, darf er nicht verschwinden.</p>
          <p><strong>25. David, 38:</strong> Hygienischer ist es auf jeden Fall. Wenn man bedenkt, wie viele tausend Menschen eine einzige Fünf-Euro-Note in den Händen hatten... das ist ein Paradies für Bakterien. Allein durch den Wechsel zu kontaktlosem Zahlen könnte man in den Grippemonaten sehr viele Krankheiten verhindern.</p>
          <p><strong>26. Karin, 62:</strong> Ein Problem ist, dass man bei Karten schnell den Überblick verliert. Wenn ich 100 Euro im Portemonnaie habe, sehe ich, wann das Geld weg ist. Mit einem Klick auf dem Handy kaufe ich oft sinnlose Dinge, weil die Hemmschwelle viel geringer ist, wenn man das echte Papiergeld nicht aus der Hand gibt.</p>
          </div>
        `,
        questions: [
          { id: "q8_20", text: "20. Andrea", type: "jn", answer: "ja" },
          { id: "q8_21", text: "21. Felix", type: "jn", answer: "nein" },
          { id: "q8_22", text: "22. Miriam", type: "jn", answer: "nein" },
          { id: "q8_23", text: "23. Simon", type: "jn", answer: "ja" },
          { id: "q8_24", text: "24. Laura", type: "jn", answer: "nein" },
          { id: "q8_25", text: "25. David", type: "jn", answer: "ja" },
          { id: "q8_26", text: "26. Karin", type: "jn", answer: "nein" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Datenschutzrichtlinien der Social-Media-App „ConnectMe“ und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Datenschutzinformationen von „ConnectMe“</h3>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Bitte lesen Sie durch, wie wir Ihre Informationen verarbeiten:</p>
          <p><strong>Standortdaten:</strong> Wenn Sie die App nutzen, speichern wir Ihren GPS-Standort (wenn Sie das in den Einstellungen Ihres Handys nicht blockiert haben). Dies tun wir, um Ihnen Veranstaltungen oder Freunde in Ihrer unmittelbaren Nähe anzeigen zu können. Ihr genauer Standort wird Ihren Kontakten jedoch niemals auf der Karte präsentiert, es sei denn, Sie schicken ihnen aktiv eine Anfrage zum Treffen.<br>
          <strong>Werbung:</strong> Um unser Angebot kostenlos halten zu können, zeigen wir Ihnen personalisierte Werbung an. Das bedeutet, dass unsere Algorithmen Texte, die Sie posten, analysieren, um das Thema zu erkennen (z.B. Urlaub oder Elektronik). Wir verkaufen jedoch niemals Ihre privaten Chats oder E-Mail-Adressen an andere Unternehmen für Werbung.<br>
          <strong>Profil löschen:</strong> Sie können Ihr „ConnectMe“-Konto jederzeit in der App löschen. Achtung: Ab dem Moment des Löschens ist Ihr Profil für andere unsichtbar, aber komplett von unseren Servern entfernt werden Ihre Fotos erst nach 30 Tagen. In dieser Zeit könnten Sie das Profil theoretisch wiederherstellen.<br>
          <strong>Altersnachweis:</strong> Jugendliche unter 16 Jahren dürfen die App aus gesetzlichen Gründen nicht ohne das Einverständnis der gesetzlichen Eltern nutzen. Sollten wir feststellen, dass ein Kind dieses Alter nicht erreicht hat und die App illegal nutzt, sperren wir den Account sofort dauerhaft.</p>
        `,
        questions: [
          { id: "q8_27", text: "27. Andere Leute können Ihren genauen Standort auf der Karte ...", type: "abc", options: [{label: "a", text: "immer sehen, wenn die App angeschaltet ist."}, {label: "b", text: "nur sehen, wenn Sie dazu eine konkrete Erlaubnis senden."}, {label: "c", text: "überhaupt nicht sehen."}], answer: "b" },
          { id: "q8_28", text: "28. Wie kommt es, dass Nutzer Werbung bekommen, die zu ihnen passt?", type: "abc", options: [{label: "a", text: "Die App liest heimlich private Emails."}, {label: "b", text: "Die App verkauft Daten an alle Werbefirmen."}, {label: "c", text: "Die App wertet aus, was Nutzer posten."}], answer: "c" },
          { id: "q8_29", text: "29. Wenn Sie heute Nachmittag Ihr Profil löschen, dann ...", type: "abc", options: [{label: "a", text: "haben Sie keine Fotos mehr auf Ihrem Handybildschirm."}, {label: "b", text: "sind Ihre Bilder noch einen Monat bei der Firma gespeichert."}, {label: "c", text: "löscht das System Ihre Bilder sofort von allen Geräten."}], answer: "b" },
          { id: "q8_30", text: "30. Was passiert mit Konten von 15-Jährigen?", type: "abc", options: [{label: "a", text: "Sie werden sofort ohne Warnung gesperrt."}, {label: "b", text: "Sie müssen mit einem Ausweis zur Polizei gehen."}, {label: "c", text: "Sie dürfen nicht benutzt werden, wenn die Eltern es nicht erlauben."}], answer: "c" }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Modellsatz 9: Konsum und Freizeit",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie die Forenbeiträge. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Forum: Minimalismus - Weniger ist mehr?</h3>
          <p><strong>Beitrag von Elena (Dienstag, 14:30 Uhr):</strong><br>
          Hallo Leute, ich habe am Wochenende eine riesige Ausmist-Aktion gestartet. Ich habe alles aus meinem Schrank auf das Bett geworfen und jedes Kleidungsstück in die Hand genommen. Wenn ich es im letzten Jahr nicht getragen habe, kam es in eine Kiste für den Flohmarkt. Das Ergebnis: Drei große Kartons voll mit Kleidung, alten DVDs und Deko-Artikeln! Es fühlt sich unglaublich befreiend an, wieder Platz im Zimmer zu haben. Ich möchte von nun an nach dem "Minimalismus"-Prinzip leben. Das heißt: Ich kaufe nur noch neue Dinge, wenn etwas altes kaputtgeht. Wenn ich eine neue Hose kaufe, spende ich eine alte. Meine Freundin meinte, ich sei verrückt, weil ich eine teure Jacke weggegeben habe, die mir noch passt. Aber sie hing nur im Schrank! Wie seht ihr das? Sammelt ihr auch so viele Dinge an?</p>
          <hr/>
          <p><strong>Antwort von Tom (Dienstag, 16:15 Uhr):</strong><br>
          Liebe Elena, ich bewundere deine Konsequenz! Ich versuche das schon seit einem Jahr, aber ich scheitere immer wieder. Mein Problem sind nicht die Kleider, sondern Bücher und Elektronik. Ich kaufe mir fast jeden Monat irgendein neues Gerät oder ein Buch, das ich dann oft gar nicht lese. Mein Keller ist voll mit alten Smartphones, Ladekabeln und Laptops, die eigentlich noch funktionieren. Ich kann die Sachen einfach nicht in den Müll werfen, weil sie dafür zu teuer waren. Und Flohmarkt ist mir zu viel Arbeit am Wochenende. Vielleicht sollte ich einfach anfangen, die Dinge im Internet zu verkaufen. Ein Kollege hat mir eine App empfohlen, wo man einfach ein Foto macht und das Programm sucht direkt nach Käufern. Das werde ich dieses Wochenende mal ausprobieren!</p>
        `,
        questions: [
          { id: "q9_1", text: "1. Elena hat alle Sachen, die sie lange nicht benutzt hat, in den Müll geworfen.", type: "tf", answer: "falsch" },
          { id: "q9_2", text: "2. Elena plant, in Zukunft nur noch Kleidung zu kaufen, wenn sie diese wirklich braucht.", type: "tf", answer: "richtig" },
          { id: "q9_3", text: "3. Elenas Freundin fand es gut, dass Elena die teure Jacke aussortierte.", type: "tf", answer: "falsch" },
          { id: "q9_4", text: "4. Tom hat das gleiche Problem wie Elena mit alten Kleidungsstücken.", type: "tf", answer: "falsch" },
          { id: "q9_5", text: "5. Tom findet es zu anstrengend, seine Sachen auf einem Straßenmarkt zu verkaufen.", type: "tf", answer: "richtig" },
          { id: "q9_6", text: "6. Tom möchte bald versuchen, seine alten Elektrogeräte digital zu verkaufen.", type: "tf", answer: "richtig" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Artikel aus einer Lifestyle-Zeitschrift</h3>
          <p><strong>Der Trend zum "Slow Fashion"</strong><br>
          In den Einkaufsstraßen dominiert "Fast Fashion": Große Modeketten bringen jede Woche eine neue Kollektion in die Läden. Ein T-Shirt kostet oft weniger als ein Kaffee. Doch diese billige Mode hat einen hohen Preis für die Umwelt und die Arbeiter in den Fabriken Asiens. Als Gegenbewegung wächst der Trend zur "Slow Fashion". Immer mehr Konsumenten, besonders in den großen Städten, achten beim Kleidungskauf auf Qualität und faire Produktion. Sie kaufen lieber einen hochwertigen Pullover für 100 Euro, den sie fünf Jahre lang tragen können, als fünf billige für je 10 Euro, die nach dem ersten Waschen kaputtgehen. Slow-Fashion-Marken verwenden oft Bio-Baumwolle oder recycelte Materialien und garantieren gute Arbeitsbedingungen für ihre Näherinnen. Das Problem: Für Jugendliche oder Familien mit einem geringen Einkommen sind diese fairen Kleidungsstücke oft absolut unbezahlbar, sodass das Thema Nachhaltigkeit in der Mode oft ein Luxus für Gutverdiener bleibt.</p>
          <br>
          <h3>Text 2: Ratgeber für den Alltag</h3>
          <p><strong>Second-Hand geht auch online</strong><br>
          Früher rochen Second-Hand-Läden oft unangenehm und man musste lange in Kisten suchen, um ein gutes Hemd zu finden. Heute ist der Kauf von gebrauchter Kleidung dank des Internets modern und sehr einfach geworden. Große Plattformen wie "Vinted" oder "Mädchenflohmarkt" revolutionieren den Markt. Millionen von Nutzern laden Fotos ihrer getragenen Kleidung hoch. Das System ist sicher: Der Käufer zahlt das Geld nicht direkt an den Verkäufer, sondern an die Plattform. Erst wenn das Paket beim Käufer ankommt und die Kleidung keine Löcher hat, wie auf dem Foto versprochen, wird das Geld an den Verkäufer weitergeleitet. Es gibt sogar Filter für bestimmte Marken oder Größen, sodass man ganz gezielt nach einem speziellen Wintermantel suchen kann. Psychologen erklären den Boom nicht nur mit Sparsamkeit, sondern auch dem guten Gefühl, der Umwelt zu helfen, indem man Dinge wiederverwendet.</p>
        `,
        questions: [
          { id: "q9_7", text: "7. Welches Thema hat der Text?", type: "abc", options: [{label: "a", text: "Den Trend zum Kauf von ökologischer Mode."}, {label: "b", text: "Wie man billige Baumwolle anpflanzt."}, {label: "c", text: "Die schlimmen Bedingungen in Fabriken Asiens."}], answer: "a" },
          { id: "q9_8", text: "8. Leute, die 'Slow Fashion' kaufen, ...", type: "abc", options: [{label: "a", text: "haben meist wenig Geld und müssen sparen."}, {label: "b", text: "kaufen oft Kleidung, die sehr lange hält."}, {label: "c", text: "gehen oft in billige Geschäfte und kaufen T-Shirts für 10 Euro."}], answer: "b" },
          { id: "q9_9", text: "9. Warum kritisieren manche Leute den 'Slow Fashion' Trend?", type: "abc", options: [{label: "a", text: "Weil nicht jeder genug Geld hat, um diese teure Mode zu kaufen."}, {label: "b", text: "Weil Bio-Baumwolle schlecht für die Gesundheit ist."}, {label: "c", text: "Weil diese Kleidung meistens nicht modisch genug aussieht."}], answer: "a" },
          { id: "q9_10", text: "10. Was beschreibt dieser Text?", type: "abc", options: [{label: "a", text: "Das Problem alter Second-Hand-Läden."}, {label: "b", text: "Den modernen Markt für gebrauchte Mode im Internet."}, {label: "c", text: "Wie man psychologische Probleme bekommt."}], answer: "b" },
          { id: "q9_11", text: "11. Wie funktioniert die Bezahlung bei den modernen Online-Plattformen?", type: "abc", options: [{label: "a", text: "Das System gibt dem Verkäufer das Geld erst, wenn der Käufer zufrieden ist."}, {label: "b", text: "Der Käufer überweist das Geld direkt auf das Bankkonto des Verkäufers."}, {label: "c", text: "Man muss gar kein Geld zahlen, sondern nur andere Kleider tauschen."}], answer: "a" },
          { id: "q9_12", text: "12. Warum kaufen viele Leute laut Text online gebrauchte Sachen?", type: "abc", options: [{label: "a", text: "Weil es viel schneller geht als der Einkauf im normalen Geschäft."}, {label: "b", text: "Weil sie das Gefühl mögen, etwas für die Umwelt zu tun."}, {label: "c", text: "Weil die Plattformen keine Gebühren kosten."}], answer: "b" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Angebote. Finden Sie für jede Situation das passende Angebot. Es gibt eine Situation, für die kein Angebot passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Freizeitangebote und Kurse in der Stadt</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) Kletterhalle „Gipfelstürmer“</strong>. Sie suchen nach dem Job einen schnellen Sportausgleich? Wir haben täglich bis 23 Uhr geöffnet! Anfängerkurse jeden Montagabend ab 19 Uhr. Leihschuhe und Ausrüstung gibt es direkt bei uns an der Kasse.</li>
            <li class="anzeige-box"><strong>B) Kochkurs "Vegan genießen"</strong>. Wollten Sie schon immer ausprobieren, wie man ohne tierische Produkte fantastisch kocht? Unser Meisterkoch zeigt Ihnen an einem Wochenende, wie Sie Seitan und Tofu perfekt zubereiten. Bitte bringen Sie eigene Schürzen mit.</li>
            <li class="anzeige-box"><strong>C) Yoga am Seeufer</strong>. Jeden Sonntag um 8 Uhr morgens treffen wir uns bei gutem Wetter am Südstrand des Sees. Der Kurs ist kostenlos und für jedes Level geeignet. Bringen Sie einfach eine Matte und ein Handtuch mit. (Fällt bei Regen aus!).</li>
            <li class="anzeige-box"><strong>D) Sprach-Café "International"</strong>. Sie möchten Ihr Englisch oder Spanisch in lockerer Atmosphäre üben? Kommen Sie donnerstags ab 18 Uhr ins Café am Markt. An jedem Tisch wird eine andere Sprache gesprochen. Tolle Möglichkeit, neue Leute zu treffen!</li>
            <li class="anzeige-box"><strong>E) Tanzstudio "Salsa & More"</strong>. Bringen Sie Feuer in Ihr Wochenende! Unser neuer Anfängerkurs für Paartanz beginnt diesen Samstag. Sie brauchen keinen festen Partner mitzubringen, wir wechseln im Kurs regelmäßig durch. </li>
            <li class="anzeige-box"><strong>F) Töpferwerkstatt - Kreativ am Freitag</strong>. Entspannen Sie sich nach der Arbeitswoche und formen Sie Ihre eigenen Tassen und Teller aus Ton. Wir brennen Ihre Werke im Ofen, sodass sie spülmaschinenfest sind. Materialkosten: 20 Euro.</li>
            <li class="anzeige-box"><strong>G) Fitness-Bootcamp im Park</strong>. Sie wollen richtig schwitzen und Gewicht verlieren? Unser Trainer scheucht Sie dreimal die Woche (Mo, Mi, Fr um 18 Uhr) durch den Stadtpark. Intervalltraining für Fortgeschrittene. Keine Angst vor Schmutz!</li>
            <li class="anzeige-box"><strong>H) Weinprobe "Italienische Nächte"</strong>. Ein entspannter Abend für Genießer. Ein Sommelier stellt acht verschiedene Rotweine aus der Toskana vor. Im Preis von 45 Euro sind Käse, Brot und Wasser inklusive. Nur mit Voranmeldung, da max. 15 Personen.</li>
          </ul>
        `,
        questions: [
          { id: "q9_13", text: "13. Ihr Arzt hat gesagt, Sie sollen dringend extrem viel Sport im Freien machen, um schnell fitter zu werden. Sie sind schon sehr sportlich.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "G" },
          { id: "q9_14", text: "14. Sie suchen eine sportliche Aktivität für Sonntagvormittag draußen in der Natur, die keinen Eintritt kostet.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "C" },
          { id: "q9_15", text: "15. Ihre Freundin heiratet nächsten Monat und Sie wollen auf dem Fest nicht nur auf dem Stuhl sitzen, sondern lernen sich gut zur Musik zu bewegen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "E" },
          { id: "q9_16", text: "16. Sie essen kein Fleisch mehr und wollen lernen, wie man Alternativen professionell in der Küche verarbeitet, weil es bei Ihnen zu Hause oft langweilig schmeckt.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "B" },
          { id: "q9_17", text: "17. Sie wollen nach der Arbeit noch hoch hinaus und Sport machen, sind aber absolute Anfänger und haben keine eigene Sportkleidung dafür.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "A" },
          { id: "q9_18", text: "18. Sie trinken gerne Bier und möchten am Wochenende mit Freunden verschiedene Biersorten von kleinen lokalen Herstellern testen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" },
          { id: "q9_19", text: "19. Sie arbeiten am Computer und möchten freitags mit den Händen arbeiten und etwas Praktisches für Ihre Wohnung herstellen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "F" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für ein gesetzliches Verbot von extrem billigem Fleisch im Supermarkt?",
        text: `
          <h3>Diskussionsthema: Sollen extrem billige Fleischangebote im Supermarkt gesetzlich verboten werden, um Tierschutz zu garantieren?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für ein Verbot. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Andrea, 34:</strong> Es ist eine Schande, dass 500 Gramm Fleisch weniger kosten als ein Kilo Äpfel. Diese Preise sind nur möglich, wenn die Tiere unter furchtbaren Bedingungen ohne Platz und mit viel Medizin gehalten werden. Der Staat muss einschreiten und Mindestpreise für Fleisch festlegen, damit die Tiere ein besseres Leben haben.</p>
          <p><strong>21. Felix, 29:</strong> Ich verdiene nicht viel Geld im Monat. Wenn der Staat Fleisch teurer macht, können sich Studenten und Großfamilien überhaupt kein Schnitzel mehr leisten. Das ist unfair. Jeder sollte das Recht haben, sich Fleisch kaufen zu können, unabhängig vom Gehalt. Der Preis muss frei bleiben.</p>
          <p><strong>22. Miriam, 41:</strong> Wenn man den Supermärkten erlaubt, Fleisch als billiges Lockmittel zu nutzen, wird Fleisch zur Ramschware. Das respektiert weder das Tier, noch die Arbeit der Bauern, die am Ende gar nichts mehr verdienen. Ein gesetzliches Ende dieser Rabattaktionen ist längst überfällig.</p>
          <p><strong>23. Simon, 50:</strong> Verbote bringen gar nichts. Wir haben in Deutschland klare Gesetze zum Tierschutz. Wenn die Supermärkte im Rahmen dieser Gesetze Fleisch so günstig anbieten können, ist das Teil der freien Marktwirtschaft. Man sollte eher die bestehenden Farmen besser kontrollieren, statt Preise zu verbieten.</p>
          <p><strong>24. Laura, 31:</strong> Wenn ein Kilo Hähnchen drei Euro kostet, ist klar, was drinsteckt: Antibiotika und Stress. Das macht uns Menschen am Ende auch krank, weil resistente Keime entstehen. Ein staatlicher Mindestpreis für Fleischprodukte ist nicht nur Tierschutz, sondern vor allem auch aktiver Schutz für unsere Gesundheit.</p>
          <p><strong>25. David, 38:</strong> Ich glaube, der Konsument muss selbst entscheiden. Wenn wir alle an der Kasse zu dem teureren Bio-Fleisch greifen würden, würden die Supermärkte das Billigfleisch von ganz allein aus dem Programm nehmen. Wenn der Staat den Preis reguliert, nimmt er dem Konsumenten die Eigenverantwortung weg.</p>
          <p><strong>26. Karin, 62:</strong> Zu meiner Jugendzeit gab es den berühmten 'Sonntagsbraten'. Unter der Woche gab es Gemüse. Fleisch war etwas Besonderes und hatte seinen Preis. Wir müssen zurück zu dieser Wertschätzung. Ein staatliches Verbot von Dumping-Preisen ist der erste Schritt in die richtige Richtung, um den Respekt wiederherzustellen.</p>
          </div>
        `,
        questions: [
          { id: "q9_20", text: "20. Andrea", type: "jn", answer: "ja" },
          { id: "q9_21", text: "21. Felix", type: "jn", answer: "nein" },
          { id: "q9_22", text: "22. Miriam", type: "jn", answer: "ja" },
          { id: "q9_23", text: "23. Simon", type: "jn", answer: "nein" },
          { id: "q9_24", text: "24. Laura", type: "jn", answer: "ja" },
          { id: "q9_25", text: "25. David", type: "jn", answer: "nein" },
          { id: "q9_26", text: "26. Karin", type: "jn", answer: "ja" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Informationen des Fitnessstudios „FitLife“ und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Mitgliedschaftsbedingungen FitLife-Studios</h3>
          <p>Liebe Mitglieder, bitte beachten Sie unsere Regeln für ein faires Miteinander auf der Trainingsfläche:</p>
          <p><strong>Vertrag und Kündigung:</strong> Unsere regulären Verträge haben eine Laufzeit von 12 Monaten. Sie können sich jederzeit für ein kostenloses Probetraining anmelden. Wenn Sie den Vertrag nicht spätestens drei Monate vor Ablauf schriftlich (per Brief oder verifizierter E-Mail) kündigen, verlängert er sich automatisch um ein weiteres Jahr. Eine einfache SMS an den Trainer reicht nicht aus.<br>
          <strong>Hygiene:</strong> Das Betreten der Trainingsfläche ist nur in sauberen Sportschuhen gestattet, die nicht als Straßenschuhe genutzt werden. Jeder Sportler ist verpflichtet, ein ausreichend großes Handtuch unterzulegen, wenn er an den Maschinen schwitzt. Nach der Nutzung müssen die Griffe der Kardiogeräte zwingend mit den bereitgestellten Desinfektionstüchern abgewischt werden. Wer dreimal ohne Handtuch erwischt wird, bekommt ein einmonatiges Hausverbot.<br>
          <strong>Spinde in der Umkleide:</strong> Die Spinde (Schränke) in den Umkleidekabinen können Sie mit einem eigenen Vorhängeschloss sichern. Diese Spinde dürfen nur während Ihrer Trainingszeit genutzt werden. Über Nacht dürfen keine Taschen oder Kleidung in den Schränken gelassen werden. Unser Personal öffnet verschlossene Schränke jeden Abend um 23:30 Uhr nach Betriebsschluss.<br>
          <strong>Kurse:</strong> Die Teilnahme an den Gruppenkursen (Zumba, Spinning, Yoga) ist im Standardvertrag enthalten. Aufgrund der großen Nachfrage bitten wir Sie jedoch, sich spätestens 24 Stunden vor Kursbeginn in der FitLife-App einen Platz zu reservieren. Wer einen reservierten Platz nicht antritt ohne vorher abzusagen, wird für eine Woche für weitere Online-Buchungen gesperrt.</p>
        `,
        questions: [
          { id: "q9_27", text: "27. Was muss man tun, wenn man seinen Vertrag beenden möchte?", type: "abc", options: [{label: "a", text: "Man muss einen Monat vorher persönlich im Studio vorbeikommen."}, {label: "b", text: "Man muss rechtzeitig eine SMS an das Personal senden."}, {label: "c", text: "Man muss drei Monate vor Ende offiziell etwas schreiben (z.B. E-Mail)."}], answer: "c" },
          { id: "q9_28", text: "28. Wie lautet eine Hygieneregel im Studio?", type: "abc", options: [{label: "a", text: "Man muss Handtücher zum Desinfizieren der Griffe selbst mitbringen."}, {label: "b", text: "Man darf die Gewichte nur mit eigenen kleinen Tüchern anfassen."}, {label: "c", text: "Man darf keine Schuhe tragen, die man draußen benutzt hat."}], answer: "c" },
          { id: "q9_29", text: "29. Die Schränke in der Umkleide ...", type: "abc", options: [{label: "a", text: "kann man sich für einen Tag buchen und abends die Sportkleidung darin lassen."}, {label: "b", text: "müssen am Ende des Trainings jeden Tag von Ihnen wieder freigemacht werden."}, {label: "c", text: "haben bereits Schlösser vom Personal, die man mieten kann."}], answer: "b" },
          { id: "q9_30", text: "30. Was passiert, wenn man sich in der App für Yoga anmeldet, aber einfach nicht kommt?", type: "abc", options: [{label: "a", text: "Man muss extra für den Kurs bezahlen."}, {label: "b", text: "Man kann den Kurs am nächsten Tag nicht mehr stornieren."}, {label: "c", text: "Man darf sich 7 Tage lang für keinen neuen Kurs eintragen."}], answer: "c" }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Modellsatz 10: Zukunft und Arbeitswelt",
    parts: [
      {
        part: 1,
        title: "Teil 1",
        instructions: "Lesen Sie den Blogbeitrag und die E-Mail. Kreuzen Sie an: Richtig oder Falsch.",
        text: `
          <h3>Karriereblog: Traumberuf auf Weltreise</h3>
          <p>Liebe Leser, ich schreibe euch diesen Text geradewegs von der Terrasse meines Bungalows auf Bali. Bis vor einem Jahr war ich noch ein ganz normaler Angestellter in einer Bank in München. Jeden Morgen der gleiche Stau, acht Stunden im grauen Büro und immer schlechtes Wetter. Ich hatte das Gefühl, meine besten Jahre zu verschwenden. Deshalb habe ich meinen sicheren Job gekündigt und bin Programmierer geworden. Das klingt verrückt, aber ich habe alles online gelernt. Heute arbeite ich als sogenannter "Digitaler Nomade". Mein Laptop ist mein Büro. Meine Kunden sitzen in Deutschland, Amerika und Australien. Es interessiert niemanden, wo ich mich befinde, solange ich die Webseiten pünktlich abgebe. Natürlich ist nicht alles perfekt: Manchmal bricht kurz vor einer Deadline das Internet zusammen, oder ich fühle mich einsam, weil echte Kollegen zum Plaudern fehlen. Aber die Freiheit, heute in Asien und nächsten Monat vielleicht in Südamerika arbeiten zu können, macht all diese kleinen Probleme wieder gut. Nächste Station: Peru!</p>
          <hr/>
          <h3>E-Mail von Lisa an Markus (den Blogger)</h3>
          <p>Hallo Markus,<br>
          ich verfolge deinen Blog jetzt schon seit Monaten und bin unglaublich fasziniert von deinem Mut. Jedes Mal, wenn du Fotos von Stränden und exotischem Essen hochlädst, werde ich etwas eifersüchtig. Ich arbeite als Buchhalterin in einer großen Firma in Berlin und spiele tatsächlich mit dem Gedanken, deinen Weg einzuschlagen. Ich kann viele meiner Aufgaben am Computer erledigen, aber mein Chef ist noch vom "alten Schlag". Er glaubt, dass Mitarbeiter nur dann arbeiten, wenn er sie im Büro kontrollieren kann. Home-Office war bei uns schon in der Corona-Zeit ein riesiges Problem. Bevor ich jetzt so wie du einfach sofort kündige, möchte ich dich etwas Wichtiges fragen: Wie organisierst du deine Steuern und Versicherungen (vor allem die Krankenversicherung), wenn du ständig in anderen Ländern lebst? Und wie leicht ist es wirklich, als Einsteiger online Kunden zu finden? Ich würde mich riesig über eine ehrliche Antwort freuen.<br>
          Liebe Grüße aus dem kalten Berlin, Lisa</p>
        `,
        questions: [
          { id: "q10_1", text: "1. Markus hat früher als Programmierer in einer Bank gearbeitet.", type: "tf", answer: "falsch" },
          { id: "q10_2", text: "2. Für Markus' Kunden ist es egal, in welchem Land er gerade arbeitet.", type: "tf", answer: "richtig" },
          { id: "q10_3", text: "3. Markus vermisst manchmal den direkten Kontakt zu Arbeitskollegen.", type: "tf", answer: "richtig" },
          { id: "q10_4", text: "4. Lisa arbeitet aktuell als freie Programmiererin in Berlin.", type: "tf", answer: "falsch" },
          { id: "q10_5", text: "5. Lisas Chef ist ein großer Fan von Arbeit von zu Hause aus.", type: "tf", answer: "falsch" },
          { id: "q10_6", text: "6. Lisa macht sich Sorgen um wichtige Papiere wie ihre Krankenversicherung.", type: "tf", answer: "richtig" }
        ]
      },
      {
        part: 2,
        title: "Teil 2",
        instructions: "Lesen Sie die Texte aus der Presse. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Text 1: Job-Magazin</h3>
          <p><strong>Die Vier-Tage-Woche kommt</strong><br>
          Immer mehr europäische Unternehmen experimentieren mit neuen Arbeitszeitmodellen. Das bekannteste ist die Vier-Tage-Woche bei vollem Gehalt. Eine britische Studie begleitete 60 Firmen über ein Jahr hinweg bei diesem Versuch. Das überraschende Ergebnis: Die Produktivität der Mitarbeiter ist nicht gesunken, in vielen Bereichen ist sie sogar gestiegen! Der Grund dafür ist simpel: Wer drei Tage am Stück Wochenende hat, startet montags viel ausgeruhter und motivierter in die Arbeit. Die Zahl der Krankheitstage sank um fast die Hälfte, da die Angestellten mehr Zeit für Erholung und Familie hatten. Außerdem berichteten die Chefs, dass ihre Mitarbeiter an den vier Arbeitstagen konzentrierter waren und weniger Zeit für sinnlose Meetings verschwendeten. Dennoch gibt es Branchen, in denen dieses Modell schwer umsetzbar ist, zum Beispiel in Krankenhäusern oder in der Gastronomie, wo immer Personal vor Ort sein muss.</p>
          <br>
          <h3>Text 2: Artikel im Wirtschaftsressort</h3>
          <p><strong>Lebenslanges Lernen als Pflicht</strong><br>
          Die Berufswelt wandelt sich durch die Digitalisierung rasant. Früher reichte es aus, einen Beruf (wie Schlosser oder Bankkaufmann) einmal in der Jugend zu erlernen, um diesen dann 40 Jahre lang bis zur Rente auszuüben. Experten des Arbeitsministeriums warnen: Dieses Modell ist endgültig vorbei. Heute müssen Arbeitnehmer flexibel bleiben und sich ständig neues Wissen aneignen. Die Berufe wandeln sich so schnell, dass eine Ausbildung nach zehn Jahren ohne Weiterbildung wertlos werden kann. Die Regierung fordert daher Unternehmen auf, ihren Angestellten während der bezahlten Arbeitszeit Schulungen zu finanzieren – sei es für neue Software oder moderne Kommunikationstechniken. Auch die Mitarbeiter selbst müssen Eigeninitiative zeigen. Wer sich weigert, am Computer Neues zu lernen, hat auf dem Arbeitsmarkt der Zukunft schlechte Karten und riskiert langfristig die Arbeitslosigkeit.</p>
        `,
        questions: [
          { id: "q10_7", text: "7. Worum geht es in dem Magazinbeitrag?", type: "abc", options: [{label: "a", text: "Die Vorteile der Vier-Tage-Woche."}, {label: "b", text: "Krankheiten in der britischen Wirtschaft."}, {label: "c", text: "Viel Zeit für Familienarbeit."}], answer: "a" },
          { id: "q10_8", text: "8. Warum gab es weniger kranke Mitarbeiter?", type: "abc", options: [{label: "a", text: "Weil sie mehr private Zeit zum Entspannen hatten."}, {label: "b", text: "Weil sie besseres Essen in der Firma bekamen."}, {label: "c", text: "Weil sie an den vier Arbeitstagen viel weniger arbeiten mussten."}], answer: "a" },
          { id: "q10_9", text: "9. Wo ist das neue Modell laut Text problematisch?", type: "abc", options: [{label: "a", text: "In Banken und großen internationalen Firmen."}, {label: "b", text: "In Berufen, bei denen Service für Kunden direkt vor Ort nötig ist."}, {label: "c", text: "In allen Bereichen der Produktion in Europa."}], answer: "b" },
          { id: "q10_10", text: "10. Der Text informiert darüber, dass ...", type: "abc", options: [{label: "a", text: "man heute flexibel bleiben und Neues lernen muss."}, {label: "b", text: "Bankkaufmann ein schlechter Beruf ist."}, {label: "c", text: "niemand mehr Rente bekommen wird."}], answer: "a" },
          { id: "q10_11", text: "11. Was verlangt die Regierung von den Firmen?", type: "abc", options: [{label: "a", text: "Dass sie nur noch junge Leute mit viel Wissen einstellen."}, {label: "b", text: "Dass sie das Weiterlernen der Arbeiter mit Geld und Zeit unterstützen."}, {label: "c", text: "Dass sie jedem Arbeiter einen privaten Laptop schenken."}], answer: "b" },
          { id: "q10_12", text: "12. Wenn man seine Fähigkeiten im Beruf nicht modernisiert, dann ...", type: "abc", options: [{label: "a", text: "kann man schnell seinen Job verlieren."}, {label: "b", text: "muss man extrem hohe Steuern zahlen."}, {label: "c", text: "bekommt man eine längere Probezeit in der eigenen Firma."}], answer: "a" }
        ]
      },
      {
        part: 3,
        title: "Teil 3",
        instructions: "Lesen Sie die Situationen und die Angebote. Finden Sie für jede Situation das passende Angebot. Es gibt eine Situation, für die kein Angebot passt. Wählen Sie dafür „0“.",
        text: `
          <h3>Messen und Karriereveranstaltungen in Norddeutschland</h3>
          <ul style="list-style:none; padding:0;">
            <li class="anzeige-box"><strong>A) "Handwerk sucht Nachwuchs" (Messezentrum)</strong>. Du stehst kurz vor dem Schulabschluss und interessierst dich für Technik und Holz? Lerne Berufe wie Tischler oder Elektriker kennen. Du darfst direkt an Maschinen probieren. Ab 15 Jahren, Eintritt frei.</li>
            <li class="anzeige-box"><strong>B) Gründer-Messe "Start-Up Now"</strong>. Sie haben eine Idee und wollen sich selbstständig machen? Wir helfen mit Informationen zu Krediten, Businessplänen und Steuern. Erfahrene Geschäftsleute erzählen von ihren Fehlern und Erfolgen. Samstag ab 10 Uhr.</li>
            <li class="anzeige-box"><strong>C) Job-Messe "Pflege und Medizin"</strong>. Es wird händeringend Personal in Krankenhäusern und Altenheimen gesucht. Kommen Sie direkt mit den Leitern der größten Kliniken ins Gespräch. Bringen Sie Ihre Bewerbungsmappe (Lebenslauf) gleich mit!</li>
            <li class="anzeige-box"><strong>D) "Sprungbrett Ausland" - Messe für internationale Karrieren</strong>. Sie wollen nach dem Studium oder der Schule ein Jahr in Australien arbeiten, als Freiwilliger in Afrika helfen oder in Kanada Englisch lernen? Wir informieren Sie über Work & Travel und Stipendien.</li>
            <li class="anzeige-box"><strong>E) Seminar "Die perfekte Bewerbung" am Samstag</strong>. Lernen Sie mit erfahrenen Coaches, wie Sie einen perfekten Lebenslauf schreiben und das Foto richtig platzieren. Wir überprüfen Ihre alten Mappen und geben Ihnen Tipps für das kommende Interview.</li>
            <li class="anzeige-box"><strong>F) Kongress "Frauen in Führungspositionen"</strong>. Weibliche Führungskräfte berichten aus dem oft harten Alltag in großen Firmen. Auf dem Kongress am Wochenende geht es um faire Gehälter und Tipps, wie man Teams professionell leitet. Ticket: 80 Euro.</li>
            <li class="anzeige-box"><strong>G) Fortbildung "Deutsch für Mediziner"</strong>. Sie sind Arzt oder Krankenschwester aus dem Ausland und wollen in Deutschland arbeiten? Dieser Intensivkurs (Niveau B2/C1) bereitet Sie auf die Fachsprachenprüfung vor. Förderung durch das Arbeitsamt möglich.</li>
            <li class="anzeige-box"><strong>H) Messe „Studium und so weiter“</strong>. Zu viele Studiengänge? Universitäten aus ganz Deutschland stellen ihre Bachelor-Programme vor. Studenten berichten aus erster Hand über Prüfungsstress und Wohnungsnot. Berufsberatung kostenlos.</li>
          </ul>
        `,
        questions: [
          { id: "q10_13", text: "13. Ihr 16-jähriger Neffe bastelt wahnsinnig gerne und sucht Ideen für eine praktische Ausbildung nach der Schule in diesem Jahr.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "A" },
          { id: "q10_14", text: "14. Eine Freundin ist Chefsekretärin, möchte aber Abteilungsleiterin werden und sucht Tipps für den Respekt von männlichen Mitarbeitern.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "F" },
          { id: "q10_15", text: "15. Sie möchten eine eigene kleine Marketing-Firma gründen, verstehen aber noch nicht, wie man Geld von der Bank dafür bekommt.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "B" },
          { id: "q10_16", text: "16. Ihre Schwester hat gerade Abitur gemacht und weiß überhaupt noch nicht, an welcher Universität oder Fachhochschule sie was studieren soll.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "H" },
          { id: "q10_17", text: "17. Sie wollen nach dem Gymnasium ein Jahr ins Ausland, um dort in der Landwirtschaft gegen Geld auszuhelfen.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "D" },
          { id: "q10_18", text: "18. Ein Arzt aus Spanien, der sehr gut Deutsch spricht, sucht eine normale Arbeitsstelle in einem Krankenhaus in Norddeutschland.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "C" },
          { id: "q10_19", text: "19. Sie haben eine kleine Bäckerei und suchen händeringend nach einem Verkäufer für das Wochenende, wissen aber nicht, wie Sie Leute finden.", type: "matching", options: ["A","B","C","D","E","F","G","H","0"], answer: "0" }
        ]
      },
      {
        part: 4,
        title: "Teil 4",
        instructions: "Lesen Sie die Texte 20 bis 26. Ist die Person für ein gesetzliches Recht auf Home-Office?",
        text: `
          <h3>Diskussionsthema: Brauchen wir in Deutschland ein Gesetz, das Arbeitnehmern erlaubt, mindestens drei Tage pro Woche im Home-Office zu arbeiten?</h3>
          <p><i>Beispiel: (0) Herr Schulz ist für Home-Office. -> Ja</i></p>
          <div style="margin-top:1rem;">
          <p><strong>20. Andrea, 34:</strong> Absolut! Ich fahre jeden Tag eine Stunde hin und eine Stunde zurück. Das ist total unnötig, da ich am Computer arbeite. Ein Gesetz würde Arbeitgebern endlich verbieten, Leute zur reinen Kontrolle im Büro sitzen zu lassen. Für die Umwelt wäre es auch wunderbar, wenn weniger Autos fahren.</p>
          <p><strong>21. Felix, 29:</strong> Ich wohne in einer kleinen 2-Zimmer-Wohnung mitten in der Stadt. Einen richtigen Schreibtisch habe ich gar nicht, ich arbeite am Küchentisch. Im Büro habe ich einen teuren Bürostuhl und zwei Monitore. Ein Zwang oder ein allgemeines Recht auf Home-Office bringt nichts, wir brauchen eher schönere Büros!</p>
          <p><strong>22. Miriam, 41:</strong> Wenn jeder nur noch von zu Hause aus arbeitet, geht das 'Wir-Gefühl' einer Firma komplett kaputt. Spannende Gespräche an der Kaffeemaschine kann man nicht durch einen Videocall ersetzen. Kreative Ideen entstehen oft spontan im Raum. Wer Teil einer Firma ist, sollte auch physisch anwesend sein müssen.</p>
          <p><strong>23. Simon, 50:</strong> Ja! Für junge Eltern ist das Gesetz besonders wichtig. Oft kann man Kinderbetreuung und Job nur vereinbaren, wenn man morgens E-Mails zu Hause beantwortet, das kranke Kind betreut und abends weiterarbeitet. Moderne Arbeit braucht diese rechtliche Flexibilität.</p>
          <p><strong>24. Laura, 31:</strong> Problematisch an so einem Recht ist, dass es nur für Büroarbeiter gilt. Die Krankenschwester, der Polizist oder die Verkäuferin im Supermarkt können nicht von zu Hause arbeiten. Wenn man jetzt den Computer-Leuten gesetzlich noch mehr Privilegien gibt, spaltet das die Gesellschaft nur noch mehr.</p>
          <p><strong>25. David, 38:</strong> Seit ich die Wahl habe, arbeite ich drei Tage zu Hause. Im Büro wurde ich oft nach zehn Minuten von Kollegen wegen irgendwelcher uninteressanter Probleme unterbrochen. Zu Hause schaffe ich mein Pensum (Pflicht) in sechs statt in acht Stunden. Der Staat muss dieses Recht für alle sichern.</p>
          <p><strong>26. Karin, 62:</strong> Ein Gesetz ist der falsche Weg. Jede Firma ist anders. Ein kleines Architekturbüro braucht vielleicht alle Mitarbeiter am großen Zeichentisch. Wenn der Staat den Firmen so tief in ihre Organisation hineinredet, gefährdet das den wirtschaftlichen Erfolg. Das müssen Chef und Mitarbeiter intern verhandeln.</p>
          </div>
        `,
        questions: [
          { id: "q10_20", text: "20. Andrea", type: "jn", answer: "ja" },
          { id: "q10_21", text: "21. Felix", type: "jn", answer: "nein" },
          { id: "q10_22", text: "22. Miriam", type: "jn", answer: "nein" },
          { id: "q10_23", text: "23. Simon", type: "jn", answer: "ja" },
          { id: "q10_24", text: "24. Laura", type: "jn", answer: "nein" },
          { id: "q10_25", text: "25. David", type: "jn", answer: "ja" },
          { id: "q10_26", text: "26. Karin", type: "jn", answer: "nein" }
        ]
      },
      {
        part: 5,
        title: "Teil 5",
        instructions: "Lesen Sie die Stellenausschreibung und lösen Sie die Aufgaben. Kreuzen Sie an: a, b oder c.",
        text: `
          <h3>Stellenanzeige: Die ZukunftBank sucht Junior-Kundenberater (m/w/d)</h3>
          <p>Wir, die ZukunftBank, sind eines der modernsten Kreditinstitute in Berlin. Auf Filialen mit großen Schaltern verzichten wir – unsere junge Kundschaft (durchschnittlich 28 Jahre alt) tätigt alle Bankgeschäfte zu 100% über unsere prämierte App. Für unser stark wachsendes Team suchen wir Verstärkung!</p>
          <p><strong>Ihre Aufgaben:</strong> Sie beantworten keine Briefe, sondern beraten unsere Kunden ausschließlich im Video-Chat oder per In-App-Messenger. Sie erklären innovative Finanzprodukte, helfen bei technischen Problemen und begleiten das Eröffnen von neuen Konten. Da unsere Kunden weltweit unterwegs sind, arbeiten Sie im Schichtbetrieb (auch nachts und am Wochenende möglich).<br>
          <strong>Ihr Profil:</strong> Sie müssen kein langweiliges klassisches Bankstudium haben. Wichtig ist uns eine abgeschlossene kaufmännische Ausbildung. Fließendes Englisch und Deutsch in Wort und Schrift setzen wir unbedingt voraus, Kenntnisse in Spanisch oder Französisch sind ein Pluspunkt. Sie sollten den Umgang mit modernen Tablets lieben und bei Stress nicht die Geduld verlieren.<br>
          <strong>Wir bieten:</strong> Ein stylishes Büro im Zentrum Berlins, täglich kostenloses Frühstück und frisches Obst. Ihr Startgehalt beträgt 2.900 Euro brutto, inklusive bezahlter Monatskarte für die Berliner U-Bahn. Wenn Sie nach zwei Jahren hervorragende Arbeit geleistet haben, ist ein Aufstieg zum Teamleiter garantiert.<br>
          Interesse? Schicken Sie Ihre kurzen Bewerbungsunterlagen (PDF-Lebenslauf reicht völlig) direkt an bewerbung@zukunft-bank.de.</p>
        `,
        questions: [
          { id: "q10_27", text: "27. Die Kunden der ZukunftBank ...", type: "abc", options: [{label: "a", text: "besuchen die Bank häufig in großen Bürofilialen."}, {label: "b", text: "schicken oft wichtige Papiere per Brief."}, {label: "c", text: "machen alles direkt über ihr Handy."}], answer: "c" },
          { id: "q10_28", text: "28. Was bedeutet die Arbeitszeit für die Kundenberater?", type: "abc", options: [{label: "a", text: "Sie arbeiten jeden Tag nur morgens am Wochenende."}, {label: "b", text: "Sie müssen flexibel sein, zum Beispiel auch für Nachtschichten."}, {label: "c", text: "Sie arbeiten nie am Sonntag, wegen der internationalen Kunden."}], answer: "b" },
          { id: "q10_29", text: "29. Für den Job müssen Sie zwingend ...", type: "abc", options: [{label: "a", text: "perfekt Englisch und Deutsch können."}, {label: "b", text: "Französisch und Spanisch gut sprechen."}, {label: "c", text: "fünf Jahre an einer Uni für Finanzen gewesen sein."}], answer: "a" },
          { id: "q10_30", text: "30. Was bekommen Sie sofort von der Bank gestellt?", type: "abc", options: [{label: "a", text: "Eine kleine Wohnung im Zentrum."}, {label: "b", text: "Einen festen Vertrag als Abteilungsleiter."}, {label: "c", text: "Ein Ticket für die öffentlichen Verkehrsmittel in Berlin."}], answer: "c" }
        ]
      }
    ]
  }
];
