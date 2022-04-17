import ReactAnimatedWeather from 'react-animated-weather';

const AnimatedWeather = () => {
    // ReactAnimatedWeather.defaultProps = {
    //     animate: true,
    //     size: 64,
    //     color: 'black'
    //   };
       
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





    const defaults = {
        icon: 'CLEAR_DAY',
        color: 'goldenrod',
        size: 512,
        animate: true
    };
    return (
    <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate} />
    )

};

export default AnimatedWeather;
