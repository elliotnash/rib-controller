import * as React from 'react';
import './map.sass';
class Map extends React.Component {

  componentDidMount(): void {
    console.log("Map component mounted");
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    }, (err) => {
      console.log(err);
    });
  }

  render(): React.ReactNode {
    return (
      <div className="map-box">
        <div className="map">
        
        </div>
        <div className="map">
        
        </div>
      </div>
    );
  }
}

export default Map;
