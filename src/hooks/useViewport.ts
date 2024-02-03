import React, { useEffect, useState } from "react";

interface IViewport {
  height: number | undefined;
  width: number | undefined;
}
export default function useViewport() {
  const [viewport, setViewport] = useState<IViewport>({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return viewport;
}
