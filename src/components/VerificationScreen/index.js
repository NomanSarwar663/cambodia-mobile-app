import {Image, Text, View} from "react-native";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style"
import {Button, Divider} from "react-native-elements";


function VerificationScreen(props) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.card}>
                <View style={styles.item}>
                    <Text style={styles.text}>Phone:</Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.nA}>N/A</Text>
                        <View style={styles.status}>
                            <Text style={styles.statusText}>Not Verified</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>ID CARD:</Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.nA}>N/A</Text>
                        <View style={styles.status}>
                            <Text style={styles.statusText}>Not Verified</Text>
                        </View>
                    </View>
                </View>
                <Divider width={1} color={"gray"}/>
                <View style={{
                    alignItems:"flex-end",
                    marginVertical:10
                }}>
                    <Button
                        title={'Update verification data'}
                        titleStyle={{
                            fontWeight: "400",
                            fontSize: 16
                        }}
                        onPress={()=>{
                            props.navigation.navigate("Update Verification Data")
                        }}
                        buttonStyle={{
                            backgroundColor: "#F60E4A",
                            borderRadius: 10,
                            paddingVertical: 5,
                        }}
                        icon={<Ionicons name="create-outline" size={18} color={"white"}/>}
                        containerStyle={{
                            width: 210,
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export {VerificationScreen}
