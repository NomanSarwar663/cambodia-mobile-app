import {Image, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";

function PlanTrip() {
    return (
            <TouchableOpacity>
                <Image
                    style={{
                        width: 250,
                        height: 100,
                        borderRadius: 30,
                        marginLeft: 10
                    }}
                    source={{uri: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}}/>
            </TouchableOpacity>
    );
}

export {PlanTrip}
