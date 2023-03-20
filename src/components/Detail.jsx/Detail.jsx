import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailCharacter,removeDetail } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const detail = useSelector(state => state.character)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(removeDetail({}))
    dispatch(detailCharacter(id))
  }, []);

  
  return (
    <>
      <h1 className={style.titulo}>Detalle del personaje</h1>
      <div className={style.detail_container}>
        <div className={style.info}>
          <h3 className={style.info_p}>Nombre: {detail.name}</h3>
          <p className={style.info_p} >Estado: {detail.status}</p>
          <p className={style.info_p}>Especies: {detail.species}</p>
          <p className={style.info_p}>Genero: {detail.origin?.name}</p>
          <p className={style.info_p} >Origen: {detail.gender}</p>
        </div>
        <div >
          <img className={style.img} src={detail.image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Detail;
