import * as React from "react"
import LeafletMap from "leaflet"
import './App.css';
import InfoDashBoard from './components/info-dashboard'

const test = require("leaflet")
const MAP_BOX_KEY = 'pk.eyJ1IjoibmFzaXJpYnJhaGltIiwiYSI6ImNrazVtcXI3ajA4bGYycG53YzF5YmU2czkifQ.cF5THuhE-nBpxe19wNZAcg'
function App() {

  React.useEffect(() => {
    const map = LeafletMap.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    })

    LeafletMap.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: MAP_BOX_KEY
    }).addTo(map);
  }, [])

  return (
    <div className="App">
      <div className="img-bg"></div>
      <div id="map"></div>
    </div>
  );
}

export default App;
