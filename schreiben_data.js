const ALL_SETS = [
  {
    id: 1, thema: "Soziale Medien und Freundschaft",
    aufgabe1: {
      situation: "Sie haben letzte Woche ein Konzert Ihrer Lieblingsband besucht und waren sehr begeistert. Ihre beste Freundin/Ihr bester Freund konnte leider nicht mitkommen.",
      punkte: ["Beschreiben Sie: Wie war das Konzert?", "Begründen Sie: Welcher Moment war für Sie am schönsten und warum?", "Machen Sie einen Vorschlag: Was könnte man zusammen unternehmen?"],
      redemittel: ["Das Konzert war wirklich unvergesslich / aufregend / beeindruckend ...", "Die Atmosphäre war unglaublich, weil ...", "Besonders toll fand ich (den Moment, als) ..., da ...", "Am schönsten war für mich ..., weil ich ...", "Was hältst du davon, wenn wir ...?", "Wie wäre es, wenn wir nächsten ... zusammen ...?", "Ich würde mich freuen, wenn wir bald ..."]
    },
    aufgabe2: {
      thema: "Soziale Medien und Freundschaft",
      meinung: "Ich finde es super, dass man durch soziale Medien mit Freunden in Kontakt bleiben kann, die weit weg wohnen. Aber ich glaube, man vernachlässigt dabei die Menschen, die direkt um einen herum sind. Echte Freundschaft braucht echte Begegnungen!",
      redemittel: ["Ich stimme [Name] (nicht) zu, weil ...", "Einerseits ist es richtig, dass ..., andererseits ...", "Ich bin der Meinung / Ansicht, dass ...", "Meiner Erfahrung nach ...", "Es stimmt zwar, dass ..., aber man sollte auch bedenken, dass ...", "Ich finde es wichtig / problematisch / schade, dass ...", "Ein weiterer Aspekt ist, dass ..."]
    },
    aufgabe3: {
      situation: "Sie haben sich für einen Musikworkshop in Ihrer Musikschule angemeldet. Leider haben Sie einen Termin beim Arzt, den Sie nicht verschieben können.",
      aufgabe: "Schreiben Sie an den Kursleiter / die Kursleiterin. Entschuldigen Sie sich höflich und bitten Sie um einen Ersatztermin.",
      redemittel: ["Sehr geehrte/r Frau/Herr ..., / Liebe/r Frau/Herr ...", "Leider kann ich am ... nicht teilnehmen, da ich ...", "Es tut mir sehr leid, dass ...", "Ich habe leider einen Arzttermin, den ich nicht ...", "Wäre es möglich, dass ich den Kurs zu einem anderen Zeitpunkt ...?", "Ich würde mich freuen, wenn Sie mir mitteilen könnten, ob ...", "Mit freundlichen Grüßen / Herzliche Grüße"]
    }
  },
  {
    id: 2, thema: "Reisen und Abenteuer",
    aufgabe1: {
      situation: "Sie sind gerade von einer Städtereise zurückgekehrt und haben viele tolle Erlebnisse gehabt. Eine Freundin/Ein Freund möchte mehr darüber erfahren.",
      punkte: ["Beschreiben Sie: Was haben Sie auf der Reise erlebt?", "Begründen Sie: Was hat Ihnen am besten gefallen und warum?", "Machen Sie einen Vorschlag: Möchten Sie zusammen verreisen?"],
      redemittel: ["Die Stadt war wirklich faszinierend / wunderschön / aufregend ...", "Ich habe ... besucht und war total begeistert von ...", "Am meisten hat mir ... gefallen, weil ...", "Ich war total überrascht, als / wie ...", "Hättest du Lust, nächstes Jahr ...?", "Ich könnte mir vorstellen, dass wir zusammen ...", "Wäre es nicht toll, wenn wir ...?"]
    },
    aufgabe2: {
      thema: "Reisen und Abenteuer",
      meinung: "Ich finde, Jugendliche sollten unbedingt alleine reisen! Nur so lernt man wirklich, auf sich selbst zu vertrauen und neue Kulturen kennenzulernen. Eltern machen sich zwar Sorgen, aber das gehört zum Erwachsenwerden dazu.",
      redemittel: ["Ich teile diese Meinung (nicht), weil ...", "Auf der einen Seite ..., auf der anderen Seite ...", "Es ist zwar verständlich, dass ..., dennoch ...", "Aus meiner Sicht / Perspektive ...", "Man sollte jedoch beachten, dass ...", "Ich halte es für wichtig / sinnvoll / problematisch, dass ...", "Darüber hinaus / Außerdem / Zudem ..."]
    },
    aufgabe3: {
      situation: "Sie haben eine Jugendherberge für eine Gruppenreise mit Ihrem Sportverein gebucht. Leider müssen Sie die Anzahl der Personen ändern.",
      aufgabe: "Schreiben Sie an die Jugendherberge. Erklären Sie die Situation und bitten Sie um eine Änderung der Buchung.",
      redemittel: ["Sehr geehrte Damen und Herren,", "Ich schreibe Ihnen bezüglich meiner Buchung vom ...", "Leider ist es uns nicht möglich, ..., weil ...", "Ich möchte Sie höflich bitten, die Buchung auf ... Personen zu ändern.", "Wäre es möglich, ...?", "Ich hoffe, dass Sie Verständnis für unsere Situation haben.", "Für Rückfragen stehe ich Ihnen gerne zur Verfügung."]
    }
  },
  {
    id: 3, thema: "Sport und gesunde Lebensweise",
    aufgabe1: {
      situation: "Sie haben an einem Halbmarathon teilgenommen und waren sehr stolz auf Ihr Ergebnis. Ein Freund/Eine Freundin interessiert sich ebenfalls fürs Laufen.",
      punkte: ["Beschreiben Sie: Wie war das Erlebnis beim Halbmarathon?", "Begründen Sie: Was motiviert Sie persönlich zum Sport?", "Machen Sie einen Vorschlag: Wie könnte Ihr Freund/Ihre Freundin mit dem Laufen beginnen?"],
      redemittel: ["Das Rennen war unglaublich / anstrengend, aber ...", "Die Stimmung an der Strecke war ...", "Sport ist für mich wichtig, weil ...", "Ich laufe regelmäßig, da ich mich danach immer ... fühle.", "Am besten fängst du damit an, dass ...", "Ich würde dir empfehlen, zunächst ...", "Vielleicht könnten wir zusammen ... trainieren?"]
    },
    aufgabe2: {
      thema: "Sport und gesunde Lebensweise",
      meinung: "Heutzutage sitzen Jugendliche viel zu viel vor dem Computer oder dem Smartphone. Das ist ungesund! Ich denke, Schulen sollten viel mehr Sportunterricht anbieten, damit junge Menschen mehr Bewegung bekommen.",
      redemittel: ["Das stimmt / stimmt nur zum Teil, weil ...", "Es ist tatsächlich so, dass ...", "Ich finde es richtig / falsch, dass ...", "Meiner Meinung nach sollten ...", "Ein Problem dabei ist jedoch, dass ...", "Wichtiger als ... wäre es, ...", "Wenn man bedenkt, dass ..., dann ..."]
    },
    aufgabe3: {
      situation: "Sie möchten einem Fitnessstudio beitreten. Sie haben eine Anfrage gesendet, aber noch keine Antwort erhalten.",
      aufgabe: "Schreiben Sie erneut an das Fitnessstudio. Erinnern Sie höflich an Ihre Anfrage und fragen Sie nach den Mitgliedschaftsoptionen.",
      redemittel: ["Sehr geehrte Damen und Herren,", "Ich habe Ihnen bereits am ... geschrieben, aber ...", "Ich würde mich sehr freuen, wenn Sie mir mitteilen könnten, ...", "Könnten Sie mir bitte Informationen über ... zusenden?", "Ich interessiere mich besonders für ...", "Ich bin gespannt auf Ihre Antwort.", "Vielen Dank im Voraus."]
    }
  },
  {
    id: 4, thema: "Digitale Welt und Technologie",
    aufgabe1: {
      situation: "Sie haben neulich ein tolles neues Smartphone bekommen. Ihre Großmutter/Ihr Großvater interessiert sich sehr für Technik und fragt Sie danach.",
      punkte: ["Beschreiben Sie: Was sind die besten Funktionen des Smartphones?", "Begründen Sie: Warum ist dieses Gerät für Sie besonders nützlich?", "Machen Sie einen Vorschlag: Wie könnte Ihr Großvater/Ihre Großmutter von Technologie profitieren?"],
      redemittel: ["Das Smartphone hat viele praktische Funktionen, zum Beispiel ...", "Besonders gut finde ich, dass man damit ...", "Es ist nützlich für mich, weil ich damit ... kann.", "Im Alltag hilft es mir vor allem dabei, ...", "Ich könnte mir vorstellen, dass du / Sie von ... profitieren könntest/könnten.", "Vielleicht wäre es eine gute Idee, wenn ...", "Ich würde dir / Ihnen gerne zeigen, wie ..."]
    },
    aufgabe2: {
      thema: "Digitale Welt und Technologie",
      meinung: "Kinder unter 12 Jahren sollten kein eigenes Smartphone haben! Das Gerät macht süchtig und lenkt vom Lernen ab. Außerdem sind soziale Netzwerke für Kinder in diesem Alter viel zu gefährlich.",
      redemittel: ["Ich bin (nicht) der Meinung, dass ...", "Es stimmt zwar, dass ..., aber gleichzeitig ...", "Man kann nicht pauschal sagen, dass ...", "Es kommt darauf an, wie / ob ...", "Es wäre besser / sinnvoller, wenn ...", "Auf der einen Seite ..., auf der anderen Seite ...", "Ich finde es wichtig, dass Eltern ..."]
    },
    aufgabe3: {
      situation: "Sie haben ein neues Computerspiel online bestellt, aber es ist noch nicht angekommen, obwohl die Lieferzeit abgelaufen ist.",
      aufgabe: "Schreiben Sie an den Kundendienst. Erklären Sie das Problem und bitten Sie um eine Lösung.",
      redemittel: ["Sehr geehrte Damen und Herren,", "Ich habe am ... eine Bestellung aufgegeben (Bestellnummer: ...).", "Leider ist das Paket trotz der angegebenen Lieferzeit von ... noch nicht angekommen.", "Ich bitte Sie, die Situation zu überprüfen und mir mitzuteilen, ...", "Wäre es möglich, ...?", "Ich erwarte Ihre baldige Rückmeldung.", "Mit freundlichen Grüßen"]
    }
  },
  {
    id: 5, thema: "Umwelt und Klimaschutz",
    aufgabe1: {
      situation: "Sie haben an einem Klimamarsch in Ihrer Stadt teilgenommen und waren sehr bewegt von der Veranstaltung. Ein Freund/Eine Freundin aus dem Ausland fragt Sie davon.",
      punkte: ["Beschreiben Sie: Wie war die Atmosphäre beim Klimamarsch?", "Begründen Sie: Warum ist Ihnen das Thema Klimaschutz persönlich wichtig?", "Machen Sie einen Vorschlag: Was kann man im Alltag für die Umwelt tun?"],
      redemittel: ["Der Klimamarsch war eine beeindruckende / bewegende Erfahrung, denn ...", "Tausende von Menschen kamen zusammen, um ...", "Klimaschutz ist mir wichtig, weil ...", "Ich mache mir Sorgen um ..., da ...", "Im Alltag kann man zum Beispiel ..., um ...", "Eine einfache Möglichkeit ist es, ...", "Ich würde dir empfehlen, ..."]
    },
    aufgabe2: {
      thema: "Umwelt und Klimaschutz",
      meinung: "Ich kaufe nur noch Second-Hand-Kleidung, denn die Modeindustrie ist eine der größten Umweltverschmutzer weltweit. Jeder sollte auf Fast Fashion verzichten! Das ist doch nicht so schwer.",
      redemittel: ["Das finde ich sehr vorbildlich, allerdings ...", "Nicht jeder hat die Möglichkeit, ..., weil ...", "Es ist bewundernswert, dass ..., jedoch ...", "Ich unterstütze die Idee, dass ...", "Ein Problem dabei könnte sein, dass ...", "Man sollte auch berücksichtigen, dass ...", "Neben ... wäre es auch wichtig, dass ..."]
    },
    aufgabe3: {
      situation: "Sie möchten an einem Umweltprojekt in Ihrer Schule teilnehmen. Die zuständige Lehrperson hat Ihnen noch nicht geantwortet.",
      aufgabe: "Schreiben Sie an die Lehrperson. Zeigen Sie Ihr Interesse am Projekt und fragen Sie, welche Schritte als nächstes geplant sind.",
      redemittel: ["Sehr geehrte/r Frau/Herr ...,", "Ich interessiere mich sehr für das Umweltprojekt und würde gerne ...", "Ich wollte fragen, ob Sie bereits wissen, ...", "Gibt es schon einen Termin für ...?", "Ich stehe gerne zur Verfügung, um ...", "Könnten Sie mir bitte mitteilen, ...?", "Ich freue mich auf Ihre Antwort."]
    }
  },
  {
    id: 6, thema: "Schule und Bildung",
    aufgabe1: {
      situation: "Sie haben gerade Ihr Schulabschlusszeugnis bekommen und sind sehr zufrieden mit Ihren Noten. Ein alter Schulfreund/eine alte Schulfreundin hat sich über E-Mail gemeldet.",
      punkte: ["Beschreiben Sie: Wie lief die Prüfungszeit für Sie ab?", "Begründen Sie: Welches Fach hat Ihnen am meisten Spaß gemacht und warum?", "Machen Sie einen Vorschlag: Was könnten Sie beide nach dem Schulabschluss unternehmen?"],
      redemittel: ["Die Prüfungszeit war stressig / intensiv / herausfordernd, aber ...", "Ich habe viel für ... gelernt und war am Ende ...", "Mein Lieblingsfach war / ist ..., weil ...", "Besonders spannend fand ich ..., da ...", "Nach dem Schulabschluss könnte man ...", "Hättest du Lust, gemeinsam ...?", "Ich würde mich freuen, wenn wir ..."]
    },
    aufgabe2: {
      thema: "Schule und Bildung",
      meinung: "Hausaufgaben sollten in der Schule abgeschafft werden! Schülerinnen und Schüler haben nach dem Unterricht keine Energie mehr und brauchen Zeit für Hobbys, Familie und Freunde. Das Lernen sollte in der Schule stattfinden, nicht zu Hause.",
      redemittel: ["Da bin ich (nicht) ganz deiner / Ihrer Meinung, weil ...", "Es ist richtig, dass ..., trotzdem ...", "Einerseits ..., andererseits ...", "Man muss dabei bedenken, dass ...", "Aus pädagogischer Sicht ...", "Ich denke, ein ausgewogener Ansatz wäre ...", "Es wäre sinnvoller, wenn ..."]
    },
    aufgabe3: {
      situation: "Sie möchten an einem Austauschprogramm in Deutschland teilnehmen. Sie brauchen noch eine Bestätigung von Ihrer Schule.",
      aufgabe: "Schreiben Sie an Ihre Schulleitung. Erklären Sie das Programm und bitten Sie um eine offizielle Bestätigung.",
      redemittel: ["Sehr geehrte/r Frau/Herr ...,", "Ich möchte mich für das Austauschprogramm '...' bewerben.", "Für die Bewerbung benötige ich eine Bestätigung der Schule, dass ...", "Das Programm findet vom ... bis zum ... statt.", "Ich würde mich sehr freuen, wenn Sie mir diese Bestätigung ausstellen könnten.", "Darf ich Sie bitten, ...?", "Vielen Dank für Ihre Unterstützung."]
    }
  },
  {
    id: 7, thema: "Musik, Kultur und Kreativität",
    aufgabe1: {
      situation: "Sie haben gerade einen Mal- oder Kreativkurs beendet und ein eigenes Bild / Kunstwerk fertiggestellt. Ihre Cousine/Ihr Cousin fragt Sie darüber.",
      punkte: ["Beschreiben Sie: Was haben Sie im Kurs gemacht?", "Begründen Sie: Was bedeutet Kreativität oder Kunst für Sie persönlich?", "Machen Sie einen Vorschlag: Was könnten Sie und Ihre Cousine/Ihr Cousin zusammen kreativ gestalten?"],
      redemittel: ["Im Kurs haben wir vor allem ... gelernt und geübt.", "Das Besondere daran war, dass ...", "Kreativität / Kunst bedeutet mir ..., weil ...", "Durch Kunst kann man ... ausdrücken.", "Ich fände es toll, wenn wir zusammen ...", "Was hältst du davon, wenn wir mal ...?", "Vielleicht könnten wir ein gemeinsames Projekt starten, zum Beispiel ..."]
    },
    aufgabe2: {
      thema: "Musik, Kultur und Kreativität",
      meinung: "Musik und Kunstunterricht an Schulen sind reine Zeitverschwendung. Diese Fächer bringen den Schülerinnen und Schülern für ihr späteres Berufsleben nichts. Lieber sollte man mehr Zeit für Mathematik und Naturwissenschaften einplanen!",
      redemittel: ["Dieser Meinung kann ich (nicht) zustimmen, weil ...", "Es ist zwar verständlich, dass ..., aber ...", "Studien zeigen, dass ...", "Kreativität ist auch im Berufsleben wichtig, da ...", "Ich bin überzeugt, dass ...", "Man sollte nicht vergessen, dass ...", "Eine ausgewogene Bildung sollte sowohl ... als auch ... beinhalten."]
    },
    aufgabe3: {
      situation: "Sie haben ein Ticket für ein Theaterstück gekauft, können aber nicht hingehen. Sie möchten das Ticket zurückgeben oder tauschen.",
      aufgabe: "Schreiben Sie an das Kartenservice des Theaters. Erklären Sie Ihr Anliegen und bitten Sie um eine Lösung.",
      redemittel: ["Sehr geehrte Damen und Herren,", "Ich habe am ... ein Ticket für ... gekauft (Buchungsnummer: ...).", "Leider kann ich am ... nicht kommen, da ...", "Ich würde das Ticket gerne zurückgeben / gegen einen anderen Termin tauschen.", "Wäre es möglich, ...?", "Ich bitte Sie, mir mitzuteilen, wie ich ...", "Vielen Dank für Ihre Hilfe."]
    }
  },
  {
    id: 8, thema: "Ernährung und Gesundheit",
    aufgabe1: {
      situation: "Sie haben sich entschieden, sich gesünder zu ernähren, und haben begonnen, selbst zu kochen. Ihre Tante/Ihr Onkel interessiert sich sehr dafür.",
      punkte: ["Beschreiben Sie: Was haben Sie zuletzt gekocht und wie war es?", "Begründen Sie: Warum ist Ihnen eine gesunde Ernährung wichtig?", "Machen Sie einen Vorschlag: Was könnten Sie gemeinsam kochen?"],
      redemittel: ["Ich habe neulich zum ersten Mal ... gekocht und es hat mir gut / nicht so gut geschmeckt.", "Das Rezept war einfach / schwieriger als erwartet, weil ...", "Gesunde Ernährung ist mir wichtig, weil ...", "Ich fühle mich seitdem ... und habe bemerkt, dass ...", "Ich könnte mir vorstellen, dass wir zusammen ... kochen.", "Wäre es eine gute Idee, wenn wir ...?", "Ich zeige dir gerne, wie man ... zubereitet."]
    },
    aufgabe2: {
      thema: "Ernährung und Gesundheit",
      meinung: "Vegane Ernährung ist die Zukunft! Wer sich vegan ernährt, schützt nicht nur seine Gesundheit, sondern auch das Klima und die Tiere. Alle sollten auf tierische Produkte verzichten – das ist die einzig richtige Entscheidung.",
      redemittel: ["Ich respektiere diese Einstellung, jedoch ...", "Es stimmt, dass vegane Ernährung ... hat, aber ...", "Man kann nicht erwarten, dass alle ..., weil ...", "Es ist eine persönliche Entscheidung, ...", "Trotzdem gibt es gute Gründe, ...", "Wichtig ist es, dass ...", "Ich finde es besser, wenn jeder für sich selbst entscheidet, ..."]
    },
    aufgabe3: {
      situation: "Sie möchten bei einem Kochkurs teilnehmen, der bereits ausgebucht ist. Sie möchten auf eine Warteliste gesetzt werden.",
      aufgabe: "Schreiben Sie an das Kochstudio. Zeigen Sie Ihr starkes Interesse und bitten Sie, auf die Warteliste gesetzt zu werden.",
      redemittel: ["Sehr geehrte Damen und Herren,", "Ich habe erfahren, dass Ihr Kochkurs '...' leider ausgebucht ist.", "Ich interessiere mich sehr für diesen Kurs, weil ...", "Wäre es möglich, mich auf die Warteliste zu setzen?", "Bitte informieren Sie mich, falls ein Platz frei wird.", "Ich bin jederzeit flexibel und kann kurzfristig ...", "Vielen Dank im Voraus für Ihre Bemühungen."]
    }
  },
  {
    id: 9, thema: "Beruf und Zukunftspläne",
    aufgabe1: {
      situation: "Sie haben ein Praktikum in einer Firma absolviert und wertvolle Erfahrungen gesammelt. Ein Freund/Eine Freundin plant, auch ein Praktikum zu machen.",
      punkte: ["Beschreiben Sie: Was haben Sie im Praktikum gemacht?", "Begründen Sie: Was war die wichtigste Erfahrung und warum?", "Machen Sie einen Vorschlag: Wie sollte sich Ihr Freund/Ihre Freundin auf das Praktikum vorbereiten?"],
      redemittel: ["Im Praktikum habe ich vor allem ... gemacht und dabei ...", "Die Aufgaben waren vielseitig / herausfordernd / interessant.", "Die wichtigste Erfahrung für mich war ..., weil ...", "Ich habe gelernt, wie man ... und das hat mir gezeigt, dass ...", "Ich würde dir raten, dich vorher über ... zu informieren.", "Am besten ist es, wenn du ...", "Außerdem solltest du darauf achten, dass ..."]
    },
    aufgabe2: {
      thema: "Beruf und Zukunftspläne",
      meinung: "Ein Gap Year nach dem Schulabschluss ist reine Zeitverschwendung! Wer ein Jahr pausiert, verliert den Anschluss und hat später Schwierigkeiten, ins Studium oder in den Beruf einzusteigen. Man sollte sofort nach dem Abitur anfangen zu studieren.",
      redemittel: ["Das sehe ich anders, weil ...", "Ein Gap Year kann sehr sinnvoll sein, wenn ...", "Es kommt darauf an, wie man die Zeit ...", "Erfahrungen im Ausland / in anderen Bereichen können ...", "Es stimmt zwar, dass ..., aber man sollte auch bedenken, dass ...", "Ich finde, dass jeder selbst entscheiden sollte, ...", "Wichtig ist dabei, dass ..."]
    },
    aufgabe3: {
      situation: "Sie haben sich für eine Ausbildungsstelle beworben, aber noch keine Rückmeldung erhalten.",
      aufgabe: "Schreiben Sie an die Personalabteilung der Firma. Fragen Sie höflich nach dem Stand Ihrer Bewerbung.",
      redemittel: ["Sehr geehrte Damen und Herren,", "Am ... habe ich meine Bewerbungsunterlagen für die Stelle als ... eingereicht.", "Da ich bisher noch keine Rückmeldung erhalten habe, ...", "Ich würde mich freuen, wenn Sie mir mitteilen könnten, ...", "Ich interessiere mich weiterhin sehr für diese Stelle, da ...", "Für Rückfragen stehe ich Ihnen jederzeit zur Verfügung.", "Ich hoffe auf eine baldige Antwort."]
    }
  },
  {
    id: 10, thema: "Wohnen und Gemeinschaft",
    aufgabe1: {
      situation: "Sie sind kürzlich in eine neue Wohnung oder eine Wohngemeinschaft (WG) eingezogen. Ihr Bruder/Ihre Schwester fragt Sie, wie es Ihnen dort gefällt.",
      punkte: ["Beschreiben Sie: Wie ist Ihre neue Wohnung/WG?", "Begründen Sie: Was schätzen Sie am meisten an Ihrer neuen Wohnsituation?", "Machen Sie einen Vorschlag: Wann könnte Ihr Bruder/Ihre Schwester Sie besuchen?"],
      redemittel: ["Meine neue Wohnung ist ... und hat ...", "Die WG besteht aus ... Personen und wir haben uns gut eingelebt.", "Am meisten schätze ich ..., weil ...", "Es gefällt mir besonders, dass ...", "Du solltest mich unbedingt besuchen kommen!", "Wäre es möglich, dass du ... kommst?", "Ich freue mich schon darauf, dir alles zu zeigen."]
    },
    aufgabe2: {
      thema: "Wohnen und Gemeinschaft",
      meinung: "In Großstädten können sich Jugendliche und junge Erwachsene keine eigene Wohnung mehr leisten. Das ist eine Katastrophe! Junge Menschen werden aus dem Stadtleben verdrängt. Die Politik muss sofort handeln und bezahlbaren Wohnraum schaffen.",
      redemittel: ["Das ist ein wichtiges Problem, das ...", "Ich stimme zu, dass ..., jedoch ...", "Es gibt verschiedene Ursachen für ..., zum Beispiel ...", "Die Politik könnte / sollte ...", "Es wäre sinnvoll, wenn ...", "Neben staatlichen Maßnahmen wäre es auch wichtig, dass ...", "Ich glaube, dass eine Lösung nur dann möglich ist, wenn ..."]
    },
    aufgabe3: {
      situation: "Sie haben ein Zimmer in einer Wohngemeinschaft gemietet. Es gibt ein Problem mit der Heizung, die seit einer Woche nicht funktioniert.",
      aufgabe: "Schreiben Sie an Ihren Vermieter / Ihre Vermieterin. Beschreiben Sie das Problem höflich und bitten Sie um eine schnelle Lösung.",
      redemittel: ["Sehr geehrte/r Frau/Herr ...,", "Ich wohne seit ... in Ihrer Wohnung in der ...-Straße.", "Ich möchte Sie auf ein Problem aufmerksam machen: Die Heizung ...", "Das Problem besteht seit ... und ich bitte Sie, ...", "Wäre es möglich, dass ein Techniker / eine Technikerin ...", "Ich wäre Ihnen sehr dankbar, wenn Sie sich darum kümmern könnten.", "Bitte melden Sie sich bei mir, um einen Termin zu ..."]
    }
  }
];

