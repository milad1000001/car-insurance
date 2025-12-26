import { Card, Flex, Form, Space, Typography, type InputRef } from "antd";
import { Car, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { maskPlate, normalizePlate } from "../../../core/domain/plate";
import { PlateForm } from "../components/PlateForm";
const { Title, Paragraph } = Typography;

export function Inquiry() {
  const [form] = Form.useForm();
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus({ cursor: "start" });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue("plate", maskPlate(event.target.value));
  };

  const handleSubmit = (values: { plate?: string }) => {
    const normalized = normalizePlate(values.plate ?? "");
    form.setFieldsValue({ plate: normalized });
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
                onSubmit={handleSubmit}
                onChange={handleChange}
                inputRef={inputRef}
              />
            </Card>
          </section>

          <section>
            <Card>
              <Title level={5} style={{ marginTop: 0 }}>
                <Space size={8} align="center">
                  <ShieldCheck size={18} />
                  نتیجه (نمونه)
                </Space>
              </Title>
              <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                پس از ثبت شماره پلاک، اطلاعات خودرو و قیمت بیمه در این بخش نمایش
                داده می‌شود.
              </Paragraph>
            </Card>
          </section>
        </Flex>
      </div>
    </main>
  );
}
