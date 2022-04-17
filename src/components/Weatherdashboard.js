import {useState,useEffect} from "react";
import WeatherIcon from "./WeatherIcon"
import LineChart from "./LineChart"
//Copyright:https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=19358


const Weatherdashboard = (props) => {

var backgroundsetting = {
  width: "100%",
  height: "400px",
  backgroundColor:'rgba(178,178,178,0)',
};

const [cityName,setcityName] = useState('New York');
const [humiditylist,sethumiditylist] = useState([]);
const [highesttemplist,sethighesttemplist] =useState([]);
const [lowesttemplist,setlowesttemplist] =useState([]);
const [weathertypelist,setweathertypelist] = useState([]);
const [iconsrclist,seticonsrclist] = useState([]);
const [targetapi,settargetapi] = useState();


useEffect(
    ()=>{
        let targetapi='https://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&q='
            +cityName
            +'&cnt=5&appid='
            + process.env.REACT_APP_OPENWEATHERTOKEN;
         fetch(targetapi)
         .then(response => response.json())
         .then(data => {

            let daylist=data['list'];
            let newhumiditylist=[];
            let newhighesttemplist=[];
            let newlowesttemplist=[];
            let newweathertypelist=[];
            let newiconsrclist=[];

            console.log(daylist);




            for(let day of daylist)
            {
                newhumiditylist.push(day['humidity']);
                newhighesttemplist.push(day['temp']['max']);
                newlowesttemplist.push(day['temp']['min']);
                newweathertypelist.push(day['weather'][0]['description']);

                newiconsrclist.push('http://openweathermap.org/img/w/'+day['weather'][0]['icon']+".png");
            }



            sethumiditylist(newhumiditylist);
            sethighesttemplist(newhighesttemplist);
            setlowesttemplist(newlowesttemplist);
            setweathertypelist(newweathertypelist);
            seticonsrclist(newiconsrclist);


         });
    }
    ,[cityName]);




useEffect(
    ()=>{
        console.log("humidity list",humiditylist);
    }
    ,[humiditylist]
);

useEffect(
    ()=>{
        console.log("max temperature list",highesttemplist);
    }
    ,[highesttemplist]
);

useEffect(
    ()=>{
        console.log("min temperature list",lowesttemplist);
    }
    ,[lowesttemplist]
);

useEffect(
    ()=>{
        console.log("weather type list",weathertypelist);
    }
    ,[weathertypelist]
);

useEffect(
    ()=>{
        console.log("icon list",iconsrclist);
    }
    ,[iconsrclist]
);



return (

/*
<div style={backgroundsetting}>

props.CityName(to be replaced){props.CityName}

<WeatherIcon weather='Thunder Rain' />
<img src='http://openweathermap.org/img/w/10d.png'/>
<LineChart />
</div>*/

<LineChart />);

}
export default Weatherdashboard;