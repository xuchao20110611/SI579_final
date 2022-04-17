import './Current.css';

const Current = (props) => {

    return (
        <div className='display'>
            <div className="top">
                <div className="left-side">
                    <h1>36 °F</h1>
                    <h3>Location</h3>
                </div>
                <div className="right-side">
                    <h1>Clear</h1>
                    <h1>Weather Icon</h1>
                </div>
            </div>
            <div className="bottom">
                <div>
                <h4>Feels Like</h4>
                <h4>3°F</h4>
                </div>
                <div>
                <h4>Humidity</h4>
                <h4>34%</h4>
                </div>
                <div>
                <h4>Min temp</h4>
                <h4>3°F</h4>
                </div>
                <div>
                <h4>Max temp</h4>
                <h4>3°F</h4>
                </div>
            </div>
        </div>
    )
}

export default Current;