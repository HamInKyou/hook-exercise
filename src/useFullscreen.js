import { useRef } from "react";

const useFullscreen = (callback) => {
  const ref = useRef();
  const element = ref.current;
  const runCallback = (isFull) => {
    if (typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      runCallback(true);
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCallback(false);
  };
  return { ref, triggerFull, exitFull };
};

export default useFullscreen;
