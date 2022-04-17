import {useState,useEffect, useRef} from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weatherdashboard from "./Weatherdashboard"

const SearchBox = (props) => {

const inputCity = useRef("New York");

function searchnewcity(){
props.setCity(inputCity.current.value.replaceAll(" ","%20"));
//console.log(inputCity.current.value);
}



return (<div className="searchBox">

        <input type="input" ref={inputCity} placeholder="Please enter a city name" className="input"></input>
        <Button variant="primary" size="lg" className="searchBtn" onClick={searchnewcity}>
        Search
        </Button>
        <hr />




      </div>)
}


export default SearchBox;
