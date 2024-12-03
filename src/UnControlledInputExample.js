import React, { useRef } from 'react';

function UncontrolledInputExample() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered Value: ${inputRef.current.value}`);
  };
  


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
       
          ref={inputRef} // Connects the input element to the ref
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInputExample;