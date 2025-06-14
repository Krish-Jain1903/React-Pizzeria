import { useState } from "react";

import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-5">👋 Welcome! Please start by telling us your name.</p>

      <input
        type="text"
        placeholder="Your Full Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="sm:w-50 mb-8 md:w-72 input"
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
