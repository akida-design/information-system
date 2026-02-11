import { useParams } from "react-router-dom";

function UserDetails() {

  var params = useParams();

  return (
    <div>
      <h1>User ID: {params.id}</h1>
    </div>
  );
}

export default UserDetails;
