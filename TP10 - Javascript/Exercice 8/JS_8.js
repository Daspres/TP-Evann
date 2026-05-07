const form = document.getElementById("devisForm");
const btnAddArticle = document.getElementById("addArticle");
const articlesContainer = document.getElementById("articles-container");

// Ajouter un article
btnAddArticle.addEventListener("click", function() {
    const div = document.createElement("div");
    div.className = "ligne-article";
    div.innerHTML = `
        <input type="text" placeholder="Description" class="art-desc" required>
        <input type="number" placeholder="Prix HT" class="art-prix" required>
        <input type="number" placeholder="Qté" class="art-qte" required>
    `;
    articlesContainer.appendChild(div);

});

// Envoi du formulaire
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const numero = document.getElementById("in_numero").value;
    const date = document.getElementById("in_date").value;
    const tva = Number(document.getElementById("in_tva").value);

    document.getElementById("numeroDevis").textContent = numero;
    document.getElementById("dateDevis").textContent = date;
    let totalHT = 0;
    let html = "";
    const lignes = document.querySelectorAll(".ligne-article");



    lignes.forEach(function(ligne) {
        const desc = ligne.querySelector(".art-desc").value;
        const prix = Number(ligne.querySelector(".art-prix").value);
        const qte = Number(ligne.querySelector(".art-qte").value);
        const total = prix * qte;
        totalHT += total;
        html += `
            <tr>
                <td>${desc}</td>
                <td>${prix} €</td>
                <td>${qte}</td>
                <td>${total} €</td>
            </tr>
        `;

    });

    document.getElementById("tableArticles").innerHTML = html;

    const montantTVA = totalHT * tva / 100;
    const totalFinal = totalHT + montantTVA;

    document.getElementById("sousTotal").textContent = totalHT + " €";
    document.getElementById("tva").textContent = montantTVA + " €";
    document.getElementById("totalFinal").textContent = totalFinal + " €";

    document.getElementById("formulaire-saisie").style.display = "none";
    document.getElementById("devis-resultat").style.display = "block";

});