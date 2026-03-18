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