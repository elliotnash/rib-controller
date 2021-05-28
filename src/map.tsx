import * as React from 'react';
import './map.css';
class Map extends React.Component {

  componentDidMount(): void {
    console.log("Map component mounted");
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render(): React.ReactNode {
    return <div className="map">
      
    </div>;
  }
}

export default Map;
