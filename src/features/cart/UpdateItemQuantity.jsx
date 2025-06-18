import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ itemId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="space-x-3">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(itemId))}
      >
        +
      </Button>
      {currentQuantity > 1 && (
        <Button
          type="round"
          onClick={() => dispatch(decreaseItemQuantity(itemId))}
        >
          -
        </Button>
      )}
    </div>
  );
}

export default UpdateItemQuantity;
