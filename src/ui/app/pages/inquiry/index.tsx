import { Card, Flex, Form, Space, Typography, type InputRef } from "antd";
import { Car } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { maskPlate, normalizePlate } from "@core/domain/plate";
import { useInquiryQuery } from "@core/api/inquiry/inquiry.queries";
import { PlateForm } from "@ui/app/components/PlateForm";
import { InquiryPreview } from "@ui/app/components/InquiryPreview";
import { HistoryList } from "@ui/app/components/HistoryList";
import { calculateInsurancePrice } from "@core/domain/insurance";
import { loadHistory, saveHistory, type InquiryHistoryRecord } from "@core/domain/history";
import type { InquiryResponse } from "@core/api/inquiry";
const { Title, Paragraph } = Typography;

const createHistoryRecord = (data: InquiryResponse): InquiryHistoryRecord => ({
  plate: data.plate,
  ownerName: data.owner.full_name,
  price: calculateInsurancePrice(data.make_date),
});

export function Inquiry() {
  const [form] = Form.useForm();
  const inputRef = useRef<InputRef>(null);
  const [plate, setPlate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { data, isLoading, isError } = useInquiryQuery(plate, submitted);
  const [history, setHistory] = useState<InquiryHistoryRecord[]>(() => loadHistory());
  const lastSavedPlate = useRef<string | null>(null);

  useEffect(() => {
    saveHistory(history);
  }, [history]);

  useEffect(() => {
    const isNotSubmitted = !submitted;
    const hasNoData = !data;
    const isDuplicate = lastSavedPlate.current === data?.plate;

    if (isNotSubmitted || hasNoData || isDuplicate) return;
    setHistory((prev) => [createHistoryRecord(data), ...prev]);
    lastSavedPlate.current = data.plate;
  }, [data, submitted]);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus({ cursor: "start" });
  }, []);

  const onPlateFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue("plate", maskPlate(event.target.value));
  };

  const onPlateFormSubmit = (values: { plate?: string }) => {
    const normalized = normalizePlate(values.plate ?? "");
    form.setFieldsValue({ plate: normalized });
    setPlate(normalized);
    setSubmitted(true);
    form.setFieldsValue({ plate: "" });
  };

  const onRemoveHistory = (id: Id) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main style={{ minHeight: "100vh", padding: "40px 16px" }}>
      <div style={{ margin: "0 auto", maxWidth: 720, width: "100%" }}>
        <Flex vertical gap={12} style={{ width: "100%" }}>
          <header>
            <Title level={2} style={{ marginBottom: 8 }}>
              <Flex gap={12} align="center">
                <Car size={32} />
                استعلام بیمه خودرو
              </Flex>
            </Title>
            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              شماره پلاک را وارد کنید تا اطلاعات خودرو و مالک نمایش داده شود.
            </Paragraph>
          </header>

          <section>
            <Card>
              <PlateForm
                form={form}
                onSubmit={onPlateFormSubmit}
                onChange={onPlateFormChange}
                inputRef={inputRef}
              />
            </Card>
          </section>

          <section>
            <Card>
              <InquiryPreview
                submitted={submitted}
                isLoading={isLoading}
                isError={isError}
                data={data}
              />
            </Card>
          </section>

          <section>
            <Card title="سوابق استعلام">
              <HistoryList
                items={history}
                onRemove={onRemoveHistory}
              />
            </Card>
          </section>
        </Flex>
      </div>
    </main>
  );
}
