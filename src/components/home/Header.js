import {View} from "react-native";
import * as React from "react";
import styles from "./style"
import Ionicons from "react-native-vector-icons/Ionicons";


function Header() {
    return (
        <View style={styles.header}>
            <Ionicons style={{flex: 1}} name={'ios-menu'} size={40} color={'#fff'}/>
            <Ionicons name={'ios-notifications'} size={40} color={'#fff'}/>
        </View>
    );
}

export {Header}
