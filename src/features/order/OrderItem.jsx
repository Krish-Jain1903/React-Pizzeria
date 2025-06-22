import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, ingredients = [], isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-2 px-4 sm:space-y-2">
      <div className="flex items-center justify-between">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic">
        {isLoadingIngredients && "Loading"}
        {ingredients.length !== 0 && ingredients.join(",")}
      </p>
    </li>
  );
}

export default OrderItem;
