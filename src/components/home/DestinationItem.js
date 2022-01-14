import {Image, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";

function DestinationItem() {
    return (
        <TouchableOpacity>
            <View style={{
                width: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
            }}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        marginBottom: 10
                    }}
                    source={{uri: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}}/>
                <Text style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "400",
                    color: "grey"
                }
                }>Culture and Heritage</Text>
            </View>
        </TouchableOpacity>
    );
}

export {DestinationItem}
