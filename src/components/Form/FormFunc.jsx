import React, { useState } from "react";

const FormFunc = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleInputChange = (event) => {
      console.log(event);
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <p>
        Hello {firstName} {lastName}
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default FormFunc;
