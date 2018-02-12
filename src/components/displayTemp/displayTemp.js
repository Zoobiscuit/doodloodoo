import React, { Component } from 'react';

import {Card} from 'material-ui/Card';
import { Col } from 'react-material-responsive-grid';
import PrimaryCardMedia from '../primaryCardMedia/primaryCardMedia';
import UnsplashAPI from '../../axios/unsplash/unsplashAPI';
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class DisplayTemp extends Component{
    constructor(props){
        super(props);
        this.state ={
            imgUrl:'https://i.pinimg.com/474x/df/06/2a/df062aa0f322030fcef180bacc2ab195--wedding-color-schemes-the-features.jpg'
        }
    };

    componentDidMount() {
        let currentState = this;
        UnsplashAPI.getPhotoBySearch("clear sky").then(function (data) {
            let results = data.results;
            let firstResult = results[0];
            if (typeof firstResult !== 'undefined'){
                let randomIndex = getRandomInt(results.length);
                let resultToUse = results[randomIndex];

                let newImageUrl = resultToUse.urls.regular;
                currentState.setState({imgUrl: newImageUrl});
            } else {
                // no image found do nothing
            }
        },
        function (errorMessage) {
            console.log(errorMessage);
        });

    }

    render(){
        let {Temp, Name, Clouds, Icon, Wind} = this.props;
        if(Temp === 'Loading'){

        }
        else {
            return(
                <Col xs4={4} sm12={6} style={{paddingTop:'15px'}}>
                <Card style={{paddingBottom:'25px',backgroundColor: "#FAF8FB"}}>
                    <PrimaryCardMedia
                        name={Name}
                        imgUrl={this.state.imgUrl}
                        clouds={Clouds}
                        icon={Icon}
                        Wind={Wind}
                        temp={Temp}
                    />
                    {/*<CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                    <div className='display-weather'>
                    <p>It is {Temp} &#8451; at {Name}, Latitude: {Lat} and Longitude: {Long}</p>
                    <img src={this.state.imgUrl} alt={this.state.imgUrl} height="240" width="240"/>
                </div>*/}
                </Card>
                </Col>
            )
        }
    }
}
export default DisplayTemp;