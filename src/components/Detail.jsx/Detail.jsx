import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    detailApi();
  }, []);

  const detailApi = async () => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY_API = "641e04bf5881.ee1ceae244f16f9100d2";

    const { data } = await axios(`${URL_BASE}/character/${id}?key=${KEY_API}`);
    setDetail(data);
  };

  const { name, species, gender, image, origin, status } = detail;
  
  return (
    <>
      <h1 className={style.titulo}>Detalle del personaje</h1>
      <div className={style.detail_container}>
        <div className={style.info}>
          <h3 className={style.info_p}>Nombre: {name}</h3>
          <p className={style.info_p} >Estado: {status}</p>
          <p className={style.info_p}>Especies: {species}</p>
          <p className={style.info_p}>Genero: {origin?.name}</p>
          <p className={style.info_p} >Origen: {gender}</p>
        </div>
        <div >
          <img className={style.img} src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Detail;
