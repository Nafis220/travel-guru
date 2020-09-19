
// import React from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";




// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh"
// }

// const libraries = ["places"]
// const center = {
//   lat: 43.653225,
//   lng: -79.383186,
// }
// const key = 'AIzaSyDD75zJrUxZ3PQN13YYukFNmTwZnBmP5LY' ;
// export default function App(){
//   const {isLoaded,loadError} = useLoadScript({
//     googleMapsApiKey : 'AIzaSyDD75zJrUxZ3PQN13YYukFNmTwZnBmP5LY'   ,  
//     libraries,
//   })
  
//   if(loadError) return "Error Loading Maps";
//   if(!isLoaded) return "LOading Maps"



//   return (
    
//       <GoogleMap style={{width: '100%', height: '100%'}} zoom={8} center={center}></GoogleMap>
    
//   )
// }





import React, { useState, useEffect, useContext } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import { placeContext } from "../../../App";

const key = 'AIzaSyDD75zJrUxZ3PQN13YYukFNmTwZnBmP5LY'
function Map() {
  const place = useContext(placeContext);
  const {latitude, longitude} = place[0]
  
  return (
    <GoogleMap
      defaultZoom={20}
      defaultCenter={{ lat: latitude, lng: longitude }}
    />
    
    
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App(props) {
  
 
  return (
    <div style={{ width: "100%", height: "30%" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}