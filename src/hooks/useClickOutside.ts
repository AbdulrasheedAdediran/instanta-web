import React, { useEffect, useRef } from "react";

export default function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void,
) {
  const savedHandler = useRef<() => void>(onClickOutside);

  useEffect(() => {
    savedHandler.current = onClickOutside;
  }, [onClickOutside]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent | PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        savedHandler.current();
      }
    };

    const handleEvent = (e: MouseEvent | TouchEvent | PointerEvent) => {
      handleClickOutside(e);
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);
    document.addEventListener("pointerdown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
      document.removeEventListener("pointerdown", handleEvent);
      savedHandler.current = () => {};
    };
  }, [ref]);
}
