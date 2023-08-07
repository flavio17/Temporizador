import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const sound = Sound();

let minutes = Number(minutesDisplay.textContent);

const controls = Controls({ buttonPause, buttonPlay, buttonSet, buttonStop });

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  minutes,
});

Events({ controls, timer, sound });
