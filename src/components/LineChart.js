import {useSpring} from 'react-spring'
import moment from 'moment';
import ReactAnime from 'react-animejs'
import CanvasJSReact from './canvasjs.stock.react';
import SearchBox from "./SearchBox";
import {useState} from "react";


const {Anime, stagger} = ReactAnime
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;


const LineChart = (props) => {



// console.log(props.dtlist);
// props.dtlist.forEach(element=>
// {
//     //console.log(new Date(element*1000+props.timezone*1000));
//     // console.log(new moment(element*1000).tz('Asia/Tokyo').toDate());
// })

let datalist=[];

if(props.dtlist.length>0)
{
    for (var i = 0; i < 16; i++)
    {
        // console.log(new Date(props.dtlist[i]*1000+props.timezone*1000));
        datalist.push({x:new Date(props.dtlist[i]*1000+props.timezone*1000),y:props.datalist[i]});
    }
}

// console.log(datalist);

const options = {
      title: {
          text: "15 days Temperature Prediction"
      },
      rangeSelector: {
        enabled: false,
      },
      animationEnabled: true,
      charts: [{
          data: [{
            type: "line",
            dataPoints: datalist
         }]
      }],
      navigator: {
        slider: {
          minimum: new Date("2018-07-01"),
          maximum: new Date("2019-06-30")
        }
      }
    };
const containerProps = {
      width: "80%",
      height: "450px",
      margin: "auto"
    };


return (<div>
        <CanvasJSStockChart
          options={options}
          containerProps = {containerProps}
          style={{ background: 'rgba(0,0,0,0)' }}
        />
      </div>);
}
export default LineChart;