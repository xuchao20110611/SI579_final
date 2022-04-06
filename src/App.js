import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weatherdashboard from "./components/Weatherdashboard"


function App() {

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url("https://source.unsplash.com/1600x900/?city%20New%20York")`

};
  return (



<body>
    <div className="App" style={sectionStyle}>

        <img src={logo} className="App-logo" alt="logo" />


          Learn React

    </div>
    <Weatherdashboard />
</body>

  );
}

export default App;
