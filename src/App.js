import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import React, { useState } from "react";

function App() {
  const [friendArrayState, setFriendArrayState] = useState(friends);
  console.log(friends);
  console.log(friendArrayState);

  // const createFriendCard = () => {
    // for every frnd in friendArrayState create friendCard with name, image,occupation,location as props.
    const friendCardArray = friendArrayState.map((frnd) => (
      <FriendCard
        name={frnd.name}
        image={frnd.image}
        occupation={frnd.occupation}
        location={frnd.location}
      />
    ));
    // return friendCardArray;
  // };

  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friendCardArray}
    </Wrapper>
  );
}

export default App;
