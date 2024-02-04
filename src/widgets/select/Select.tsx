import React from "react";
import { PiCaretDownBold } from "react-icons/pi";

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  applyBaseClassName?: boolean;
  showDropdownIcon?: boolean;
  leftIcon?: React.ReactNode;
}

export default function Select({
  className,
  children,
  leftIcon,
  applyBaseClassName = true,
  showDropdownIcon = true,
  ...rest
}: ISelect) {
  const baseClassName = applyBaseClassName
    ? `transitions w-full bg-white focus:bg-white active:bg-white py-2 placeholder:text-chineseSilver text-grey placeholder:text-sm xs:placeholder:text-base outline-none text-white rounded-md border-[.5px] border-solid border-chineseSilver hover:border-chineseSilver active:border-chineseSilver border-chineseSilver  appearance-none ${
        leftIcon ? "pl-10 pr-2" : "px-2"
      }`
    : "";
  return (
    <div className="relative">
      {leftIcon && (
        <span
          className={`text-[1.25rem] absolute top-[50%] translate-y-[-50%] left-2 z-[1]`}
        >
          {leftIcon}
        </span>
      )}
      <select {...rest} className={`${baseClassName} ${className}`}>
        {children}
      </select>
      {showDropdownIcon && (
        <PiCaretDownBold
          className={` absolute top-[50%] translate-y-[-50%] right-2 z-[1]`}
        />
      )}
    </div>
  );
}
