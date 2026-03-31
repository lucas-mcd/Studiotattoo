// ===============================
// EFEITO DO MOUSE
// ===============================
const mouseGlow = document.querySelector(".mouse-glow");

window.addEventListener("mousemove", (e) => {
  mouseGlow.style.left = `${e.clientX}px`;
  mouseGlow.style.top = `${e.clientY}px`;
});

// ===============================
// INTRO ANIMADA
// ===============================
const intro = document.getElementById("intro");
const mainSite = document.getElementById("main-site");
const lines = document.querySelectorAll(".line");

function animateIntroLines() {
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("show");
    }, index * 700); // cada linha entra depois da outra
  });

  // tempo total da intro antes de revelar o site
  setTimeout(() => {
    intro.classList.add("hide");
    mainSite.classList.remove("hidden");
  }, 4200);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    animateIntroLines();
  }, 1000);
});

// ===============================
// MENU INTERATIVO
// ===============================
const menuItems = document.querySelectorAll(".menu-item");
const styleTitle = document.getElementById("style-title");
const styleDescription = document.getElementById("style-description");

const tattooStyles = {
  "Old School": "Traços clássicos, cores marcantes e personalidade forte. O Old School carrega tradição, atitude e símbolos eternos da tatuagem.",
  "Realismo": "Detalhes impressionantes, profundidade visual e tatuagens que parecem ganhar vida na pele com impacto e técnica refinada.",
  "Blackwork": "Preto intenso, contraste brutal e composições pesadas que transformam o corpo em uma obra de presença absoluta.",
  "Fineline": "Linhas delicadas, elegância visual e precisão estética para quem curte sutileza com identidade forte.",
  "Minimalista": "Poucos elementos, muito significado. Um estilo limpo, moderno e poderoso na simplicidade.",
  "Oriental": "Arte grandiosa, simbologia profunda e composições marcantes inspiradas na tradição oriental clássica.",
  "Tribal": "Força ancestral, formas orgânicas e impacto visual bruto. O tribal carrega raiz, identidade e poder."
};

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(btn => btn.classList.remove("active"));
    item.classList.add("active");

    const selectedStyle = item.dataset.style;

    // animação de troca
    styleTitle.style.opacity = "0";
    styleTitle.style.transform = "translateY(20px)";
    styleDescription.style.opacity = "0";
    styleDescription.style.transform = "translateY(20px)";

    setTimeout(() => {
      styleTitle.textContent = selectedStyle;
      styleDescription.textContent = tattooStyles[selectedStyle];

      styleTitle.style.opacity = "1";
      styleTitle.style.transform = "translateY(0)";
      styleDescription.style.opacity = "1";
      styleDescription.style.transform = "translateY(0)";
    }, 250);
  });
});

// ===============================
// TRANSIÇÕES SUAVES NO TEXTO
// ===============================
styleTitle.style.transition = "all 0.4s ease";
styleDescription.style.transition = "all 0.4s ease";