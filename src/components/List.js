import React from "react";

function createLi(groceries) {
  const map1 = groceries.map((grocery) => <li>{grocery.name}</li>);
  return map1;
}

function List(props) {

  return (
    <ul className="list-group">
      {createLi(props.myGroceries)}

    </ul>
  );
}

export default List;
