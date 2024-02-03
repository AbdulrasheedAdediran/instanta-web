export default function cleanNumber(number: string) {
  return number.replace(/[^0-9]/g, "");
}
