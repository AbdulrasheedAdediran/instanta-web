import React, { useEffect } from "react";

export default function useFreezeBackground(isOpen: boolean) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      if (isOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "unset";
      }
    }
  }, [isOpen]);
}
