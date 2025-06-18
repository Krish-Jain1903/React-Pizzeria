import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="text-lg font-semibold my-auto text-center mt-48 sm:text-2xl space-y-6 px-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
