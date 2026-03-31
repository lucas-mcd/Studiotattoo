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
  if (intro && mainSite) {
    setTimeout(() => {
      intro.classList.add("hide");
      mainSite.classList.remove("hidden");
    }, 4200);
  }
}

window.addEventListener("load", () => {
  setTimeout(() => {
    animateIntroLines();
  }, 1000);
});

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
}

// ===============================
// MENU SOBRE MIM
// ===============================
const sobreMimBtn = document.getElementById("sobre-mim-btn");
const aboutMenu = document.getElementById("about-menu");
const closeAboutBtn = document.getElementById("close-about");
const proceedAboutBtn = document.getElementById("proceed-about");

// Função para fechar o menu e proceder (ativar Old School)
function proceedFromAbout(e) {
  if (e) {
    e.stopPropagation();
  }
  aboutMenu.classList.remove("active");
  
  // Ativar o estilo Old School
  const oldSchoolBtn = document.querySelector('.menu-item[data-style="Old School"]');
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
  closeAboutBtn.addEventListener("click", (e) => {
    proceedFromAbout(e);
  });
}

if (aboutMenu) {
  aboutMenu.addEventListener("click", (e) => {
    if (e.target === aboutMenu) {
      aboutMenu.classList.remove("active");
    }
  });
}

// Fechar menu About ao clicar no botão "Explorar"
if (proceedAboutBtn) {
  proceedAboutBtn.addEventListener("click", (e) => {
    proceedFromAbout(e);
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

// Fechar o menu de contato ao clicar fora dele
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

console.log("Hamburguer btn:", hamburgerBtn);
console.log("Sidebar:", sidebar);
console.log("Mobile Overlay:", mobileOverlay);

function toggleMenu() {
  if (hamburgerBtn && sidebar) {
    hamburgerBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
    
    // Controlar overlay
    if (mobileOverlay) {
      if (sidebar.classList.contains("active")) {
        mobileOverlay.style.display = "block";
      } else {
        mobileOverlay.style.display = "none";
      }
    }
  }
}

function closeMenu() {
  if (hamburgerBtn && sidebar) {
    hamburgerBtn.classList.remove("active");
    sidebar.classList.remove("active");
    
    if (mobileOverlay) {
      mobileOverlay.style.display = "none";
    }
  }
}

if (hamburgerBtn) {
  // Toggle menu ao clicar no hambúrguer
  hamburgerBtn.addEventListener("click", (e) => {
    console.log("Hamburguer clicado!");
    e.stopPropagation();
    toggleMenu();
  });
}

if (mobileOverlay) {
  // Fechar menu ao clicar no overlay
  mobileOverlay.addEventListener("click", (e) => {
    console.log("Overlay clicado!");
    closeMenu();
  });
}

// Fechar menu ao clicar em um estilo
const styleItems = document.querySelectorAll(".menu-item[data-style]");
styleItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    closeMenu();
  });
});

// Fechar menu ao clicar fora
document.addEventListener("click", (e) => {
  if (hamburgerBtn && sidebar) {
    const isSidebarClick = sidebar.contains(e.target);
    const isHamburgerClick = hamburgerBtn.contains(e.target);
    
    if (!isSidebarClick && !isHamburgerClick && sidebar.classList.contains("active")) {
      closeMenu();
    }
  }
});

// Clicar nas fotos para ampliar e navegar
const modalImg = document.getElementById("modal-img");
const modalImgSrc = document.getElementById("modal-img-src");
const prevBtn = document.getElementById("prev-img");
const nextBtn = document.getElementById("next-img");
let currentImageElement = null;
let currentCategory = null;

function openImage(imgElement) {
  const section = imgElement.closest(".style-section");
  currentCategory = section ? section.getAttribute("data-style") : null;
  currentImageElement = imgElement;
  modalImgSrc.src = imgElement.src;
  modalImg.style.display = "flex";
}

function navigateImages(direction) {
  if (!currentImageElement || !currentCategory) return;
  
  const categorySection = document.querySelector(`.style-section[data-style="${currentCategory}"]`);
  if (!categorySection) return;
  
  const images = Array.from(categorySection.querySelectorAll(".gallery-item img"));
  const currentIndex = images.indexOf(currentImageElement);
  
  let nextIndex;
  if (direction === "next") {
    nextIndex = (currentIndex + 1) % images.length;
  } else {
    nextIndex = (currentIndex - 1 + images.length) % images.length;
  }
  
  openImage(images[nextIndex]);
}

document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", () => openImage(img));
});

prevBtn.addEventListener("click", (e) => { e.stopPropagation(); navigateImages("prev"); });
nextBtn.addEventListener("click", (e) => { e.stopPropagation(); navigateImages("next"); });

modalImg.addEventListener("click", (e) => { 
  if (e.target === modalImg) modalImg.style.display = "none";
});

document.addEventListener("keydown", (e) => { 
  if (e.key === "Escape" && modalImg.style.display === "flex") modalImg.style.display = "none";
  if (e.key === "ArrowRight" && modalImg.style.display === "flex") navigateImages("next");
  if (e.key === "ArrowLeft" && modalImg.style.display === "flex") navigateImages("prev");
});

} // Fim da função initializeApp
