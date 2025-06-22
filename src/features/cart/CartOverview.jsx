import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CartOverview() {
  const totalQuantity = useSelector((state) => getTotalQuantity(state));
  const totalPrice = useSelector((state) => getTotalPrice(state));

  if (!totalQuantity || !totalPrice) return null;
  return (
    <div className="bg-stone-800 text-stone-200 py-3 p-4 flex items-center justify-between text-sm sm:p-6 md:text-lg sticky bottom-0">
      <p className="text-stone-300 font-semibold uppercase space-x-3">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
