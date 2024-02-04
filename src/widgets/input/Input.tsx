import React from "react";
import {Button} from "@/widgets";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
  applyBaseClassName?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  ref?: React.MutableRefObject<any>;
}
export default function Input({
  name,
  className,
  containerClassName,
  onClick,
  applyBaseClassName = true,
  rightIcon,
  leftIcon,
  ref,
  ...rest
}: IInput) {
  const baseClassName = applyBaseClassName
    ? `transitions w-full bg-white focus:bg-white active:bg-white active:border-chineseSilver focus:border-chineseSilver p-2 placeholder:text-chineseSilver placeholder:text-sm xs:placeholder:text-base text-white outline-none ${
        rightIcon && "  mr-10"
      } ${leftIcon && " ml-10"}`
    : "";

  const baseIconClassName = `h-full transitions absolute top-0 bottom-0 w-10 grid place-items-center bg-white ${
    rightIcon && "right-0 "
  } ${leftIcon && "left-0 "}`;

  const baseContainerClassName =
    "transitions relative flex items-center justify-between w-full border-[.5px] border-solid group focus-within:border-chineseSilver active:border-chineseSilver border-chineseSilver rounded-md hover:border-chineseSilver";

  if (rightIcon) {
    return (
      <div className={`${baseContainerClassName} ${containerClassName}`}>
        <input
          {...rest}
          name={name}
          className={`${baseClassName} ${className}`}
        />
        {onClick ? (
          <Button
            applyBaseClassName={false}
            className={`${baseIconClassName}`}
            onClick={onClick}
          >
            {rightIcon}
          </Button>
        ) : (
          <span className={`${baseIconClassName} `} onClick={onClick}>
            {rightIcon}
          </span>
        )}
      </div>
    );
  }

  if (leftIcon) {
    return (
      <div className={`${baseContainerClassName} ${containerClassName}`}>
        {onClick ? (
          <Button
            applyBaseClassName={false}
            className={`${baseIconClassName}`}
            onClick={onClick}
          >
            {leftIcon}
          </Button>
        ) : (
          <span className={`${baseIconClassName} `} onClick={onClick}>
            {leftIcon}
          </span>
        )}
        <input
          {...rest}
          name={name}
          className={`${baseClassName} ${className}`}
        />
      </div>
    );
  }

  return (
    <input
      {...rest}
      name={name}
      className={`${baseClassName} border-[.5px] border-solid border-chineseSilver hover:border-chineseSilver focus:border-chineseSilver active:border-chineseSilver rounded-md ${className}`}
    />
  );
}
