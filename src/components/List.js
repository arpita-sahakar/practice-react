// import React from "react";



function List(props) {

  return (
    <ul className="list-group">
      {props.myGroceries.map((grocery) => <li>{grocery.name}</li>)}

    </ul>
  );
}

export default List;
