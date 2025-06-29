// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useFetcher, useLoaderData } from "react-router-dom";

import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

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

  // THIS IS A NEW IN BUILT HOOK YOU NOT NEED TO GO TO USE NAVIGATE
  // THIS IS USED WHEN YOU WANT TO FETCH DATA OF OTHER ROUTE TO ANY OTHER ROUTE
  // HERE THIS IS FETCHING MENU ROUTE DATA IN ORDER ROUTE
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-x-3 flex-wrap">
        <h2 className="text-lg font-semibold pl-4 pt-2">Order #{id} Status</h2>
        <div className="space-x-2 pl-3 pt-2">
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
          return (
            <OrderItem
              item={pizza}
              key={pizza.pizzaId}
              ingredients={
                fetcher?.data?.find((el) => el.id === pizza.pizzaId).ingredients
              }
              isLoadingIngredients={fetcher.state === "loading"}
            />
          );
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
      {order.priority === false && <UpdateOrder order={order} />}
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
