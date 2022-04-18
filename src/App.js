import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weatherdashboard from "./components/Weatherdashboard"
import {useState,useEffect} from "react";

function App() {

const [City,setCity]=useState('Ann%20Arbor');
const [sectionStyle,setsectionStyle]=useState({backgroundImage: `url(${"https://source.unsplash.com/1600x900/?city%20New%20York"})`});
useEffect(
()=>{let newurl="https://source.unsplash.com/1600x900/?city%20"+City;
     setsectionStyle({backgroundImage: `url(${newurl})`});
     console.log(newurl);
},
[City]);
  return (

<body>
<div className="App" style={sectionStyle}>
    <div className="searchBox"         style={{ height:'700px' }}
    >
      <Weatherdashboard setCity={setCity}/>
    </div>
</div>
</body>

  );
}
export default App;
