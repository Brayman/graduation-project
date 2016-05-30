import React from 'react';
import { Map, Marker, Popup, TileLayer, BaseTileLayer, LayersControl, FeatureGroup, Circle } from 'react-leaflet';
const Loc = React.createClass({
    getInitialState() {
        return {
            markers: [
                {
                    loc: [52.103144366096096, 23.772225378943848],
                    name: 'дом'
                },
                {
                    loc: [52.10385609128052, 23.781473636627197],
                    name: 'магазин мебель'
                },
                {
                    loc: [52.10082459036063, 23.767515420913696],
                    name: 'керамическая плитка'
                },
                {
                    loc: [52.09731833668395, 23.767247200012207],
                    name: 'гипермаркет алми'
                },
                {
                    loc: [52.1036056707515, 23.76244068145752],
                    name: 'домашняя компания'
                },
                {
                    loc: [52.101994378717414, 23.76069188117981],
                    name: 'корчма'
                },
                {
                    loc: [52.105562867433214, 23.775765895843506],
                    name: 'брестоблсоюзпечать'
                }
            ]
        };
    },
    click(e) {
        console.log(e.latlng)
    },
    render() {
        return <div style={{width: '100%', height: '100%'}}>
            <Map center={[52.10, 23.77]}
                 dragging={true}
                 zoom={15}
                 onClick={this.click}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    ZIndex={2}
                    onClick={this.click}
                />
                {this.state.markers.map(location => {
                    return <Marker position={location.loc}>
                                <Popup>
                                    <span>{location.name}</span>
                                </Popup>
                            </Marker>;
                })}
            </Map>
        </div>;
    }
});

export default Loc;
/**
 * Created by xolod on 30.05.2016.
 */
