import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      console.log(response.data.users);
      setUsers(response.data.users);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          {users.map((user, index) => (
            <div key={index}>
              <span>{user}</span>
              <br />
            </div>
          ))}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App