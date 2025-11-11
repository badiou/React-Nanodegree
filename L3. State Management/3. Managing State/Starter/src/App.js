import corgi from "./corgi.jpg";
import "./App.css";
import {useState} from 'react'

const App = () => {
  const [nombreLike, setNombreLike] = useState(0);

  const countLike=()=>{
    setNombreLike(prev => prev +1);
  }
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi" onClick={countLike}></img>
      <p>Amount of likes: {nombreLike}</p>
    </div>
  );
};

export default App;
