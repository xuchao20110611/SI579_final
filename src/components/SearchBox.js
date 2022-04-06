import {useState,useEffect} from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weatherdashboard from "./Weatherdashboard"


const SearchBox = (props) => {

return <div className="searchBox">

        <input type="input" placeholder="Please enter a city name or zipcode" className="input"></input>
        <Button variant="primary" size="lg" className="searchBtn">
        Search
        </Button>
        <hr />
        <Weatherdashboard />


      </div>
}


export default SearchBox;
