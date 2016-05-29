import React from 'react';
import { Map, Marker, Popup, TileLayer, LayersControl, FeatureGroup, Circle } from 'react-leaflet';
const Loc = React.createClass({
    render() {
        const position = [52.1, 23.7];
        return <div style={{width: '50%', height: '50%'}}>
            <Map center={position} maxZoom={13} dragging={false} minZoom={13} zoom={13}>
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    ZIndex={2}

                />
            </Map>
        </div>;
    }
});
export default Loc;
/**
 * Created by xolod on 29.05.2016.
 */
