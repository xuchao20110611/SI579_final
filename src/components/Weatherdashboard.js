import {useState,useEffect} from "react";
import { Button } from 'react-bootstrap';

const Weatherdashboard = (props) => {

var backgroundsetting = {
  width: "100%",
  height: "400px",
  backgroundColor:'rgba(178,178,178,0.75)',
};

const [cityName,setcityName] = useState('Boston');
const [humiditylist,sethumiditylist] = useState([]);
const [targetapi,settargetapi] = useState();
useEffect(
    ()=>{
        let targetapi='https://api.openweathermap.org/data/2.5/forecast/daily?q='
            +cityName
            +'&cnt=5&appid='
            + process.env.REACT_APP_OPENWEATHERTOKEN;
         fetch(targetapi)
         .then(response => response.json())
         .then(data => {
            console.log("print");
            let daylist=data['list'];
            let newhumiditylist=[];
            for(let day of daylist)
            {
                newhumiditylist.push(day['humidity']);
            }
            sethumiditylist(newhumiditylist);

         });
    }
    ,[cityName]);





return <div style={backgroundsetting}>
props.CityName(to be replaced){props.CityName}

{humiditylist}
</div>

}
export default Weatherdashboard;