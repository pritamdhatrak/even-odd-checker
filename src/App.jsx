import React, { useState } from "react";

function App() {
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  const checkParity = () => {
    const num = Number(number);

    if (number.trim() === "" || isNaN(num)) {
      setMessage("Not a valid number!");
      return;
    }

    if (num % 2 === 0) {
      setMessage(`The number \${num} is even!`);
    } else {
      setMessage(`Oops, \${num} is odd!`);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f7f8fc"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        width: "320px",
        textAlign: "center"
      }}>
        <h2>Even or Odd Checker</h2>
        <input
          type="text"
          name="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            margin: "1rem 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
        <button
          onClick={checkParity}
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#2563eb",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Check
        </button>
        {message && (
          <p style={{ marginTop: "1rem", color: "#2563eb", fontWeight: "bold" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
