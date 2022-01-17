import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import styles from "./style"
import {Avatar} from "react-native-elements"
import {avatarImage} from "./Avatar";
import Ionicons from "react-native-vector-icons/Ionicons";

const listItems = [
    {icon: "time-outline", title: "Booking History"},
    {icon: "heart-outline", title: "Wishlist"},
    {icon: "card-outline", title: "Verifications",href:"Update Verification Data"},
    {icon: "person-outline", title: "My Profile"},
    {icon: "lock-closed-outline", title: "Change Password"},
    {icon: "lock-closed-outline", title: "Logout"},
]

function UserAccessScreen(props) {
    return (
        <View style={styles.wrapper}>
            <ScrollView>
                <View>
                    <View style={{
                        marginTop: 20,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Avatar
                            size="xlarge"
                            rounded
                            source={avatarImage}/>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonContainer.buttonText}>
                                Customer
                            </Text>
                        </View>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 22,
                            fontWeight: "600"
                        }}>
                            LISA MONOBAN
                        </Text>
                        <Text style={{
                            marginTop: 4,
                            color: "gray",
                            fontSize: 15
                        }}>
                            Member Since Dec 2021
                        </Text>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonContainer.buttonText}>
                                Become a vendor
                            </Text>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        {
                            listItems.map((item,index) => {
                                return <TouchableOpacity
                                    key={index}
                                    onPress={()=>{
                                    props.navigation.navigate(item.href||item.title)
                                }}>
                                    <View key={item.title} style={styles.list}>
                                        <View style={{marginRight: 5}}>
                                            <Ionicons name={item.icon} color={"red"} size={30}/>
                                        </View>
                                        <Text style={styles.listText}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export {UserAccessScreen}
