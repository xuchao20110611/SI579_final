import {useState,useEffect} from "react";
import WeatherIcon from "./WeatherIcon"
import LineChart from "./LineChart"
import WeatherAnimate from "./WeatherAnimate"
import SearchBox from "./SearchBox";
import { Card } from 'antd';
import Current from './Current';
import 'antd/dist/antd.css';
//Copyright:https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=19358


const Weatherdashboard = (props) => {

var backgroundsetting = {
  width: "100%",
  height: "400px",
  backgroundColor:'rgba(178,178,178,0)',
};

const [cityName,setcityName] = useState('New York');
const [DtList,setDtList] = useState([]);
const [humiditylist,sethumiditylist] = useState([]);
const [highesttemplist,sethighesttemplist] =useState([]);
const [lowesttemplist,setlowesttemplist] =useState([]);
const [weathertypelist,setweathertypelist] = useState([]);
const [iconsrclist,seticonsrclist] = useState([]);
const [targetapi,settargetapi] = useState();
const [DayTemplist,setDayTemplist] = useState([]);
const [TimeZone,setTimeZone]=useState(0);
const [currentTemp,setcurrentTemp]=useState('');
const [currentFeel,setcurrentFeel]=useState('');
const [currentMin,setcurrentMin]=useState('');
const [currentMax,setcurrentMax]=useState('');
const [currentHum,setcurrentHum]=useState('');
const [currentWeather,setcurrentWeather]=useState('');



useEffect(
    ()=>{
        let targetapi='https://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&q='
            +cityName
            +'&cnt=15&appid='
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
            let newdtlist=[];
            let newDayTemplist=[];
             console.log(daylist);



            for(let day of daylist)
            {
                newdtlist.push(day['dt']);
                newhumiditylist.push(day['humidity']);
                newhighesttemplist.push(day['temp']['max']);
                newlowesttemplist.push(day['temp']['min']);
                newDayTemplist.push(day['temp']['day']);

                newweathertypelist.push(day['weather'][0]['description']);

                newiconsrclist.push('http://openweathermap.org/img/w/'+day['weather'][0]['icon']+".png");
            }


            setDtList(newdtlist);
            sethumiditylist(newhumiditylist);
            sethighesttemplist(newhighesttemplist);
            setlowesttemplist(newlowesttemplist);
            setweathertypelist(newweathertypelist);
            seticonsrclist(newiconsrclist);
            setDayTemplist(newDayTemplist);


         });



         let targetcurrentapi="https://api.openweathermap.org/data/2.5/weather?units=imperial&q="
                                + cityName
                                + "&appid="
                                + process.env.REACT_APP_OPENWEATHERTOKEN;

        fetch(targetcurrentapi)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setcurrentTemp(data['main']['temp']);
                setcurrentFeel(data['main']['feels_like']);
                setcurrentMax(data['main']['temp_max']);
                setcurrentMin(data['main']['temp_min']);
                setcurrentHum(data['main']['humidity']);
                setcurrentWeather(data['weather'][0]['main']);
            })
    }
    ,[cityName]);

const tabList = [
    {
        key: 'Current',
        tab: 'Current',
    },
    {
        key: 'Forecast',
        tab: 'Forecast',
    },
    ];

    const contentList = {
    Current: <Current
        city={cityName}
        currentTemp={currentTemp}
        currentFeel={currentFeel}
        currentMin={currentMin}
        currentMax={currentMax}
        currentHum={currentHum}
        currentWeather={currentWeather}/>,
    Forecast: <LineChart datalist={DayTemplist} dtlist={DtList} timezone={TimeZone}/>,
    };
    
    const [activeTabKey1, setActiveTabKey1] = useState('Current');

    const onTab1Change = key => {
    setActiveTabKey1(key);
    };

return (
<div style={backgroundsetting}>
<SearchBox setCity={props.setCity} setcityName={setcityName}/>
<Card

        style={{ width: '100%',background: 'rgba(0,0,0,0)', border: 'none' }}

        title=""
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>

</div>
      
//<img src='http://openweathermap.org/img/w/10d.png'/>
);

}
export default Weatherdashboard;