import React, { Component } from 'react';
import LatLong from '../components/latLong/latLong';
import { Grid } from 'react-material-responsive-grid';
import ReactPullToRefresh from 'react-pull-to-refresh';
import RefreshIndicator from '../components/refreshIndicator/refreshIndicator';
import CitiesContainer from '../components/citiesContainer/citiesContainer';
import OpenWeatherAPI from '../axios/openWeather/openWeatherAPI';
import AppBar from 'material-ui/AppBar';

import ReactPlacesAutoComplete from '../components/reactPlacesAutoComplete/reactPlacesAutoComplete';

const logoStyle = {
    height: '56px',
    position: 'absolute',
    top: '6px',
    left: '5px'
};

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            Lat:'',
            Long:'',
            Temp:'Loading',
            Clouds:'',
            Name:'',
            Wind:'',
            cities:[],
            refreshing: false,
        }

        this.onPass = this.onPass.bind(this)
    };

    handleRefresh(resolve, reject) {
        let currentState = this;
        let Lat = this.state.Lat;
        let Long = this.state.Long;
        currentState.setState({refreshing:true});
        if (Lat !== '' && Long !== ''){
            OpenWeatherAPI.getCitiesInCircle(Lat,Long).then(function (data) {
                    console.log(data);
                    currentState.setState({
                        cities:data.list,
                        refreshing:false
                    });
                    //resolve();
                },
                function (errorMessage) {
                    //reject();
                });
        } else {
            //reject();
        }
    }

    onPass(Lat,Long) {
        let currentState = this;
        if (Lat !== '' && Long !== ''){
            currentState.setState({refreshing:true});
            OpenWeatherAPI.getCitiesInCircle(Lat,Long).then(function (data) {
                    currentState.setState({
                        Lat: Lat,
                        Long: Long,
                        cities:data.list,
                        refreshing:false
                    });
                },
                function (errorMessage) {
                    //alert(errorMessage);
                });
        }
    }

    render(){
        const onPass = (Lat,Long) => this.onPass(Lat,Long);
        const handleRefresh = (resolve,reject) => this.handleRefresh(resolve,reject);
        const items = [];

        let ReacPullStyle = {
            textAlign: 'center'
        };

        if (this.state.refreshing === true){
            ReacPullStyle = {
                paddingTop:'50px'
            };
        } else {
            ReacPullStyle = {
                paddingTop:'50px'
            };
        }

        var googlePlacesAutoComplete = <ReactPlacesAutoComplete onPass={onPass}/>
        var logoImage = <span style={{marginLeft:'35px'}}><img src="/assets/doodloodoo_logo.png" alt="/assets/doodloodoo_logo.png" style={logoStyle}/>doodloodoo</span>
        return(
            <div className="app">
                <AppBar
                    title={logoImage}
                    iconElementLeft={logoImage}
                    showMenuIconButton={false}
                    iconElementRight={googlePlacesAutoComplete}
                />
                <LatLong onPass = {this.onPass} />
                <ReactPullToRefresh
                    onRefresh={handleRefresh}
                    className="your-own-class-if-you-want"
                    style={ReacPullStyle}
                >
                    <RefreshIndicator isRefreshing={this.state.refreshing}/>
                    <Grid>
                        {/* <DisplayTemp Wind = {this.state.Wind} Icon = {this.state.Icon} Clouds = {this.state.Clouds} Temp = {this.state.Temp} Name = {this.state.Name} Lat = {this.state.Lat} Long = {this.state.Long}/> */}
                        <CitiesContainer cities={this.state.cities} />
                    </Grid>
                </ReactPullToRefresh>
            </div>
        );
    }
}
export default App;