import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const MapPage = () =>{

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBbZkKZtHcLLZoGLarC32BgVUETa_2lTms"
      })

      const position = {
        lat: -23.549389114910895, 
        lng: -46.63744701546784
      } 

    return(
        <div>{ isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position}
              zoom={10}
            >
            <Marker position={position}
            options={{
                label:{
                    text: "São Paulo"
                }
            }}/>
            </GoogleMap>
        ) : <></>}</div>
    )
}

export default MapPage;