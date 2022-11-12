import React from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox, } from '@react-google-maps/api';
import './maps.css'

export interface MapPageProps {}

const containerStyle = {
    width: '700px',
    height: '700px'
  };

function MapPage(){

      const [map, setMap] = React.useState<google.maps.Map>();

      const [searchBox, setSearchBox] = React.useState<google.maps.places.SearchBox>();

      const onMapLoad = (map: google.maps.Map) => {
        setMap(map);
      };

      const onLoad = (ref: google.maps.places.SearchBox) => {
        setSearchBox(ref);
      };

      const onPlacesChanged = () => {
        const places = searchBox!.getPlaces();
        const place = places![0];

        const location = {
          lat: place?.geometry?.location?.lat() || 0,
          lng: place?.geometry?.location?.lng() || 0,
        };

        map?.panTo(location);
    }
    
      const position = {
        lat: -23.549389114910895, 
        lng: -46.63744701546784
      } 

    return(
        <div>
            <LoadScript googleMapsApiKey="AIzaSyBbZkKZtHcLLZoGLarC32BgVUETa_2lTms" libraries={["places"]}>
            <GoogleMap
                onLoad={onMapLoad}
                mapContainerStyle={containerStyle}
                center={position}
                zoom={11}>
                <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
                    <input className="address" placeholder="Digite o endereço"/>
                </StandaloneSearchBox>
            </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default MapPage;