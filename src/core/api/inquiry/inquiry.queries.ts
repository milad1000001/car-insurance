import { useQuery } from "@tanstack/react-query";
import { inquiryCarByPlate, type InquiryResponse } from '../inquiry'

export const useInquiryQuery = (plate: string, enabled = false) =>
  useQuery<InquiryResponse>({
    queryKey: ["inquiry", plate],
    queryFn: () => inquiryCarByPlate({ plate }).then((res) => res.data),
    enabled: enabled && plate.length > 0,
  });
