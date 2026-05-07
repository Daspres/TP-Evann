const longueur = document.getElementById("longueur");
const largeur = document.getElementById("largeur");

window.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (this.window.confirm("Les valeurs sont-elles les bonnes?")) {
        const resultat = longueur.value * largeur.value;
        console.log("La surface du rectangle est: " + resultat);
        alert("La surface du rectangle est: " + resultat);
    } else {
        longueur.value = null;
        largeur.value = null;
    }
  }
});