import './Current.css';
import AnimatedWeather from "./AnimatedWeather";

const Current = (props) => {

    return (
        <div className='display'>
            <div className="top">
                <div className="left-side">
                    <h1 className='changeColor'>{props.currentTemp} °F</h1>
                    <h4>{props.city}</h4>
                </div>
                <div className="right-side">
                    <h1>{props.currentWeather}</h1>
                    <AnimatedWeather weather={props.currentWeather} />
                </div>
            </div>
            <div className="bottom">
                <div>
                <h4 className='changeColor'>Feels Like</h4>
                <h2>{props.currentFeel}°F</h2>
                </div>
                <div>
                <h4 className='changeColor'>Humidity</h4>
                <h2>{props.currentHum}%</h2>
                </div>
                <div>
                <h4 className='changeColor'>Min temp</h4>
                <h2>{props.currentMin}°F</h2>
                </div>
                <div>
                <h4 className='changeColor'>Max temp</h4>
                <h2>{props.currentMax}°F</h2>
                </div>
            </div>
        </div>
    )
}

export default Current;