const isValidPhoneNumber = (number: string) => {
  var re = /^[+\-]?\d*$/;
  return re.test(number);
};
export default isValidPhoneNumber;
