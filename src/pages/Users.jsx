import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

function Users() {

  var [users, setUsers] = useState([]);
  var [loading, setLoading] = useState(true);
  var [error, setError] = useState("");

  useEffect(function () {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        setUsers(data);
        setLoading(false);
      })
      .catch(function() {
        setError("Error fetching users");
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>

      <h1>Users</h1>

      {users.map(function(user) {
        return <UserCard key={user.id} user={user} />;
      })}

    </div>
  );
}

export default Users;
