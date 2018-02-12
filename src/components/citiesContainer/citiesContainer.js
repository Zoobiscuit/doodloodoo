import React, { Component } from 'react';
import { Row } from 'react-material-responsive-grid';
import DisplayTemp from '../displayTemp/displayTemp';

var _ = require('lodash');
class CitiesContainer extends Component {

    renderCities(cities){
        return _.map(cities, function(city){
            const Temp = city.main.temp;
            const Name = city.name;
            const Clouds = city.weather[0].description;
            const Icon = city.weather[0].icon;
            const Wind = city.wind;

            return(
                <DisplayTemp key={city.id} Wind = {Wind} Icon = {Icon} Clouds = {Clouds} Temp = {Temp} Name = {Name}/>
            );
        });
    }

    render(){
        //const renderCities = () => this.renderCities(this.props.cities);
        return(
            <div>
                <Row>
                {this.renderCities(this.props.cities)}
                </Row>
            </div>
        );
    }
}
export default CitiesContainer;