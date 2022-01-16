import {Image, Text, View} from "react-native";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style"


function Wishlist() {
    return (
        <View style={styles.wrapper}>
            <Image source={require('../home/home.jpeg')} style={styles.image}/>
            <View style={{
                paddingHorizontal: 10,
                flex: 1
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "300",
                        flex: 1,
                        marginBottom: 5
                    }}>Dylan Hotel</Text>
                    <Ionicons name={'close-circle'} size={30} color={"red"}/>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "300",
                        flex: 1,
                        marginBottom: 5
                    }}>Featured</Text>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <Ionicons name={'star'} size={20} color={"#f7c600"}/>
                        <Ionicons name={'star'} size={20} color={"#f7c600"}/>
                        <Ionicons name={'star'} size={20} color={"#f7c600"}/>
                        <Ionicons name={'star'} size={20} color={"#f7c600"}/>
                        <Ionicons name={'star'} size={20} color={"#f7c600"}/>

                    </View>
                </View>
                <View style={styles.locationContainer}>
                    <Text>
                        <Ionicons name={'location'} size={20} color={"red"}/>
                        <Text style={styles.locationText}>Siem Reap Cambodia - <Text style={{
                            color: "red"
                        }}>
                            View on map
                        </Text>
                        </Text>
                    </Text>
                </View>
                <View style={{
                    marginTop:10,
                    flexDirection:"row"
                }}>
                    <Text style={{
                        flex:1
                    }}>Price</Text>
                    <Text style={{
                        color:"red",
                        fontWeight:"bold"
                    }}>
                        $350
                        <Text style={{
                            fontWeight:"400",
                            color:"gray"
                        }}>
                            /night
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

export {Wishlist}
