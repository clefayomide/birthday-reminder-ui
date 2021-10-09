import React from "react";

const Cards = ({ birthday }) => {
  return (
    <>
      <section className="birthday">
        <img src={birthday.image} alt={birthday.name} className="celebrant" />
        <p className="details">
          {birthday.name} <br /> <span>{birthday.age}</span>
        </p>
      </section>
    </>
  );
};

export default Cards;
