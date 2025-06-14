import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (orderId === "") return;
    navigate(`/order/${orderId}`);
    setOrderId("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search For Order"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="py-1 pl-4 rounded-full bg-yellow-100 placeholder:text-stone-500 text-sm sm:text-lg w-32 sm:w-60 transition-all duration-500 
        focus:w-40 sm:focus:w-80 focus:outline-none"
      />
    </form>
  );
}

export default SearchOrder;
