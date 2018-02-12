import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import {CardMedia} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import {lightWhite} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const degToCard = function(deg){
    if (deg>11.25 && deg<33.75){
        return "NNE";
    }else if (deg>33.75 && deg<56.25){
        return "ENE";
    }else if (deg>56.25 && deg<78.75){
        return "E";
    }else if (deg>78.75 && deg<101.25){
        return "ESE";
    }else if (deg>101.25 && deg<123.75){
        return "ESE";
    }else if (deg>123.75 && deg<146.25){
        return "SE";
    }else if (deg>146.25 && deg<168.75){
        return "SSE";
    }else if (deg>168.75 && deg<191.25){
        return "S";
    }else if (deg>191.25 && deg<213.75){
        return "SSW";
    }else if (deg>213.75 && deg<236.25){
        return "SW";
    }else if (deg>236.25 && deg<258.75){
        return "WSW";
    }else if (deg>258.75 && deg<281.25){
        return "W";
    }else if (deg>281.25 && deg<303.75){
        return "WNW";
    }else if (deg>303.75 && deg<326.25){
        return "NW";
    }else if (deg>326.25 && deg<348.75){
        return "NNW";
    }else{
        return "N";
    }
}

const WeatherWindyIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" />
    </SvgIcon>
);

class primaryCardMedia extends Component{
    render(){
        let {name, imgUrl} = this.props;
        return(
            <CardMedia
                style={{zIndex:'0',backgroundImage: `url(${imgUrl})`, height:"200px", width:"100%", backgroundSize: "cover", backgroundPosition: "center"}}
            >
                <div style={{position: "absolute", bottom: "0px", right: "0px", left: "0px", top:"0px", paddingTop: "8px", background: "rgba(0, 0, 0, 0.54)"}}>
                    <Grid>
                        <Row>
                            <Col xs4={2} sm12={6}>
                                <div style={{ position: "relative"}}>
                                    <span style={{fontSize: "24px", color: "rgba(255, 255, 255, 0.87)", display: "block", lineHeight: "36px"}}>
                                        {name}
                                    </span>
                                    <Divider style={{width:"15px",height:"2px"}}/>
                                    <span style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.54)", display: "block", paddingTop:"5px"}}>
                                        {this.props.clouds.toUpperCase()}
                                    </span>
                                    <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.54)", display: "block", paddingTop:"5px"}}>
                                      <WeatherWindyIcon style={{height: "14px", width:"14px", marginBottom:"-1px"}} color={lightWhite}/>  {`${this.props.Wind.speed} mPS ${degToCard(this.props.Wind.deg)}`}
                                    </span>
                                    <span style={{ fontSize: "54px", color: "rgba(255, 255, 255, 0.54)", display: "block", paddingTop:"23px"}}>
                                        {`${this.props.temp}`}&deg;
                                    </span>
                                </div>
                            </Col>
                            <Col xs4={2} sm12={6}>
                                <div style={{padding: "16px", position: "relative", textAlign:"center"}}>
                                    <img src={`/assets/icons/${this.props.icon}.png`} height="128" width="auto" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                {/*<img src={this.state.imgUrl} min-height="240" max-height="240" width="auto" alt="" />*/}
            </CardMedia>
        )
    }
}
export default primaryCardMedia;