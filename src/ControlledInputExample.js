import React, { useState } from 'react';

function ControlledInputExample() {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value); // Update state with the input's value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Username: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}         // Controlled by state
          onChange={handleChange}   // Updates state with every keystroke
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledInputExample;