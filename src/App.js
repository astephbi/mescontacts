import React from "react";
import Card from "./Card";
import contacts from "./contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.tel}
    />
  );
}

function App() {
  return <div>{contacts.map(createCard)}</div>;
}

export default App;
