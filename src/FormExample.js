import React, { useState, useRef } from 'react';

const FormExample = () => {
  // Controlled state for input values
  const [name, setName] = useState('');
  

  // useRef for accessing the input element
  const emailRef = useRef(null);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Name:', name);
    //console.log('Submitted Email:', email);

    // Example of using useRef to clear and focus email field
    emailRef.current.value = '';
    emailRef.current.focus();
  };

  return (
    <div>
      <h1>React Form with useRef and useState</h1>
      <form onSubmit={handleSubmit}>
        {/* Controlled Component: State managed */}
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Uncontrolled Component: Ref managed */}
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" ref={emailRef} />
        </div>

        <button type="submit">Submit</button>
      </form>
      <p>
        <strong>Current Name:</strong> {name}
      </p>
    </div>
  );
};

export default FormExample;
