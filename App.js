import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
            <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
            >
                Login with Facebook
            </Icon.Button>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
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
                <Tab.Screen name="Booking" component={SettingsScreen}/>
                <Tab.Screen name="Favourite" component={SettingsScreen}/>
                <Tab.Screen name="Account" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
