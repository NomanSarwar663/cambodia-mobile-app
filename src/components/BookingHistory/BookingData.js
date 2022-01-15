import {Image, Text, View} from "react-native";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:"white",
        flex: 1,
        flexDirection: "row",
        marginTop: 30,
        marginHorizontal: 10
    },
    image: {
        width: 125,
        height: 120,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    locationText: {
        fontSize: 15,
        fontWeight: "200",
        color: "grey",
        paddingLeft:20
    },
    locationContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    }

});


function BookingData() {
    return (
        <View style={styles.wrapper}>
            <Image source={require('../home/home.jpeg')} style={styles.image}/>
            <View style={{
                paddingHorizontal: 10,
                flex: 1
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems:"center",
                    marginTop:15
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "400",
                        flex:1,
                        marginBottom: 5
                    }}>Boko Paradise</Text>
                    <Ionicons name={'chevron-forward-outline'} size={30} color={"gray"}/>
                </View>
                <View style={styles.locationContainer}>
                    <Text>
                        <Ionicons name={'location'} size={20} color={"red"}/>
                        <Text style={styles.locationText}>Siem Reap Cambodia</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

export {BookingData}
