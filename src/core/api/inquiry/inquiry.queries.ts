import { queryOptions } from "@tanstack/react-query";
import { inquiryCarByPlate, type InquiryResponse } from '../inquiry'

export const getInquiryQuary = (plate: string) =>
  queryOptions({
    queryKey: [],
    queryFn: async (): Promise<InquiryResponse> => {
      const res = await inquiryCarByPlate({ plate });
      return res.data;
    }
  }
  )