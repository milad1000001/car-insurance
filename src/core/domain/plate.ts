const DIGIT_MAP: Record<string, string> = {
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
};

export function toEnglishDigits(value: string): string {
  return value.replace(/[۰-۹٠-٩]/g, (char) => DIGIT_MAP[char] ?? char);
}

export function normalizePlate(raw: string): string {
  const trimmed = toEnglishDigits(raw).trim();
  const compact = trimmed.replace(/[\s-]/g, "");
  const match = /^(\d{2})([a-zA-Z\u0600-\u06FF])(\d{3})(\d{2})$/.exec(compact);
  return match ? `${match[1]}${match[2]}${match[3]}-${match[4]}` : trimmed;
}

export function maskPlate(raw: string): string {
  const cleaned = toEnglishDigits(raw).replace(/[^0-9a-zA-Z\u0600-\u06FF]/g, "");
  const parts = [
    cleaned.slice(0, 2),
    cleaned.slice(2, 3),
    cleaned.slice(3, 6),
    cleaned.slice(6, 8),
  ];
  if (!parts[0]) return "";
  if (!parts[1]) return parts[0];
  if (!parts[2]) return parts[0] + parts[1];
  if (!parts[3]) return parts[0] + parts[1] + parts[2];
  return `${parts[0]}${parts[1]}${parts[2]}-${parts[3]}`;
}
