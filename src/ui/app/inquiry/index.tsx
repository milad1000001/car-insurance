import { Button, Card, Flex, Form, Input, Space, Typography, type InputRef } from "antd";
import { Car, Search, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { maskPlate, normalizePlate } from "../../../core/domain/plate";
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
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                  label="شماره پلاک"
                  name="plate"
                  extra="ارقام فارسی و انگلیسی پشتیبانی می‌شود."
                >
                  <Input.Search
                    placeholder="۱۲الف۳۴۵-۶۷"
                    size="large"
                    onChange={handleChange}
                    ref={inputRef}
                  />
                </Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                  <Search size={18} />
                  دریافت قیمت بیمه
                </Button>
              </Form>
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
