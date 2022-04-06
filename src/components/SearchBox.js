import {useState,useEffect} from "react";
import { Button } from 'react-bootstrap';

const SearchBox = (props) => {

return <div className="searchBox">
        <input type="input" placeholder="Please enter a city name or zipcode" className="input"></input>
        <button type="button" className="searchBtn">Search</button>
      </div>
}


export default SearchBox;
