import React from 'react';
import { Map, Marker, Popup, TileLayer, BaseTileLayer, LayersControl, FeatureGroup, Circle } from 'react-leaflet';
const Loc = React.createClass({
    getInitialState() {
        return {loc: [52.103144366096096, 23.772225379943848]};
    },
    click(e) {
        this.setState({loc: [e.latlng.lat, e.latlng.lng]});
    },
    render() {
        return <div className="SettingsInput">
            <Map center={this.state.loc}
                 maxZoom={16}
                 dragging={true}
                 minZoom={16}
                 zoom={16}
                 onClick={this.click}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    ZIndex={2}
                    onClick={this.click}
                />
                <Marker position={this.state.loc}
                >
                    <Popup>
                        <span>{this.props.location}</span>
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
