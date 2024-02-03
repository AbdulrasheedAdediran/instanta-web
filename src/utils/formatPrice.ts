export function formatPrice(price: number | undefined | null): string {
  if (!price) return "";
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
