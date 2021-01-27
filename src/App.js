import * as React from "react"
import LeafletMap from "leaflet"
import './App.css';
import InfoDashBoard from './components/info-dashboard'
import { getIpInfo } from './services/ip-service'
import bgImage from './components/bg-image'

const MAP_BOX_KEY = 'pk.eyJ1IjoibmFzaXJpYnJhaGltIiwiYSI6ImNrazVtcXI3ajA4bGYycG53YzF5YmU2czkifQ.cF5THuhE-nBpxe19wNZAcg'

function App() {

  const [inputValue, setInputValue] = React.useState('')
  const [ipData, setIpData] = React.useState({})


  React.useEffect(() => {
    /**
     * initialize leaflet map
     */

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

    /**
     * calling the getIpInfo to get the ip location of the current user
     * that just opened the app
     */
    getIpInfo().then(data => {
      setIpData(data)
    })
  }, [])


  return (
    <div className="App">
      {/** i tried to include the image directly but i kept getting a 'map already initialized error and
       *  even after creating a new component for the image,
       *  a second map keeps getting loaded up or throwing the same error' */}
      <bgImage />

      <input
        onChange={(e) => {
          e.preventDefault()
          setInputValue(e.target.value)
          console.log(e.target.value)
        }}

        value={inputValue}
      />

      <InfoDashBoard data={ipData} />
      <div className="img-bg"></div>
      <div id="map"></div>
    </div>
  );
}

export default App;
