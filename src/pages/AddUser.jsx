import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function AddUser() {

  var [name, setName] = useState("");
  var [email, setEmail] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    console.log("New user:", name, email);

  }

  return (
    <form onSubmit={handleSubmit}>

      <Input type="text" value={name}
        onChange={function(e){ setName(e.target.value); }}
        placeholder="Name"
      />

      <Input type="email" value={email}
        onChange={function(e){ setEmail(e.target.value); }}
        placeholder="Email"
      />

      <Button>Add User</Button>

    </form>
  );
}

export default AddUser;
