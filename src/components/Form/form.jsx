import React, { useState } from "react";

const Form = () => {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // for input values
  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    if (event.target.name === "firstNameTag") {
      setFirstName(event.target.value);
    } else if (event.target.name === "lastNameTag") {
      setLastName(event.target.value);
    } else if (event.target.name === "passwordTag") {
      if (password.length < 15) {
        setPassword(event.target.value);
      }
    }
  };

  //for the submit button

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (firstName === "" || lastName === "") {
      alert("Fill out your first and last name please!");
    } else if (password.length < 6) {
      alert("Provide more secure password " + firstName + " " + lastName);
    } else {
      alert(firstName + " " + lastName + " " + password);
      setFirstName("");
      setLastName("");
      setPassword("");
    }
  };

  return (
    <div>
      <p>
        Hello {firstName} {lastName}
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstNameTag"
          onChange={handleChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastNameTag"
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
        />

        <input
          value={password}
          name="passwordTag"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
};
export default Form;
