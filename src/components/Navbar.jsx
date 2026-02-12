{/*Use link tag to avoid page refresh*/ }

import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav>

      <Link to="/">Home</Link> |
      <Link to="/users">Users</Link> |
      <Link to="/add">Add User</Link> |
      <Link to="/about">About</Link>

    </nav>
  );
}

export default Navbar;
