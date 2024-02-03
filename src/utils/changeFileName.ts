export const changeFileName = (file: File, newFileName: string): File => {
  const fileNameParts = file.name.split(".");
  const fileExtension = fileNameParts.pop();
  const formattedNewFileName = newFileName;
  const modifiedFileName = `${formattedNewFileName}.${fileExtension}`;

  return new File([file], modifiedFileName, { type: file.type });
};
