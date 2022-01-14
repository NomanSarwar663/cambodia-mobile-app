import {ScrollView, Text, View} from "react-native";
import * as React from "react";
import styles from "./style"
import {DestinationItem} from "./DestinationItem";
import {PlanTrip} from "./PlanTrip";


function Destinations() {
    return (
        <View style={styles.container}>
            <Text style={styles.destinationHeading}>Types of destinations</Text>
            <ScrollView horizontal={true}>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                }}>
                    <DestinationItem/>
                    <DestinationItem/>
                    <DestinationItem/>
                    <DestinationItem/>
                </View>
            </ScrollView>
            <ScrollView horizontal={true}>
                <View style={styles.plansContainer}>
                    <PlanTrip/>
                    <PlanTrip/>
                    <PlanTrip/>
                    <PlanTrip/>
                </View>
            </ScrollView>
        </View>
    );
}

export {Destinations}
