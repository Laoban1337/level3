import React from "react";
import data from "../data";
import Friend from "./Friend";

export default function FriendsList() {
  const friendElements = data.map((friend) => {
    const petList = friend.pets.map((pet, index) => (
      <li key={index}>
        {pet.name}-{pet.breed}
      </li>
    ));
    return (
      <div key={friend.id} className="friend-div">
        {" "}
        <Friend element={friend} />
        <ul> <p className="pet-title">Pets:</p> {petList}</ul>
      </div>
    );
  });

  return <div>{friendElements}</div>;
}
