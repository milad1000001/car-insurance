import { Descriptions, Skeleton, Typography } from "antd";
import type { InquiryResponse } from "@core/api/inquiry";
import { formatInsurancePrice, formatPersianDate } from "@core/domain/format";
import { useEffect, useState } from "react";

const { Paragraph } = Typography;

type InquiryPreviewProps = {
  submitted: boolean;
  isLoading: boolean;
  isError: boolean;
  data?: InquiryResponse;
};

export function InquiryPreview({
  submitted,
  isLoading,
  isError,
  data,
}: InquiryPreviewProps) {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedPrice, setFormattedPrice] = useState("");

  useEffect(() => {
    if (!data?.make_date) {
      setFormattedDate("");
      setFormattedPrice("");
      return;
    }
    setFormattedDate(formatPersianDate(data.make_date));
    setFormattedPrice(formatInsurancePrice(data.make_date));
  }, [data?.make_date]);

  if (!submitted) {
    return (
      <Paragraph type="secondary" style={{ marginBottom: 0 }}>
        پس از ثبت شماره پلاک، اطلاعات خودرو و قیمت بیمه در این بخش نمایش داده می‌شود.
      </Paragraph>
    );
  }

  if (isLoading) {
    return (
      <Paragraph type="secondary" style={{ marginBottom: 0 }}>
        <Skeleton active paragraph={{ rows: 5 }} />
      </Paragraph>
    );
  }

  if (isError) {
    return (
      <Paragraph type="secondary" style={{ marginBottom: 0 }}>
        خودرویی با این پلاک یافت نشد.
      </Paragraph>
    );
  }

  if (!data) return null;

  return (
    <Descriptions size="small" column={1} labelStyle={{ color: "#64748b" }}>
      <Descriptions.Item label="پلاک">{data.plate}</Descriptions.Item>
      <Descriptions.Item label="برند">{data.brand}</Descriptions.Item>
      <Descriptions.Item label="مدل">{data.model}</Descriptions.Item>
      <Descriptions.Item label="تاریخ ساخت">
        {formattedDate || "-"}
      </Descriptions.Item>
      <Descriptions.Item label="قیمت بیمه سالانه">
        {formattedPrice || "-"}
      </Descriptions.Item>
      <Descriptions.Item label="نام مالک">{data.owner.full_name}</Descriptions.Item>
      <Descriptions.Item label="کد ملی">{data.owner.national_id}</Descriptions.Item>
    </Descriptions>
  );
}
