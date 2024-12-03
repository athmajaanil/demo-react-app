import React, { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0); // Use useState for state management

  useEffect(() => {
    console.log("Component mounted"); // Mimics componentDidMount
  }, []); // Empty dependency array: runs once

  useEffect(() => {
    console.log("Count updated to:", count); // Runs every time `count` changes
  }, [count]); // Dependency array includes `count`

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseEffectDemo