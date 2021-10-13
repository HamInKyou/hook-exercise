import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }
    if (element) {
      element.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      element.style.opacity = 1;
    }
  }, [duration, delay]);
  return { ref, style: { opacity: 0 } };
};

export default useFadeIn;
