import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import style from './index.module.css'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail.jsx/Detail";
import Form from "./components/Form/Form";

function App() {
const navigate = useNavigate()


  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

  const username = "diego@gmail.com";
  const password = "diego2018"
  

  useEffect(() => {
    onSearch()
    !access && navigate("/")
  }, [access])

  function onSearch(id) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY_API = "641e04bf5881.ee1ceae244f16f9100d2" 

    fetch(`${URL_BASE}/character/${id}?key=${KEY_API}`)
    .then(res => res.json())
    .then(data =>  {
      if(data.name && !characters.find(char => char.id === data.id)) {
        setCharacters(olChars => [...olChars, data]);
        // setCharacters([...characters, data])
      }else{
        console.log("Algo salio mal")
      }
    })
  }

  const login = (userData) => {
    if(userData.password === password &&  userData.username === username){
      setAccess(true)
      navigate("/home")
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter(item => item.id !== id))
    alert("eliminado")
  }

  const {pathname} = useLocation()

  return (
    <div className={style.contenedor}>
        {pathname !== "/" && <Nav onSearch={onSearch}/> }
        <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/Deail_Card/:id" element={<Detail/>}/>
        </Routes>
    </div>
  );
}

export default App;
