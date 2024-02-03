function MenuButton({
  isOpen,
  toggle,
  className,
}: {
  isOpen: boolean;
  toggle: any;
  className?: string;
}) {
  return (
    <button
      className={`no-tap-color flex items-center justify-between relative flex-col w-8 h-6 lg:hidden ${
        isOpen ? "" : ""
      } ${className}`}
      onClick={toggle}
    >
      <span
        className={`h-[2px] bg-white rounded-[10px] transitions ${
          isOpen
            ? "rotate-45 translate-y-[5px] xxs:translate-y-[8px] w-[110%]"
            : "w-full"
        }`}
      ></span>
      <span
        className={`h-[2px] bg-white rounded-[10px] w-full transitions ${
          isOpen ? "w-[0] opacity-0" : ""
        }`}
      ></span>
      <span
        className={`h-[2px] bg-white rounded-[10px] transitions ${
          isOpen ? "rotate-[-45deg] translate-y-[-10px] w-[110%]" : "w-full"
        }`}
      ></span>
    </button>
  );
}

export default MenuButton;
