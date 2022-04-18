import ReactAnimatedWeather from 'react-animated-weather';


const Animatedict={
    'Rain':'RAIN',
    'Drizzle': 'SLEET',
    'Snow':'SNOW',
    'Clear':'CLEAR_DAY',
    'Clouds':'CLOUDY',


    'Mist':'FOG',
    'Smoke':'FOG',
    'Haze':'FOG',
    'Dust':'FOG',
    'Fog':'FOG',
    'Sand':'FOG',
    'Ash':'FOG',
    'Squall':'FOG',
    'Tornado':'FOG'


};
const AnimatedWeather = (props) => {


    //   ReactAnimatedWeather.propTypes = {
    //     icon: PropTypes.oneOf([
    //       'CLEAR_DAY',
    //       'CLEAR_NIGHT',
    //       'PARTLY_CLOUDY_DAY',
    //       'PARTLY_CLOUDY_NIGHT',
    //       'CLOUDY',
    //       'RAIN',
    //       'SLEET',
    //       'SNOW',
    //       'WIND',
    //       'FOG'
    //     ]).isRequired,
    //     animate: PropTypes.bool,
    //     size: PropTypes.number,
    //     color: PropTypes.string
    //   };


    if(props.weather!='Thunderstorm '){
        return (
        <ReactAnimatedWeather
            icon={Animatedict[props.weather]}
            color={'#FEAD08'}
            size={80}
            animate={true} />
    )}
    else {
        return <img src='http://openweathermap.org/img/wn/11d@2x.png'/>;
    }

};

export default AnimatedWeather;