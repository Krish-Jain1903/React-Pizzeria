import { Link } from "react-router-dom";
function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 py-3 p-4 flex items-center justify-between text-sm sm:p-6 md:text-lg">
      <p className="text-stone-300 font-semibold uppercase space-x-3">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
