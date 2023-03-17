import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <>
      <h1 className={style.titulo}>Mostrar Personaje de Rick and Morty</h1>
      <div className={style.Cards}>
        {characters.map(
          ({ id, name, species, gender, image, origin, status }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                image={image}
                origin={origin}
                onClose={onClose}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default Cards;
