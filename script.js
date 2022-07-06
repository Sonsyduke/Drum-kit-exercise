function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return; // Stop function from running all together
  } else {
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add("playing");
  }
}

window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return; // skip it if it's not a transform
  } else {
    this.classList.remove("playing");
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
