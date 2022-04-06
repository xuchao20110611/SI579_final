import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url("https://source.unsplash.com/1600x900/?city%20New%20York")`

};
  return (




    <div className="App" style={sectionStyle}>

        <img src={logo} className="App-logo" alt="logo" />


          Learn React

    </div>
  );
}

export default App;
