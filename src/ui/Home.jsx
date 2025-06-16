import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "../ui/Button";

function Home() {

  const username = useSelector((state) => state.user.username);
  return (
    <div className="mt-8 px-2 text-center mb-8 sm:my-16 md:text-xl">
      <h1 className="text-xl font-semibold mb-8 md:text-2xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>

      { username ? <Button to="/menu">Go to Menu, {username}</Button>: <CreateUser />}
    </div>
  );
}

export default Home;
