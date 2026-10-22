import ListBox from "@/components/listbox";
import type { OrderCriteria, OrderCriteriaMap } from "@/lib/types";

interface OrderSelectorProps {
  order: OrderCriteria;
  orderCriterias: OrderCriteriaMap;
  setOrder: (order: OrderCriteria) => void;
  className?: string;
}

const OrderSelector = ({
  order,
  orderCriterias,
  setOrder,
  className = "",
}: OrderSelectorProps) => {
  const orderValues = Object.keys(orderCriterias);
  if (orderValues.length === 0) return null;

  return (
    <div className={className}>
      <ListBox
        options={orderValues}
        currentOption={order.value}
        setCurrentOption={(value) => setOrder(orderCriterias[value]!)}
        getOptionLabel={(value) => orderCriterias[value]!.label}
        border={false}
      />
    </div>
  );
};

export default OrderSelector;
