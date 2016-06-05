import React from 'react';
import { Map, Marker, Popup, TileLayer, BaseTileLayer, LayersControl, FeatureGroup, Circle } from 'react-leaflet';
const Loc = React.createClass({
    getInitialState() {
        return {
            location: {
                marker: [53.710041, 27.953450],
                position: 'Беларусь'
            }
        };
    },
    click(e) {
        //this.setState({loc: [e.latlng.lat, e.latlng.lng]});
        this.props.loc([e.latlng.lat, e.latlng.lng]);
    },
    render() {
        let position = this.props.location.position ? this.props.location : this.state.location
        return <div >
            <Map center={position.marker}
                 dragging={true}
                 zoom={16}
                 onClick={this.click}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    ZIndex={2}
                    onClick={this.click}
                />
                <Marker position={position.marker}
                >
                    <Popup>
                        <span>{position.position}</span>
                    </Popup>
                </Marker>
            </Map>
        </div>;
    }
});

export default Loc;
/**
 * Created by xolod on 29.05.2016.
 */
