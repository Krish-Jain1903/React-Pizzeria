import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const isInCart = useSelector((state) => state.cart.cart).find(
    (item) => item.pizzaId === id
  );
  const currentQuantity = useSelector((state) => getCurrentQuantity(state, id));

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-x-5 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && "opacity-60 grayscale"}`}
      />
      <div className="flex flex-col grow">
        <p className="font-semibold text-lg">{name}</p>
        <p className="capitalize text-stone-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm place-items-center justify-between">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-semibold uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <div className="space-x-2">
              {isInCart ? (
                <div className="flex items-center justify-center gap-3 text-sm sm:text-base sm:gap-10">
                  <DeleteItem itemId={id} />
                  <UpdateItemQuantity
                    itemId={id}
                    currentQuantity={currentQuantity}
                  />
                </div>
              ) : (
                <Button type="small" onClick={handleAddToCart}>
                  Add To Cart
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
