document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.href;
  
      e.preventDefault();
  
      document.querySelector("header").classList.add("headerExit");
      document.querySelector("main").classList.add("mainExit");
      document.querySelector("footer").classList.add("footerExit");
  
      setTimeout(() => {
        window.location = href;
      }, 400);
    });
});

// theme selection
const theme_buttons = document.querySelectorAll(".button-theme");

const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

const themeImages = {
  light: {
    active: basePath + "images/icons/brightness.png",
    inactive: basePath + "images/icons/brightness-2.png"
  },
  dark: {
    active: basePath + "images/icons/moon-stars.png",
    inactive: basePath + "images/icons/moon-stars-2.png"
  },
  autumn: {
    active: basePath + "images/icons/leaf-maple-2.png",
    inactive: basePath + "images/icons/leaf-maple.png"
  }
};

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  localStorage.setItem("theme", theme);

  theme_buttons.forEach(btn => {
    const btnTheme = btn.dataset.theme;
    const btnImg = btn.querySelector("img");

    console.log(btnTheme, theme);
    if (btnTheme === theme) {
      btnImg.src = themeImages[btnTheme].active;
    } else {
      btnImg.src = themeImages[btnTheme].inactive;
    }
  });
}

// load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
}

// setting themes

theme_buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;
    setTheme(theme);
  });
});