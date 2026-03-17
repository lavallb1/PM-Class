document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.href;
  
      e.preventDefault();
  
      document.querySelector("header nav").classList.add("page-exit");
      document.querySelector("main").classList.add("page-exit");
  
      setTimeout(() => {
        window.location = href;
      }, 400);
    });
});