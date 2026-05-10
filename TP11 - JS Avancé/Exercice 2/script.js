const form = document.getElementById("visitorForm");
const tableBody = document.querySelector("#visitorTable tbody");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const bac = document.getElementById("bac").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${bac}</td>
    `;

    tableBody.appendChild(row);

    form.reset();
});