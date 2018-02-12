import React, { Component } from 'react';
import LinearProgressBar from '../linearProgressBar/linearProgressBar';

class LatLong extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Lat:'Loading',
        Long:'Loading'
    }
    }
    componentDidMount() {
        var that = this;

        navigator.geolocation.getCurrentPosition(
            function(position) {
                that.setState({
                    Lat: position.coords.latitude,
                    Long: position.coords.longitude
                });
                that.props.onPass(that.state.Lat,that.state.Long);
            },
            function (error) {
                that.props.onPass(40.7128,74.0060);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )

    }
    render () {
        if (this.state.Lat === 'Loading'){
            return <LinearProgressBar/>
        }
        else {
            return <div></div>
            //do nothing
        }
    }
}

export default LatLong;