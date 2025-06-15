import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="mt-20 text-sm md:text-xl sm:mt-8">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-lg font-semibold">Your cart, %NAME%</h2>

      <ul className="divide-y-2 divide-stone-300 border-b-2 border-stone-300">
        {cart.map((pizza) => {
          return <CartItem item={pizza} key={pizza.pizzaId} />;
        })}
      </ul>

      <div className="space-x-3 py-5">
        <Button to="/order/new">Order Pizzas</Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
