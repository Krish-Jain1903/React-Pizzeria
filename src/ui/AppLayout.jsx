import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation(); // TO APPLY LOADER
  const isLoading = navigation.state === "loading";

  return (
    // THIS HOW YOU SET UP GRID (THESE ARE HARDCODED VALUES FOR 3 ROWS)
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="owerflow-scroll w-3xl">{isLoading ? <Loader /> : <Outlet />}</main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
