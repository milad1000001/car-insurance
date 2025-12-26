const BASE_PRICE = 1_000_000;
const YEARLY_RATE = 0.12;

export function calculateInsurancePrice(makeDate: string | Date): number {
  const manufacturedAt = new Date(makeDate);
  const now = new Date();
  const age = Math.max(0, now.getFullYear() - manufacturedAt.getFullYear());
  const factor = (1 + YEARLY_RATE) ** age;
  return Math.round(BASE_PRICE * factor);
}
