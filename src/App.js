import { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import Search from "./Search";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  const [viewport, setViewport] = useState({
    longitude: "90.39408891592521",
    latitude: "23.86523106661817",
    zoom: 14,
  });

  const accessToken =
    "pk.eyJ1IjoiaWFtYWZyaWRpIiwiYSI6ImNsMDZlcGpubzFzMW0zcXJzZW5iZ3luOHkifQ._4g06dAW4u0SJUjiGyspWQ";

  const styles = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="App">
      <Map
        initialViewState={{ ...viewport }}
        mapboxAccessToken={accessToken}
        style={styles}
        mapStyle={`mapbox://styles/mapbox/streets-v9`}
      >
        <Marker
          longitude={90.39408891592521}
          latitude={23.86523106661817}
          anchor="bottom"
        >
          <div>🚩</div>
        </Marker>
        <Search />
        <FullscreenControl />
        <NavigationControl />
        <GeolocateControl />
      </Map>
    </div>
  );
}

export default App;
