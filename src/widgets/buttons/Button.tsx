import { ButtonVariants, IButton, Sizes } from "@/utils/types";
import { Link } from "react-router-dom";

export default function Button({
  children,
  className,
  variant,
  size,
  isLoading,
  disabled = isLoading,
  applyBaseClassName = true,
  isActive,
  ref,
  href,
  type = "button",
  ...rest
}: IButton) {
  const baseClassName = applyBaseClassName
    ? `rounded-md capitalize transition-all duration-300 ease-in-out  ${
        disabled ? "cursor-not-allowed" : ""
      }`
    : "";

  let variantClassName = "";
  switch (variant) {
    case ButtonVariants.FILLED_BLUE:
      variantClassName = `border-[.5px] border-pictonBlue bg-pictonBlue ${
        isActive ? "hover:bg-pictonBlue" : "hover:bg-pictonBlue/[0.75]"
      } text-white`;
      break;
    case ButtonVariants.FILLED_WHITE:
      variantClassName = `border-[.5px] border-white bg-white ${
        isActive ? "hover:bg-white" : "hover:bg-white/[0.75]"
      } text-black`;
      break;
    case ButtonVariants.FILLED_RED:
      variantClassName = `border-[.5px] border-red bg-red ${
        isActive ? "hover:bg-red/80" : "hover:bg-red/[0.75]"
      } text-white`;
      break;
    case ButtonVariants.TEXT:
      variantClassName = " hover:text-white";
      break;
    case ButtonVariants.TEXT_BLUE:
      variantClassName = "text-pictonBlue hover:text-pictonBlue/[0.75]";
      break;
    case ButtonVariants.OUTLINE_WHITE:
      variantClassName = `border-[.5px] ${
        disabled
          ? "border-grey text-white"
          : "text-white border-white hover:border-white"
      }`;
      break;
    case ButtonVariants.OUTLINE_BLUE:
      variantClassName = `border-[.5px] ${
        disabled
          ? "border-pictonBlue text-pictonBlue"
          : "text-pictonBlue border-pictonBlue hover:border-pictonBlue/[0.75] hover:text-pictonBlue/[0.75]"
      }`;
      break;
    case ButtonVariants.UNDERLINE_BLUE:
      variantClassName = `py-2 relative before:bg-pictonBlue before:h-[2px] before:absolute before:inline-block before:bottom-0 before:left-0 before:right-0 before:transition-all before:duration-300 before:ease-in-out before:mx-auto hover:text-pictonBlue before:rounded-full p-2 ${
        isActive ? "text-pictonBlue before:w-full" : "before:w-0 "
      }`;
      break;
    case ButtonVariants.UNDERLINE_WHITE:
      variantClassName = `py-2 relative before:bg-white before:h-[2px] before:absolute before:inline-block before:bottom-0 before:left-0 before:right-0 before:transitions before:mx-auto hover:before:w-full before:rounded-full p-2 ${
        isActive ? "text-white before:w-full" : "before:w-0 "
      }`;
      break;
    default:
      break;
  }

  let sizeClassName = "";
  switch (size) {
    // subtract 1px (border width) for Outline buttons to prevent them from growing bigger than their desired sizes and convert the value to rem eg 3px to rem = 3/16 = 0.1875
    case Sizes.XS:
      sizeClassName =
        variant === ButtonVariants.OUTLINE_WHITE ||
        variant === ButtonVariants.OUTLINE_BLUE
          ? "p-[0.1875rem]"
          : "p-1";
      break;
    case Sizes.SM:
      sizeClassName =
        variant === ButtonVariants.OUTLINE_WHITE ||
        variant === ButtonVariants.OUTLINE_BLUE
          ? "px-[0.4375rem] py-[0.1875rem]"
          : "p-2";
      break;
    case Sizes.MD:
      sizeClassName =
        variant === ButtonVariants.OUTLINE_WHITE ||
        variant === ButtonVariants.OUTLINE_BLUE
          ? "px-[0.9375rem] py-[0.4375rem]"
          : "px-4 py-2";
      break;
    case Sizes.LG:
      sizeClassName =
        variant === ButtonVariants.OUTLINE_WHITE ||
        variant === ButtonVariants.OUTLINE_BLUE
          ? "px-[1.4375rem] py-[0.4375rem]"
          : "px-6 py-2";
      break;
    default:
      break;
  }

  const customClassName = `${baseClassName} ${variantClassName} ${sizeClassName} `;

  return href ? (
    <Link to={href}>
      <button
        {...rest}
        ref={ref}
        type={type}
        className={`${customClassName} ${className}`}
        disabled={disabled}
      >
        {isLoading ? (
          <div className="text-white flex items-center justify-center gap-x-1">
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </button>
    </Link>
  ) : (
    <button
      {...rest}
      ref={ref}
      type={type}
      className={`${customClassName} ${className}`}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <div className="text-white flex items-center justify-center gap-x-1">
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
