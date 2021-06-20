const lightsaber = document.querySelector(".lightsaber");
const sounds = {
  on: new Audio("./on.mp3"),
  off: new Audio("./off.mp3")
};

sounds.off.volume = 0.25;
sounds.on.volume = 0.25;

document.body.addEventListener("click", () => {
  const isOpen = lightsaber.classList.contains("open");

  if (!isOpen) {
    lightsaber.querySelector(".laser").classList.add("vibration");
    lightsaber.classList.add("open");
    sounds.on.currentTime = 0;
    sounds.on.play();
  } else {
    setTimeout(() => lightsaber.querySelector(".laser").classList.remove("vibration"), 1500);
    lightsaber.classList.remove("open");
    sounds.off.currentTime = 0;
    sounds.off.play();
  }
});
