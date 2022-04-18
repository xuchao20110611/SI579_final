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
let highlist=[];
let lowlist=[];
let showhighest=(props.highestlist.length);
let showlowest=(props.lowestlist.length>0);
let showmedium=(props.dtlist.length>0);
if(props.dtlist.length>0)
{
    showmedium=true;
    let dtlength=props.dtlist.length;
    for (var i = 0; i < dtlength; i++)
    {
        // console.log(new Date(props.dtlist[i]*1000+props.timezone*1000));
        datalist.push({x:new Date(props.dtlist[i]*1000+props.timezone*1000),y:props.datalist[i]});
        if(props.highestlist.length>0){

            showhighest=true;
            highlist.push({x:new Date(props.dtlist[i]*1000+props.timezone*1000),y:props.highestlist[i]});
        }
        if(props.lowestlist.length>0){
            showlowest=true;
            lowlist.push({x:new Date(props.dtlist[i]*1000+props.timezone*1000),y:props.lowestlist[i]});
        }

    }
}



// console.log(datalist);

const options = {
      title: {
          text: props.charttitle
      },
      rangeSelector: {
        enabled: false,
      },
      animationEnabled: true,
      charts: [{
          data: [{
            type: "line",
            dataPoints: datalist,
            color:"green",
            legendText: "Temperature",
            showInLegend: showmedium,
         },
              {
                  type: "line",
                  dataPoints: highlist,
                  color: "red",
                  legendText: "Highest Temperature",
                  showInLegend: showhighest,
              },
              {
                  type: "line",
                  dataPoints: lowlist,
                  color:"blue",
                  legendText: "Lowest Temperature",
                  showInLegend: showlowest,
              },
         ]
      }],
      navigator: {

          animationEnabled:true,
          animationDuration:20
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