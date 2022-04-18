import './Current.css';
import AnimatedWeather from "./AnimatedWeather";

const Current = (props) => {

    return (
        <div className='display'>
            <div className="top">
                <div className="left-side">
                    <h1>{props.currentTemp} °F</h1>
                    <h3>{props.city}</h3>
                </div>
                <div className="right-side">
                    <h1>{props.currentWeather}</h1>
                    <AnimatedWeather weather={props.currentWeather}/>
                </div>
            </div>
            <div className="bottom">
                <div>
                <h4>Feels Like</h4>
                <h4>{props.currentFeel}°F</h4>
                </div>
                <div>
                <h4>Humidity</h4>
                <h4>{props.currentHum}%</h4>
                </div>
                <div>
                <h4>Min temp</h4>
                <h4>{props.currentMin}°F</h4>
                </div>
                <div>
                <h4>Max temp</h4>
                <h4>{props.currentMax}°F</h4>
                </div>
            </div>
        </div>
    )
}

export default Current;