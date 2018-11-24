import React, { Component } from 'react';

// const MAP_API = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2';

export default class MyLocation extends Component {
    state = {
        location: ''
    };

    reverseGeocode = () => {
        fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${
                this.state.longitude
            }&lon=${this.state.longitude}`
        )
            .then(function(response) {
                console.log(response.json().resolve);
                console.log('state', response.state);
                console.log('country', response.country);
                // this.setState({
                //     location: `${response.state}, ${response.country}`
                // });
            })
            .then(function(error) {
                console.log(error);
            });
    };

    componentDidMount() {
        /* geolocation is available */
        if ('geolocation' in navigator) {
            const location = navigator.geolocation;
            if (location) {
                location.getCurrentPosition(
                    position => {
                        console.log(position.coords);
                        this.setState(
                            {
                                longitude: position.coords.longitude,
                                latitude: position.coords.latitude
                            },
                            () => this.reverseGeocode()
                        );
                    },
                    error => {
                        this.setState({
                            location: 'error'
                        });
                    }
                );
            }

            console.log('state', this.state);
        } else {
            this.setState({
                location: 'geolocation error'
            });
            /* geolocation IS NOT available */
        }
    }

    render() {
        return (
            <input
                placeholder="Where are you right now?"
                data-testid="my-current-location"
                defaultValue={this.state.location}
            />
        );
    }
}
