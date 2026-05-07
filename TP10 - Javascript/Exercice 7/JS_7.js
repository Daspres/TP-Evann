const devis = {
  numero: prompt("Numéro du devis") || "NC",
  date: prompt("Date") || new Date().toLocaleDateString(),
  validite: prompt("Validité"),

  entreprise: {
    nom: prompt("Nom entreprise"),
    adresse: prompt("Adresse entreprise"),
    email: prompt("Email entreprise")
  },

  client: {
    nom: prompt("Nom client"),
    adresse: prompt("Adresse client")
  },

  articles: [],
  tva: Number(prompt("TVA (%)")) || 20 // Valeur par défaut si vide
};

/* ARTICLES */
const nb = Number(prompt("Nombre d'articles"));

for (let i = 0; i < nb; i++) {
  devis.articles.push({
    description: prompt(`Description de l'article ${i + 1}`),
    prix: parseFloat(prompt("Prix unitaire HT")),
    quantite: parseInt(prompt("Quantité"))
  });
}

/* AFFICHAGE DES INFOS GÉNÉRALES */
// Utilisation d'une fonction simple pour éviter la répétition
const setText = (id, text) => {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
};

setText("numeroDevis", devis.numero);
setText("dateDevis", devis.date);
setText("validiteDevis", devis.validite);
setText("nomEntreprise", devis.entreprise.nom);
setText("adresseEntreprise", devis.entreprise.adresse);
setText("emailEntreprise", devis.entreprise.email);
setText("nomClient", devis.client.nom);
setText("adresseClient", devis.client.adresse);

/* TABLEAU DES ARTICLES */
const table = document.getElementById("tableArticles");
let totalHT = 0;
let htmlArticles = ""; // On stocke tout ici d'abord

devis.articles.forEach(article => {
  const totalLigne = article.prix * article.quantite;
  totalHT += totalLigne;

  htmlArticles += `
    <tr>
      <td>${article.description}</td>
      <td>${article.prix.toFixed(2)} €</td>
      <td>${article.quantite}</td>
      <td>${totalLigne.toFixed(2)} €</td>
    </tr>
  `;
});

// On injecte tout d'un coup dans le DOM
if (table) table.innerHTML = htmlArticles;

/* CALCULS DES TOTAUX */
const montantTVA = totalHT * (devis.tva / 100);
const totalFinal = totalHT + montantTVA;

setText("sousTotal", `${totalHT.toFixed(2)} €`);
setText("tva", `${montantTVA.toFixed(2)} €`);
setText("totalFinal", `${totalFinal.toFixed(2)} €`);