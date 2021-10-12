import { useEffect, useRef } from "react";

const useHover = (onHover) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (typeof onHover !== "function") {
      return;
    }
    if (element) {
      element.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", onHover);
      }
    };
  }, [onHover]);

  return ref;
};

export default useHover;