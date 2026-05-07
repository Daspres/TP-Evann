const longueur = document.getElementById("longueur");
const largeur = document.getElementById("largeur");

function rect(long, larg) {
    return long*larg;

}

window.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (this.window.confirm("Les valeurs sont-elles les bonnes?")) {
        const longueurNum = Number(longueur.value);
        const largeurNum = Number(largeur.value);

        if (Number.isInteger(longueurNum) && Number.isInteger(largeurNum)) {
            const res = rect(longueurNum, largeurNum);
            console.log("La surface du rectangle est: " + res);
            alert("La surface du rectangle est: " + res);
            this.document.write("Resultat: " + res);
        } else {
            this.alert("Veuillez insérer des nombres entiers.");
            longueur.value = "";
            largeur.value = "";
        }
    } else {
        longueur.value = "";
        largeur.value = "";
    }
  }
});