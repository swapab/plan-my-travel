import React, { Component } from 'react';

// const MAP_API = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2';

export default class MyLocation extends Component {
    state = {
        location: ''
    };

    componentDidMount() {
        /* geolocation is available */
        if ('geolocation' in navigator) {
            const location = navigator.geolocation;
            if (location) {
                location.getCurrentPosition(
                    position => {
                        console.log('position.coords', position.coords);
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
        } else {
            this.setState({
                location: 'geolocation error'
            });
            /* geolocation IS NOT available */
        }
    }

    reverseGeocode = () => {
        fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${
            this.state.latitude
            }&lon=${this.state.longitude}`
        )
            .then((response) => {
                return response.json();
            }).then(data => {
                console.log('data', data.address)

                this.setState({
                    location: `${data.address.city}, ${data.address.country}`
                });
            })
            .catch(error => {
                this.setState({
                    location: 'geolocation error'
                });
            })
    };

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
