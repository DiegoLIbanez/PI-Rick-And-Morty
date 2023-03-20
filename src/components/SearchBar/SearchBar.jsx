import React,{useState} from 'react'
import style from "./SearchBar.module.css";
import { Link } from 'react-router-dom';


const SearchBar = ({searchCharacter}) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value)
  }
  return (
   <div className={style.nav}>
     <div className={style.container}>
      <div className={style.nav_link}>
        <Link className={style.nav_a} to="/home">Home</Link>
        <Link className={style.nav_a} to="/favoritos">Favoritos</Link>
      </div>
      <div className={style.buscador}>
      <input
         className={style.buscador_input} 
          type="text" 
            onChange={handleChange}/>
      <button className={style.boton} onClick={() => searchCharacter(id)}>Agregar</button>
      </div>
    </div>
   </div>
  )
}

export default SearchBar