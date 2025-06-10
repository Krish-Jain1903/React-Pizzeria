import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">React Pizzeria</Link>
      <SearchOrder />
      Krish
    </header>
  );
}

export default Header;
