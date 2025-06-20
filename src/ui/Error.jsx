import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {

  //THIS CUSTOM HOOK TELLS WHAT IS THE REALTIME ERROR
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to = "-1" >&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
