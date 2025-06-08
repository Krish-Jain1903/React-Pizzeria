import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation(); // TO APPLY LOADER
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Header />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
