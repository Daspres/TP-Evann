// Définitions stockées dans une "map"
const definitions = {
    php: {
        title: "PHP",
        text: "PHP est un langage de programmation utilisé principalement pour créer des sites web dynamiques.",
        image: "https://www.php.net/images/logos/new-php-logo.png"
    },

    html: {
        title: "HTML",
        text: "HTML signifie HyperText Markup Language. Il permet de structurer les pages web.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },

    css: {
        title: "CSS",
        text: "CSS signifie Cascading Style Sheets. Il permet de styliser les pages web.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    }
};

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupImage = document.getElementById("popup-image");

const mots = document.querySelectorAll(".mot");

mots.forEach(mot => {

    mot.addEventListener("mouseenter", function(event) {

        const key = this.dataset.word;
        const definition = definitions[key];

        if (definition) {

            popupTitle.textContent = definition.title;
            popupText.textContent = definition.text;
            popupImage.src = definition.image;

            const rect = this.getBoundingClientRect();

            popup.style.top = (window.scrollY + rect.bottom + 10) + "px";
            popup.style.left = (window.scrollX + rect.left) + "px";

            popup.classList.remove("hidden");
        }
    });

    mot.addEventListener("mouseleave", function() {
        popup.classList.add("hidden");
    });
});