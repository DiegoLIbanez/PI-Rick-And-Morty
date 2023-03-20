import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import style from "./index.module.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail.jsx/Detail";
import Form from "./components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { charactersApi, removeCharacter } from "./redux/actions";
import Favoritos from "./components/favoritos/Favoritos";

const App = () => {
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  const username = "diego@gmail.com";
  const password = "diego2018";

  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const searchCharacter = (id) => {
    const character = characters.find((item) => item.id === id);
    if (character) {
      alert("personaje ya exiter");
    } else {
      dispatch(charactersApi(id));
    }
  };

  const closeCard = (id) => {
    dispatch(removeCharacter(id));
  };

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  const { pathname } = useLocation();

  return (
    <div className={style.contenedor}>
      {pathname !== "/" && <Nav searchCharacter={searchCharacter} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards closeCard={closeCard} />} />
        <Route path="/Deail_Card/:id" element={<Detail />} />
        <Route path="/favoritos" element={<Favoritos/>}/>
      </Routes>
    </div>
  );
};

export default App;
