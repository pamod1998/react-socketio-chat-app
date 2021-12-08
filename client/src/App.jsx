import "./app.css";
import { useState } from "react";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  console.log(user);

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          <Card />
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <h2>Chat App</h2>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
