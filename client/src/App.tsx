import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Fetching message...");

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setMessage(data.message);
    };
    fetchMessage();
  }, []);

  return (
    <>
      <h1>{message}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
