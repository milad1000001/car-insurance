import { Button, Form, Input, type FormInstance, type InputRef } from "antd";
import { Search } from "lucide-react";
import type { ChangeEvent, RefObject } from "react";

type PlateFormProps = {
  form: FormInstance;
  onSubmit: (values: { plate?: string }) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<InputRef | null>;
};

export function PlateForm({ form, onSubmit, onChange, inputRef }: PlateFormProps) {
  return (
    <Form form={form} layout="vertical" onFinish={onSubmit}>
      <Form.Item
        label="شماره پلاک"
        name="plate"
        rules={[{ required: true, message: "شماره پلاک را وارد کنید." }]}
      >
        <Input.Search
          placeholder="۱۲الف۳۴۵-۶۷"
          size="large"
          onChange={onChange}
          ref={inputRef}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" size="large" style={{ marginTop: 12 }}>
        <Search size={18} />
        دریافت قیمت بیمه
      </Button>
    </Form>
  );
}
