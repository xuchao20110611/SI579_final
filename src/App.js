import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weatherdashboard from "./components/Weatherdashboard"
import SearchBox from "./components/SearchBox"
import {useState,useEffect} from "react";


import anime, { AnimeParams } from 'animejs';

function App() {

const [City,setCity]=useState('New%20York');
const [sectionStyle,setsectionStyle]=useState({backgroundImage: `url(${"https://source.unsplash.com/1600x900/?city%20New%20York"})`});
useEffect(
()=>{let newurl="https://source.unsplash.com/1600x900/?city%20"+City;
     setsectionStyle({backgroundImage: `url(${newurl})`});
     console.log(newurl);
},
[City]);





  return (




<body>

      <Weatherdashboard />



</body>

  );
}

export default App;
