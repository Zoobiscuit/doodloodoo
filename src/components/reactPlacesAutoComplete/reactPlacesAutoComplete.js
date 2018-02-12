import React from 'react'
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const formStyle = {
    marginLeft: "-60px",
    marginRight: "22px",
    paddingTop: "5px"
};

const searchIconStyle = {
    width:'36px',
    height: '36px',
    right: '5px',
    top: '18px',
    color:'white',
    position:'absolute'
}

class ReactPlacesAutocomplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: '' }
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit(event){
        event.preventDefault()
        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.updateLatLong('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    handleKeyDownFormSubmit(event){
        if (event.which === 13) {
            event.preventDefault()
            geocodeByAddress(this.state.address)
                .then(results => getLatLng(results[0]))
                .then(latLng => this.updateLatLong('Success', latLng))
                .catch(error => console.error('Error', error))
        }
    }

    updateLatLong(status, latLng){
        this.props.onPass(latLng.lat,latLng.lng);
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            placeholder: 'Search ...',
        }
        const handleFormSubmit = (event) => this.handleFormSubmit(event);
        const handleKeyDownFormSubmit = (event) => this.handleKeyDownFormSubmit(event);

        return (
            <div>
                <form id="autocomplete-form" onSubmit={handleFormSubmit} onKeyDown={handleKeyDownFormSubmit} style={formStyle}>
                    <PlacesAutocomplete inputProps={inputProps} />
                </form>
                <ActionSearchIcon style={searchIconStyle}/>
            </div>
        )
    }
}

export default ReactPlacesAutocomplete