import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (username === "") return;
  return (
    <div className="text-lg font-semibold hidden md:block">
      <p>{username}</p>
    </div>
  );
}

export default Username;
