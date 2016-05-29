import React from 'react';
import { Map, Marker, Popup, TileLayer, BaseTileLayer, LayersControl, FeatureGroup, Circle } from 'react-leaflet';
const Loc = React.createClass({
    getInitialState() {
        return {loc: [52.103144366096096, 23.772225379943848]}
    },
    click(e) {
        console.log(e.latlng.lat)
        this.setState({loc: [e.latlng.lat, e.latlng.lng]})
    },
    render() {
        const position = [52.103144366096096, 23.772225379943848];
        return <div style={{width: '100%', height: '50%'}}>
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
                        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>
        </div>;
    }
});
//export default class SimpleExample extends React.Component {
//    constructor() {
//        super();
//        this.state = {
//            lat: 51.505,
//            lng: -0.09,
//            zoom: 13,
//        };
//    }
//
//    render() {
//        const position = [this.state.lat, this.state.lng];
//        return (
//            <Map center={position} zoom={this.state.zoom}>
//                <TileLayer
//                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//                />
//                <Marker position={position}>
//                    <Popup>
//                        <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
//                    </Popup>
//                </Marker>
//            </Map>
//        );
//    }
//}
export default Loc;
/**
 * Created by xolod on 29.05.2016.
 */
