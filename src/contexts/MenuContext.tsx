import { useToggle, useViewport } from "@/hooks";
import React, { createContext, useEffect } from "react";

export interface IMenuContextProps {
  isOpen: boolean;
  toggle: () => void;
  onClose: () => void;
}

export const MenuContext = createContext<IMenuContextProps>({
  isOpen: false,
  toggle: () => {},
  onClose: () => {},
});

function MenuContextProvider({ children }: { children: React.ReactNode }) {
  const { isOpen, onClose, toggle } = useToggle();
  const { width } = useViewport();

  const navRef = React.useRef<HTMLElement | null>(null);
  let lastScrollTop: number = 0;
  const windowIsLoaded = typeof window !== "undefined" && window.document;
  useEffect(() => {
    if (windowIsLoaded) {
      let isSmallScreen = width && width < 1024;

      if (isOpen && isSmallScreen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "unset";
      }
    }
  }, [isOpen, width]);

  useEffect(() => {
    const scrollListener = () => {
      if (windowIsLoaded && navRef.current) {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          navRef.current.style.top = "-30%";
        } else {
          navRef.current.style.top = "0";
        }
        lastScrollTop = scrollTop;
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [lastScrollTop]);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggle,
        onClose,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContextProvider;
