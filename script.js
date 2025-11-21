// Bouton retour en haut
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
});

toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animation sur les liens du menu
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Effet fade-in des sections
const sections = document.querySelectorAll(".section");

function showOnScroll() {
    sections.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        if (pos < window.innerHeight - 50) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", showOnScroll);

sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "0.8s";
});
