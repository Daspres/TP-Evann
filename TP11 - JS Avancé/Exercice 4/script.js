function calendrier(premierJour, mois, annee, options = {}) {

    const settings = {
        taille: options.taille || "moyen",
        couleurFond: options.couleurFond || "#ffffff",
        couleurHeader: options.couleurHeader || "#0077cc",
        couleurTexte: options.couleurTexte || "#000000"
    };

    const moisNoms = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ];

    const nbJours = new Date(annee, mois, 0).getDate();

    let html = `
        <table class="calendar ${getSizeClass(settings.taille)}"
               style="
                    background:${settings.couleurFond};
                    color:${settings.couleurTexte};
               ">
    `;

    html += `
        <tr>
            <th colspan="7"
                style="background:${settings.couleurHeader}">
                ${moisNoms[mois - 1]} ${annee}
            </th>
        </tr>
    `;

    const jours = [
        "Lun",
        "Mar",
        "Mer",
        "Jeu",
        "Ven",
        "Sam",
        "Dim"
    ];

    html += "<tr>";

    jours.forEach(jour => {
        html += `
            <th style="background:${settings.couleurHeader}">
                ${jour}
            </th>
        `;
    });

    html += "</tr>";

    let jourActuel = 1;

    html += "<tr>";

    for (let i = 1; i < premierJour; i++) {
        html += "<td></td>";
    }

    for (let i = premierJour; i <= 7; i++) {
        html += `<td>${jourActuel}</td>`;
        jourActuel++;
    }

    html += "</tr>";

    while (jourActuel <= nbJours) {

        html += "<tr>";

        for (let i = 1; i <= 7; i++) {

            if (jourActuel <= nbJours) {
                html += `<td>${jourActuel}</td>`;
                jourActuel++;
            } else {
                html += "<td></td>";
            }
        }

        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("calendar-container").innerHTML = html;
}

function getSizeClass(taille) {

    switch(taille) {

        case "petit":
            return "small";

        case "grand":
            return "large";

        default:
            return "medium";
    }
}