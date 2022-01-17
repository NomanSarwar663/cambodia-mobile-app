import {Image, Text, TextInput, View} from "react-native";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style"
import {Button, Divider} from "react-native-elements";
import {useState} from "react";


function UpdateVerificationData() {
    const [data,setData] = useState('')
    return (
        <View style={styles.wrapper}>
            <View style={styles.card}>
                <View style={styles.item}>
                    <Text style={styles.text}>Phone:</Text>
                    <View style={styles.statusContainer}>
                        <TextInput
                            placeholder=""
                            onChangeText={value => setData( value)}
                            style={{
                                ...styles.input,
                            }}
                            value={data}
                        />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>ID CARD:</Text>
                    <View style={styles.statusContainer}>
                        <View style={styles.status}>
                            <Text style={styles.statusText}>Select File</Text>
                        </View>
                    </View>
                </View>
                <Divider width={1} color={"gray"}/>
                <View style={{
                    alignItems:"flex-end",
                    marginTop:15
                }}>
                    <Button
                        title={'Save Change'}
                        titleStyle={{
                            fontWeight: "400",
                            fontSize: 16
                        }}
                        buttonStyle={{
                            backgroundColor: "#F60E4A",
                            borderRadius: 10,
                            paddingVertical: 5,
                        }}
                        icon={<Ionicons style={{marginRight:8}} name="save-outline" size={18} color={"white"}/>}
                        containerStyle={{
                            width: 150,
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export {UpdateVerificationData}
