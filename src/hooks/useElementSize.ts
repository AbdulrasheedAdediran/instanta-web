import { useEffect, useState, RefObject } from "react";

interface ElementSize {
  width: number;
  height: number;
}

function useElementSize(elementRef: RefObject<HTMLElement>): ElementSize {
  const [elementSize, setElementSize] = useState<ElementSize>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const getElementSize = () => {
      if (elementRef.current) {
        const { width, height } = elementRef.current.getBoundingClientRect();
        setElementSize({ width, height });
      }
    };

    window.addEventListener("resize", getElementSize);
    getElementSize();

    return () => {
      window.removeEventListener("resize", getElementSize);
    };
  }, [elementRef]);

  return elementSize;
}

export default useElementSize;
