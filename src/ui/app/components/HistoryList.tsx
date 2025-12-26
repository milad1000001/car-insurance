import { Button, Flex, Typography } from "antd";
import type { InquiryHistoryRecord } from "@core/domain/history";

const { Text } = Typography;

type HistoryListProps = {
  items: InquiryHistoryRecord[];
  onRemove: (id: string) => void;
};

export function HistoryList({ items, onRemove }: HistoryListProps) {
  if (items.length === 0) {
    return (
      <Text type="secondary">
        سابقه‌ای برای نمایش وجود ندارد.
      </Text>
    );
  }

  return (
    <Flex vertical gap={12}>
      {items.map((item) => (
        <Flex
          key={item.id}
          align="center"
          justify="space-between"
        >
          <Flex vertical>
            <Text>پلاک: {item.plate}</Text>
            <Text type="secondary">مالک: {item.ownerName}</Text>
            <Text type="secondary">
              قیمت: {new Intl.NumberFormat("fa-IR").format(item.price)} ریال
            </Text>
          </Flex>
          <Button danger size="small" onClick={() => onRemove(item.id)}>
            حذف
          </Button>
        </Flex>
      ))}
    </Flex>
  );
}
