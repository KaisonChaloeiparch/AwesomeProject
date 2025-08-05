import React from "react";
import { View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props:any) {
    return (
        <View style={props.style}>

            <TourItem />
            
        </View>
    );
}
