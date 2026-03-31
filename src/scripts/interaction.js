// Aguardar o DOM estar pronto antes de executar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

function initializeApp() {
  console.log("✅ App inicializado!");

// ===============================
// EFEITO DO MOUSE
// ===============================
const mouseGlow = document.querySelector(".mouse-glow");

if (mouseGlow) {
  window.addEventListener("mousemove", (e) => {
    mouseGlow.style.left = `${e.clientX}px`;
    mouseGlow.style.top = `${e.clientY}px`;
  });
}

// ===============================
// MENU INTERATIVO
// ===============================
const styleMenuItems = document.querySelectorAll(".menu-item[data-style]");
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

if (styleTitle && styleDescription) {
  styleMenuItems.forEach(item => {
    item.addEventListener("click", () => {
      styleMenuItems.forEach(btn => btn.classList.remove("active"));
      item.classList.add("active");

      const selectedStyle = item.dataset.style;

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

  styleTitle.style.transition = "all 0.4s ease";
  styleDescription.style.transition = "all 0.4s ease";
}

// ===============================
// MENU SOBRE MIM (CORRIGIDO)
// ===============================
const sobreMimBtn = document.getElementById("sobre-mim-btn");
const aboutMenu = document.getElementById("about-menu");
const closeAboutBtn = document.getElementById("close-about");
const proceedAboutBtn = document.getElementById("proceed-about");
const mainSite = document.getElementById("main-site");

// Função única para fechar e ir ao Old School
function proceedFromAbout(e) {
  if (e) e.stopPropagation();

  aboutMenu.classList.remove("active");
  mainSite?.classList.remove("hidden");

  const oldSchoolBtn = document.querySelector(
    '.menu-item[data-style="Old School"]'
  );

  if (oldSchoolBtn) {
    oldSchoolBtn.click();
  }
}

if (sobreMimBtn) {
  sobreMimBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    aboutMenu.classList.add("active");
  });
}

if (closeAboutBtn) {
  closeAboutBtn.addEventListener("click", proceedFromAbout);
}

if (proceedAboutBtn) {
  proceedAboutBtn.addEventListener("click", proceedFromAbout);
}

// CLIQUE FORA DO MODAL → MESMA AÇÃO
if (aboutMenu) {
  aboutMenu.addEventListener("click", (e) => {
    if (e.target === aboutMenu) {
      proceedFromAbout(e);
    }
  });
}

// ===============================
// MENU CONTATO
// ===============================
const contactBtn = document.querySelector(".contact-btn");
const contactMenu = document.getElementById("contact-menu");
const closeContactBtn = document.getElementById("close-contact");

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    contactMenu.classList.add("active");
  });
}

if (closeContactBtn) {
  closeContactBtn.addEventListener("click", () => {
    contactMenu.classList.remove("active");
  });
}

if (contactMenu) {
  contactMenu.addEventListener("click", (e) => {
    if (e.target === contactMenu) {
      contactMenu.classList.remove("active");
    }
  });
}

// ===============================
// MENU HAMBÚRGUER (MOBILE)
// ===============================
const hamburgerBtn = document.getElementById("hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const mobileOverlay = document.getElementById("mobile-overlay");

function toggleMenu() {
  hamburgerBtn.classList.toggle("active");
  sidebar.classList.toggle("active");
  mobileOverlay.style.display = sidebar.classList.contains("active") ? "block" : "none";
}

function closeMenu() {
  hamburgerBtn.classList.remove("active");
  sidebar.classList.remove("active");
  mobileOverlay.style.display = "none";
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });
}

if (mobileOverlay) {
  mobileOverlay.addEventListener("click", closeMenu);
}

styleMenuItems.forEach(item => {
  item.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    closeMenu();
  }
});

// ===============================
// MODAL DE IMAGEM
// ===============================
const modalImg = document.getElementById("modal-img");
const modalImgSrc = document.getElementById("modal-img-src");
const prevBtn = document.getElementById("prev-img");
const nextBtn = document.getElementById("next-img");
const closeModalBtn = document.getElementById("close-modal-img");

let currentImageElement = null;
let currentCategory = null;

function closeImageModal() {
  modalImg.style.display = "none";
}

function openImage(img) {
  const section = img.closest(".style-section");
  currentCategory = section?.getAttribute("data-style");
  currentImageElement = img;
  modalImgSrc.src = img.src;
  modalImg.style.display = "flex";
}

function navigateImages(direction) {
  const images = document.querySelectorAll(
    `.style-section[data-style="${currentCategory}"] .gallery-item img`
  );

  const index = [...images].indexOf(currentImageElement);
  const nextIndex = direction === "next"
    ? (index + 1) % images.length
    : (index - 1 + images.length) % images.length;

  openImage(images[nextIndex]);
}

document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", () => openImage(img));
});

prevBtn.addEventListener("click", e => { e.stopPropagation(); navigateImages("prev"); });
nextBtn.addEventListener("click", e => { e.stopPropagation(); navigateImages("next"); });
closeModalBtn.addEventListener("click", e => { e.stopPropagation(); closeImageModal(); });

modalImg.addEventListener("click", e => {
  if (e.target === modalImg) closeImageModal();
});

// Fechar ao clicar na imagem
modalImgSrc.addEventListener("click", e => {
  e.stopPropagation();
  closeImageModal();
});

document.addEventListener("keydown", e => {
  if (modalImg.style.display === "flex") {
    if (e.key === "Escape") modalImg.style.display = "none";
    if (e.key === "ArrowRight") navigateImages("next");
    if (e.key === "ArrowLeft") navigateImages("prev");
  }
});

} // FIM initializeApp
