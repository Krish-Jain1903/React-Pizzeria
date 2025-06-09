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
        placeholder="Search For Order Id"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
