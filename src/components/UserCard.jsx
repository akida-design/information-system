{/*display one user*/}

import { Link } from "react-router-dom";

function UserCard(props) {

  var user = props.user;

  return (
    <div>

      <h3>{user.name}</h3>
      <p>{user.email}</p>

      <Link to={"/users/" + user.id}>View Details</Link>

    </div>
  );
}

export default UserCard;
