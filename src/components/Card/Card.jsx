import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = ({id, name, species, gender, image, origin, status, closeCard}) => {
    return (
      <div className={style.Card}>
        <div>
            <img className={style.Card_img} src={image} alt=""/>
        </div>
        <div className={style.Card_cuerpo}>
            <Link className={style.link} to={`/Deail_Card/${id}`}> <h3><b>Nombre:</b>{name} </h3></Link>
            <p><b>Estado:</b> {status}</p>
            <p><b>Especie:</b> {species}</p>
            <p><b>Genero:</b>{gender}</p>
            <p><b>Origen:</b> {origin.name}</p>
            <button onClick={() => closeCard(id)}>X</button>
        </div>
    </div>
  )
}

export default Card