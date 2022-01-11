import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LoginScreen} from "./src/components/auth/Login";

function HomeScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
        </View>
    );
}



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
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home'

                    } else if (route.name === 'Favourite') {
                        iconName = 'heart'
                    }else if (route.name === 'Account') {
                        iconName = 'people-circle-sharp'
                    }else if (route.name === 'Booking') {
                        iconName = 'briefcase'
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Booking" component={Booking}/>
                <Tab.Screen name="Favourite" component={Favourite}/>
                <Tab.Screen name="Account" component={LoginScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
