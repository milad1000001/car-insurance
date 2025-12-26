export type InquiryHistoryRecord = {
  plate: string;
  ownerName: string;
  price: number;
};

const STORAGE_KEY = "inquiry_history";

export function loadHistory(): InquiryHistoryRecord[] {
  const history = window.localStorage.getItem(STORAGE_KEY);
  if (!history) return [];
  return JSON.parse(history)
}

export function saveHistory(records: InquiryHistoryRecord[]): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}
