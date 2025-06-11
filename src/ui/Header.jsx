import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 text-sm uppercase p-4 border-b-2 border-stone-400 space-y-2 flex items-center justify-between sm:px-8 md:text-lg p-5">
      {/* THIS IS IF YOU WANT TO PROVIDE HARDCODED CVALUES IN TAILWIND */}
      <Link className="tracking-[5px]" to="/">React Pizzeria</Link>
      <SearchOrder />
      {/* <Username /> */}
    </header>
  );
}

export default Header;
