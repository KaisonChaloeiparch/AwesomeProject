import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";

export default function MyMapView(props:any) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;  

  if (props.location) {
    //DISPLAY MAP ON YOUR LOCATION
    return (
      <MapView
        style={{ width: "100%",height: "100%" }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}     
        onUserLocationChange={(event) => {
        // console.log("LOCATION CHANGED : " , event);
        if (event.nativeEvent.coordinate) {
          let new_location = {
            coords: event.nativeEvent.coordinate,
            mocked: false,
            timestamp: event.nativeEvent.coordinate.timestamp,
          };
          //SET LOCATION
          props.setLocation(new_location);        
        }
    }}
      >        
      </MapView>
    );
  } else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>;
  }
}
