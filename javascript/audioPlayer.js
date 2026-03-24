const players = document.querySelectorAll(".audio-Player");

players.forEach(player => {
  const audio = player.querySelector("audio");
  const btn = player.querySelector(".playPause");

  btn.addEventListener("click", () => {
    // pause all others
    document.querySelectorAll("audio").forEach(a => {
      if (a !== audio) a.pause();
    });

    document.querySelectorAll(".playPause").forEach(b => {
      if (b !== btn) b.classList.remove("playing");
    });

    audio.currentTime = 0;

    // toggle current
    if (audio.paused) {
      audio.play();
      btn.classList.add("playing");
    } else {
      audio.pause();
      btn.classList.remove("playing");
    }

    // return to normal state if audio ends
    audio.addEventListener("ended", () => {
        console.log("Audio has finished!");
        btn.classList.remove("playing");
    });
  });
});