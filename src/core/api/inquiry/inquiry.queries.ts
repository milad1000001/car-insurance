import { useQuery } from "@tanstack/react-query";
import { inquiryCarByPlate } from '../inquiry'

export const useInquiryQuery = (plate: string, enabled = false) =>
  useQuery({
    queryKey: ["inquiry", plate],
    queryFn: () => inquiryCarByPlate({ plate }).then((res) => res.data),
    enabled: enabled && plate.length > 0,
  });
