import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="mt-8 text-center px-2 mb-8 sm:my-16 md:text-xl">
      <h1 className="text-xl font-semibold text-center mb-8 md:text-2xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
