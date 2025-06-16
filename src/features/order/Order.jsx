/* eslint-disable no-unused-vars */
// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-x-3 flex-wrap">
        <h2 className="text-lg font-semibold pl-4 pt-2">Order #{id} Status</h2>
        <div className="space-x-2 pl-3">
          {priority && (
            <span className="bg-red-500 rounded-full py-1 px-2 text-sm uppercase font-semibold text-red-50">
              Priority
            </span>
          )}
          <span className="bg-green-500 rounded-full py-1 px-2 text-sm uppercase font-semibold text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-x-3 flex-wrap bg-stone-200 px-6 py-6">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-stone-500 text-xs">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-y border-stone-200">
        {cart.map((pizza) => {
          return <OrderItem item={pizza} key={pizza.pizzaId} />;
        })}
      </ul>

      <div className="space-y-6 bg-stone-200 px-5 py-3">
        <p className="text-sm text-stone-800 font-medium">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm text-stone-800 font-medium border-b-2 border-stone-300 pb-4">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

// THIS PARAMS HERE IS INBUILT OBJECT WHICH PASSES PARAMS VALUE FROM THE URL SO NO NEED TO DO useParams
export async function loader({ params }) {
  if (!params.orderId) return;
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
