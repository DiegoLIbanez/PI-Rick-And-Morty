import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ closeCard }) => {

  const characters = useSelector(state => state.characters)

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
                closeCard={closeCard}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default Cards;
