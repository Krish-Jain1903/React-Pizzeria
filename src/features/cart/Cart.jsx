import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="mt-20 text-sm md:text-xl sm:mt-8 mx-6 sm:mx-10">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-lg font-semibold">Your cart, {username}</h2>

      <ul className="divide-y-2 divide-stone-300 border-b-2 border-stone-300">
        {cart.map((pizza) => {
          return <CartItem item={pizza} key={pizza.pizzaId} />;
        })}
      </ul>

      <div className="space-x-3 py-5">
        <Button to="/order/new">Order Pizzas</Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
