import { calculateInsurancePrice } from "./insurance";

export function formatPersianDate(value?: string): string {
  if (!value) return "";
  return new Intl.DateTimeFormat("fa-IR", { dateStyle: "medium" }).format(
    new Date(value)
  );
}

export function formatInsurancePrice(value?: string): string {
  if (!value) return "";
  const price = calculateInsurancePrice(value);
  return `${new Intl.NumberFormat("fa-IR").format(price)} ریال`;
}
