import { notify } from "@/utils/notify";
import { AllowedFileTypes } from "@/utils/types";
import React, { useEffect, useRef, useState } from "react";

interface FileData {
  file: File | null;
  path: string;
}
// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
// const MAX_NUMBER_OF_IMAGES = 5;
export default function useFileUpload(
  allowedFileType = AllowedFileTypes.PDF_AND_IMAGES,
  MAX_FILE_SIZE = 5,
  MAX_NUMBER_OF_FILES = 5,
): any {
  const [file, setFile] = useState<FileData>({ file: null, path: "" });
  const [images, setImages] = useState<FileData[]>([]);
  const MAX_SIZE = MAX_FILE_SIZE * 1024 * 1024; //5mb
  let fileRef = useRef<HTMLInputElement | null>(null);
  let allowedTypes: string[] = [];

  switch (allowedFileType) {
    case AllowedFileTypes.PDF_ONLY:
      allowedTypes = ["application/pdf"];
      break;
    case AllowedFileTypes.IMAGES_ONLY:
      allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
      break;
    case AllowedFileTypes.PDF_AND_IMAGES:
      allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/avif",
        "application/pdf",
      ];
      break;
    default:
      allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
  }
  const handleMultipleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = e.target.files || [];
    const file: File | null = e.target.files?.[0] ?? null;
    if (!file) return;

    const isValidType = allowedTypes.includes(file.type);
    if (!isValidType) {
      if (allowedFileType === AllowedFileTypes.IMAGES_ONLY) {
        notify("Invalid file type. Only Images are allowed.", "error");
        return;
      }
      if (allowedFileType === AllowedFileTypes.PDF_ONLY) {
        notify("Invalid file type. Only PDF files are allowed.", "error");
        return;
      }
      notify(
        "Invalid file type. Only JPEG, PNG, WEBP and PDF files are allowed.",
        "error",
      );
      return;
    }
    if (file.size > MAX_SIZE) {
      notify(
        `File size exceeds the maximum allowed limit (${MAX_FILE_SIZE}MB).`,
        "error",
      );
      return;
    }
    if (images.length + files.length > MAX_NUMBER_OF_FILES) {
      notify(`You can upload a maximum of ${MAX_NUMBER_OF_FILES}.`, "error");
      return;
    }
    const selectedImages = Array.from(files);

    const newImages = selectedImages?.map((file) => ({
      file,
      path: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files?.[0] ?? null;
    if (!file) return;

    const isValidType = allowedTypes.includes(file.type);
    if (!isValidType) {
      if (allowedFileType === AllowedFileTypes.IMAGES_ONLY) {
        notify("Invalid file type. Only Images are allowed.", "error");
        return;
      }
      if (allowedFileType === AllowedFileTypes.PDF_ONLY) {
        notify("Invalid file type. Only PDF files are allowed.", "error");
        return;
      }
      notify(
        "Invalid file type. Only JPEG, PNG, WEBP and PDF files are allowed.",
        "error",
      );
      return;
    }
    if (file.size > MAX_SIZE) {
      notify("File size exceeds the maximum allowed limit (5MB).", "error");
      return;
    }
    setFile((prevFile) => ({
      ...prevFile,
      file,
      path: URL.createObjectURL(file),
    }));
  };

  const clearImage = () => {
    setFile({ file: null, path: "" });
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const clearImages = () => {
    images.forEach((image) => {
      URL.revokeObjectURL(image.path);
    });
    setImages([]);
  };

  const handleSingleImageRemoval = (indexToRemove: number) => {
    const imageToRemove = images[indexToRemove];
    URL.revokeObjectURL(imageToRemove.path);

    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    setImages(updatedImages);
  };

  useEffect(() => {
    if (file.file) {
      return () => {
        URL.revokeObjectURL(file.path as string);
      };
    }
  }, [file.file, file.path]);

  useEffect(() => {
    const objectURLsToRevoke = images?.map((image) => image.path);
    return () => {
      objectURLsToRevoke.forEach((objectURL) => {
        URL.revokeObjectURL(objectURL);
      });
    };
  }, [images]);

  return {
    file,
    fileRef,
    clearImage,
    handleFileUpload,
    images,
    clearImages,
    handleSingleImageRemoval,
    handleMultipleImageUpload,
  };
}
