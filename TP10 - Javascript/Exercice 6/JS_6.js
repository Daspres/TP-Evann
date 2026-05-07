function afficherTable() {
    // Récupère le nombre choisi
    let nombre = document.getElementById("nombre").value;

    // Création du tableau HTML
    let tableau = "<table border='1'>";

    for (let i = 1; i <= 10; i++) {
        tableau += "<tr>";
        tableau += "<td>" + nombre + " x " + i + "</td>";
        tableau += "<td>" + (nombre * i) + "</td>";
        tableau += "</tr>";
    }

    tableau += "</table>";

    // Affiche le tableau dans la page
    document.getElementById("resultat").innerHTML = tableau;
}