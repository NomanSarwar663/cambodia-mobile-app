import {Image, Text, View} from "react-native";
import * as React from "react";


function CategoryItem() {
    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            marginBottom:20
        }}>
            <Image source={require('./home.jpeg')} style={{
                width: 125,
                height: 100,
                borderRadius:15
            }}/>
            <View style={{
                paddingHorizontal: 10,
                flex: 1
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "600",
                    marginBottom: 5
                }}>Boko Paradise</Text>
                <Text style={{
                    fontSize: 17,
                    color: "grey"
                }}>Kampot, Combodia</Text>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    bottom: 0,
                    left: 10
                }}>
                    <Text style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            color: "#FF7A33",
                            fontSize: 20,
                            fontWeight: "500"
                        }}>$</Text>
                        <Text style={{
                            paddingStart: 4,
                            fontSize: 20,
                            fontWeight: "500"
                        }}>120</Text>
                    </Text>
                    <Text style={{
                        fontSize: 15,
                        color: "grey"
                    }}>Approx 2 night trip</Text>
                </View>
            </View>
        </View>
    );
}

export {CategoryItem}
