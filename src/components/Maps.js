import React from 'react';
import {connect} from 'react-redux';
import { Map, Marker, Popup, TileLayer, BaseTileLayer, LayersControl, FeatureGroup, Circle } from 'react-leaflet';
const Loc = React.createClass({
    render() {
        return <div style={{width: '100%', height: '100%'}}>
            <Map center={[53.710041, 27.953450]}
                 dragging={true}
                 zoom={6}
                 onClick={this.click}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    ZIndex={2}
                    onClick={this.click}
                />
                {this.props.posts.map(location => {
                     if (location.location.position !== undefined) {
                        return <Marker position={location.location.marker}>
                            <Popup>
                                <span>{location.name}</span>
                            </Popup>
                        </Marker>;
                    }
                    return <Marker position={[53.710041, 27.953450]}>
                        <Popup>
                            <span>{location.name}</span>
                        </Popup>
                    </Marker>;
                })}
            </Map>
        </div>;
    }
});

export default connect(
    (state)=> {
        return {
            posts: state.posts
        };
    }
)(Loc);
/**
 * Created by xolod on 30.05.2016.
 */
