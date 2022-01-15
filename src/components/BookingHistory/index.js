import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import styles from "./style"
import {useState, useEffect} from "react";
import {BookingData} from "./BookingData";
import Ionicons from "react-native-vector-icons/Ionicons";
const status = [
    'Completed','Processing','Cancelled','Confirmed','Paid'
]

function BookingHistory() {
    const [selected,setSelected] = useState("Completed")

    return (
        <View style={styles.wrapper}>
            <ScrollView>
                <View>
                 <ScrollView horizontal={true}>
                     <View style={styles.statusView}>
                         {
                             status.map(item => {
                                 return <TouchableOpacity onPress={() => setSelected(item)}>
                                     <View  key={item}
                                           style={styles[selected !== item ? 'statusContainer' : 'selected']}>
                                         <Text>{item}</Text>
                                     </View>
                                 </TouchableOpacity>
                             })
                         }
                     </View>
                 </ScrollView>
                </View>
               <BookingData/>
                <View style={styles.info}>
                    <View style={styles.centerAlign}>
                        <Text style={styles.heading}>Check In</Text>
                        <Text style={styles.subHeading}>14 Dec 21</Text>
                    </View>
                    <Ionicons name={'arrow-forward-outline'} size={30} color={"gray"}/>
                    <View style={styles.centerAlign}>
                        <Text style={styles.heading}>Check Out</Text>
                        <Text style={styles.subHeading}>14 Dec 21</Text>
                    </View>
                    <View style={styles.nightRoomInfo}>
                        <Text style={{
                            color:"gray",
                            marginBottom:6
                        }}>Night</Text>
                        <Text style={{
                            fontWeight:"500",
                        }}>1</Text>
                    </View>
                    <View style={styles.nightRoomInfo}>
                        <Text style={{
                            color:"gray",
                            marginBottom:6
                        }}>Room</Text>
                        <Text style={{
                            fontWeight:"500",
                        }}>1</Text>
                    </View>
                </View>
                <View style={styles.statusInfo}>
                    <Ionicons name={'checkmark-circle'}
                              color={selected!=="Cancelled"?'green':'red'} size={30}/>
                    <Text style={{
                        ...styles.statusInfoText,
                        color: selected !== "Cancelled"?"green":'red'
                    }}>{selected} on 14 Dec 2021</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export {BookingHistory}
