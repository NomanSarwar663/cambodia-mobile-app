import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from "./src/components/auth/index";
import {HomeScreen} from "./src/components/home";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {SignUpScreen} from "./src/components/auth/SignUp";
import {LoginScreen} from "./src/components/auth/Login";
import {UserAccessScreen} from "./src/components/UserAccessScreen";
import {BookingHistory} from "./src/components/BookingHistory";
import {Wishlist} from "./src/components/WishList";
import {VerificationScreen} from "./src/components/VerificationScreen";
import {UpdateVerificationData} from "./src/components/VerificationScreen/UpdateDate";


function Booking() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Booking!</Text>
        </View>
    );
}

function Favourite() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Favourite!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/*<TabNavigation/>*/}
            <DrawerNavigator/>
        </NavigationContainer>
    );
}
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="SignUp" component={SignUpScreen}/>
            <Drawer.Screen options={{
                headerShown:false
            }} name="Home" component={HomeScreen}/>
            <Drawer.Screen name="User Access Screen" component={UserAccessScreen}/>
            <Drawer.Screen name="Booking History" component={BookingHistory}/>
            <Drawer.Screen name="Wishlist" component={Wishlist}/>
            <Drawer.Screen name="Verifications" component={VerificationScreen}/>
            <Drawer.Screen name="Update Verification Data" component={UpdateVerificationData}/>
        </Drawer.Navigator>
    );
};

const TabNavigation = ()=>{
    return <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = 'home'

            } else if (route.name === 'Favourite') {
                iconName = 'heart'
            } else if (route.name === 'Account') {
                iconName = 'people-circle-sharp'
            } else if (route.name === 'Booking') {
                iconName = 'briefcase'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
    })}>
        <Tab.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
        <Tab.Screen name="Booking" component={Booking}/>
        <Tab.Screen name="Favourite" component={Favourite}/>
        <Tab.Screen name="Account" component={Account}/>
        <Tab.Screen name="UserAccessScreen" component={UserAccessScreen}/>
    </Tab.Navigator>
}
