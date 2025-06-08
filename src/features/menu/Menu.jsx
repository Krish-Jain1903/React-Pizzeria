import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData(); // APPLY FETCH LOADER (STEP 3)
  return (
    <ul>
      {menu.map((pizza) => {
        return <MenuItem pizza={pizza} key={pizza.id} />;
      })}
    </ul>
  );
}

// CREATED LOADER METHOD TO DO FETCH REQUEST AND LOAD DATA (STEP 1)
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
