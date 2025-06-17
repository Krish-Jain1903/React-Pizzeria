/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

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

function CreateOrder() {
  const cart = fakeCart;
  const navigation = useNavigation();
  const disable = navigation.state === "submitting";

  // BY THIS HOOK WE GET THE ERROR DATA FROM OUR ACTION
  const formErrors = useActionData();
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-20 sm:my-24 md:text-lg px-6 sm:px-12">
      <h2 className="text-xl mb-6 sm:text-3xl sm:text-center">
        Ready to order? Let's go!
      </h2>

      {/* THIS IS INBUILT FORM COMPONENT AND METHOD ATTRIBUTE IS IMPORTANT */}
      <Form method="POST">
        <div className="py-4 space-y-3 sm:flex sm:items-center sm:justify-center sm:gap-8">
          <label className="sm:basis-36">First Name:-</label>
          <div>
            <input
              type="text"
              name="customer"
              required
              className="input"
              defaultValue={username}
            />
          </div>
        </div>

        <div className="pb-4 space-y-3 sm:flex sm:items-center sm:justify-center sm:gap-8">
          <label className="sm:basis-36">Phone number:-</label>
          <div>
            <input type="tel" name="phone" required className="input" />
          </div>
        </div>
        {formErrors?.phone && (
          <p className="text-sm text-red-600 font-semibold bg-red-100 py-1 px-2 rounded-md">
            {formErrors.phone}
          </p>
        )}

        <div className="pb-4 space-y-3 sm:flex sm:items-center sm:justify-center sm:gap-8">
          <label className="sm:basis-36">Address:-</label>
          <div>
            <input type="text" name="address" required className="input" />
          </div>
        </div>

        <div className="pb-4 space-x-2 sm:flex sm:items-center sm:justify-center sm:gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="size-4 accent-yellow-400"
          />
          <label className="font-semibold" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div className="text-center">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disable={disable}>
            {disable ? "Placing Order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// THIS IS THE ACTION FUNCTION JUST LIKE LOADER FUNCTION THIS IS USED TO SUBMIT FORM DATA
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); // CONVERT REQUEST TO OBJECT

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on" ? true : false,
  };

  // THIS IS HOW YOU VALIDATE YOUR FEILDS IN FORM
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      "Please provide your correct phone number as we might need it to contact you !";
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  // THIS REDIRECT METHOD IS INBUILT METHOD SO THAT WE DO NOT NEED TO USE useNavigate()
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
