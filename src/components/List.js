// import React from "react";



function List(props) {

  return (
    <ul className="list-group">
      {props.myGroceries.map((grocery) => <li className="list-group-item">{grocery.name}</li>)}

    </ul>
  );
}

export default List;
