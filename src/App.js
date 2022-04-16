import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weatherdashboard from "./components/Weatherdashboard"
import SearchBox from "./components/SearchBox"
import {useState,useEffect} from "react";


function App() {

const [City,setCity]=useState('New York');
const [sectionStyle,setsectionStyle]=useState({backgroundImage: `url(${"https://source.unsplash.com/1600x900/?city%20New%20York"})`});
useEffect(
()=>{let newurl="https://source.unsplash.com/1600x900/?city%20"+City;
     setsectionStyle({backgroundImage: `url(${newurl})`});
     console.log(newurl);
},
[City]);





  return (


//
//<body>
//    <div className="App" style={sectionStyle}>
//
//        <img src={logo} className="App-logo" alt="logo" />
//
//
//          Learn React
//
//    </div>
//    <Weatherdashboard />
//</body>

<body>
    <div className="App" style={sectionStyle}>
      <SearchBox city={City} setCity={setCity}/>

    </div>

</body>

  );
}

export default App;
