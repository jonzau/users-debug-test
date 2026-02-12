import { useState, useEffect } from "react";
import { fetchUser } from "./services/userApi";
import { type User } from "./types/user";
import "./App.css";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    addUser();
  }, []);

  const addUser = async () => {
    setIsLoading(true);
    try {
      const newUser = await fetchUser();
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error) {
      console.error("Error fetching random user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeUser = (user: User) => {
    user.userId &&
      setUsers((prevUsers) =>
        prevUsers.filter((u) => u.userId !== user.userId)
      );
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      <button onClick={addUser} disabled={isLoading} className="add-button">
        {isLoading ? "Adding..." : "Add Random User"}
      </button>

      <div className="user-list">
        {users.map((user) => (
          <div key={user.name.first + user.userId} className="user-card">
            <img
              src={user.picture.thumbnail}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <div className="user-info">
              <h3>
                {user.name.first} {user.name.last}
              </h3>
              <p>{user.email}</p>
            </div>
            <button className="remove-button" onClick={() => removeUser(user)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
