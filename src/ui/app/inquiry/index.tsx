import { Button, Card, Form, Input, Space, Typography } from "antd";
const { Title, Paragraph } = Typography

export function Inquiry() {
  return (
    <main style={{ minHeight: "100vh", padding: "40px 16px" }}>
      <div style={{ margin: "0 auto", maxWidth: 720, width: "100%" }}>
        <Space vertical size={24} style={{ width: "100%" }}>
          <header>
            <Title level={2} style={{ marginBottom: 8 }}>
              استعلام بیمه خودرو
            </Title>
            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              شماره پلاک را وارد کنید تا اطلاعات خودرو و مالک نمایش داده شود.
            </Paragraph>
          </header>

          <section>
            <Card>
              <Form layout="vertical">
                <Form.Item
                  label="شماره پلاک"
                  name="plate"
                  extra="ارقام فارسی و انگلیسی پشتیبانی می‌شود."
                >
                  <Input placeholder="۱۲الف۳۴۵-۶۷" />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  دریافت قیمت بیمه
                </Button>
              </Form>
            </Card>
          </section>

          <section>
            <Card>
              <Title level={5} style={{ marginTop: 0 }}>
                نتیجه (نمونه)
              </Title>
              <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                پس از ثبت شماره پلاک، اطلاعات خودرو و قیمت بیمه در این بخش نمایش
                داده می‌شود.
              </Paragraph>
            </Card>
          </section>
        </Space>
      </div>
    </main>
  );
}
