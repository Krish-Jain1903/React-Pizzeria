import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="py-2">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between pt-2">
        <p>{formatCurrency(totalPrice)}</p>
        <div className="flex gap-4 sm:gap-6">
          <DeleteItem itemId={item.pizzaId} />
          <UpdateItemQuantity itemId={item.pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
