import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
} from "./elements.js";
export default function Events({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countDown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonSoundOff.addEventListener("click", () => {
    buttonSoundOff.classList.add("hide");
    buttonSoundOn.classList.remove("hide");
    sound.bgAudio.play();
  });

  buttonSoundOn.addEventListener("click", () => {
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
    sound.bgAudio.pause();
  });

  buttonSet.addEventListener("click", () => {
    let minutes;
    let newMinutes = controls.getMinutes();
    if (!newMinutes) {
      timer.reset();
      return;
    }
    minutes = newMinutes;
    timer.updateDisplay(minutes, 0);
    timer.updateMinutes(minutes);
  });
}
