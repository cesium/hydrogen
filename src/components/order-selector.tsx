import ListBox from "@/components/listbox";
import type { OrderCriteriaMap } from "@/lib/types";

interface OrderSelectorProps {
  orderKey: string;
  orderCriterias: OrderCriteriaMap;
  setOrderKey: (orderKey: string) => void;
  className?: string;
}

const OrderSelector = ({
  orderKey,
  orderCriterias,
  setOrderKey,
  className = "",
}: OrderSelectorProps) => {
  const orderValues = Object.keys(orderCriterias);
  if (orderValues.length === 0) return null;

  return (
    <div className={className}>
      <ListBox
        options={orderValues}
        currentOption={orderCriterias[orderKey]!.value}
        setCurrentOption={setOrderKey}
        getOptionLabel={(value) => orderCriterias[value]!.label}
        border={false}
      />
    </div>
  );
};

export default OrderSelector;
