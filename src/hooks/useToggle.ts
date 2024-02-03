import { useState } from "react";

export default function useToggle(open = false) {
  const [isOpen, setIsOpen] = useState(open);

  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };

  return { isOpen, toggle, onClose, onOpen };
}
