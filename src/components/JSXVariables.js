import React from "react";
const name = "Arpita";
const letters = 10;
const myView = "Its Awesome";
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {letters}letters</h2>
          <h2>I think React {myView}</h2>
          <h3>"My name without any vowels is: {name.replace(/[aeiou]/gi, '')}".</h3>
          <h3>"My name without any vowels is: {removeVowels(name)}".</h3>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
