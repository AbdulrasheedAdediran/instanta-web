import { Label } from "@/components/index";
import {
  AllowedFileTypes,
  ButtonVariants,
  IButton,
  IFileUpload,
  Sizes,
} from "@/utils/types";
import React, { forwardRef } from "react";
import { MdCloudUpload } from "react-icons/md";
import Button from "./Button";
interface IUploadFileButtonProps {
  buttonProps?: IButton;
  inputProps?: IFileUpload;
}

const UploadFileButton = forwardRef(
  (
    { buttonProps, inputProps }: IUploadFileButtonProps,
    ref: React.LegacyRef<HTMLInputElement> | null,
  ) => {
    const {
      variant = ButtonVariants.FILLED_WHITE,
      size = Sizes.LG,
      className,
    } = buttonProps || {};
    const {
      allowedFileType = AllowedFileTypes.IMAGES_ONLY,
      label,
      name,
      handleFileUpload,
    } = inputProps || {};
    let allowedTypes = "";

    switch (allowedFileType) {
      case AllowedFileTypes.PDF_ONLY:
        allowedTypes = ".pdf";
        break;
      case AllowedFileTypes.IMAGES_ONLY:
        allowedTypes = "image/*";
        break;
      case AllowedFileTypes.PDF_AND_IMAGES:
        allowedTypes = `image/*,.pdf`;
        break;
      default:
        allowedTypes = "image/*";
    }

    return (
      <Button
        {...buttonProps}
        size={size}
        variant={variant}
        className={`relative inline-flex items-center justify-center gap-x-2 ${className}`}
      >
        <MdCloudUpload className="text-[1rem] " />
        <span>{label}</span>
        <input
          {...inputProps}
          ref={ref}
          onChange={handleFileUpload}
          type="file"
          accept={allowedTypes}
          name={name}
          id={name}
          className="check opacity-0 absolute inset-0 z-[1] w-0 h-0 check"
        />
      </Button>
    );
  },
);

export default UploadFileButton;
