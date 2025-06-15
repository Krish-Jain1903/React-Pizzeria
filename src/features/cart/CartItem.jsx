import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  console.log(pizzaId);

  return (
    <li className="py-2">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between pt-2">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