const TASK_CONFIGS = [
  { title: "Persönliche E-Mail", time: "20 Min.", target: 80, isPersonal: true,
    instr: "Schreiben Sie eine E-Mail (ca. 80 Wörter). Behandeln Sie alle drei Punkte. Achten Sie auf Anrede, Einleitung, Reihenfolge der Inhaltspunkte und Schluss.",
    checks: ["Anrede vorhanden (z. B. Liebe/r …)", "Alle drei Punkte behandelt", "Passende Einleitung geschrieben", "Abschluss und Gruß vorhanden", "Persönlicher, freundlicher Ton"] },
  { title: "Meinungsbeitrag", time: "25 Min.", target: 80, isOpinion: true,
    instr: "Schreiben Sie Ihre Meinung zu dem Beitrag (ca. 80 Wörter).",
    checks: ["Klare eigene Meinung formuliert", "Begründung mit Argumenten", "Bezug auf den Beitrag genommen", "Strukturierter Aufbau erkennbar", "Sachlicher und überzeugender Ton"] },
  { title: "Formelle E-Mail", time: "15 Min.", target: 40, isFormal: true,
    instr: "Schreiben Sie eine E-Mail (ca. 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.",
    checks: ["Formelle Anrede (Sehr geehrte/r …)", "Zweck der E-Mail klar formuliert", "Anliegen präzise beschrieben", "Höflicher Ton durchgehend", "Formeller Abschiedsgruß"] }
];
