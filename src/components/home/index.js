import {Image, ScrollView, Text, View} from "react-native";
import * as React from "react";
import styles from "./style"
import {ImageBackground, TextInput, Keyboard} from "react-native";
import {SearchBar, Button, Input} from "react-native-elements"
import {useState, useEffect} from "react";
import {Header} from "./Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {SearchForm} from "./SearchForm";
import {Destinations} from "./Destinations";
import {CategoryItem} from "./categoryItem";


function HomeScreen({navigation}) {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <ScrollView>
            <View style={styles.wrapper}>
                <ImageBackground source={require('./home.jpeg')} resizeMode="cover" style={styles.image}>
                    <Header navigation={navigation}/>
                    <SearchForm/>
                </ImageBackground>
                <Destinations/>
                <View style={styles.container}>
                    <View style={styles.trendingContainer}>
                        <Text style={{
                            flex: 1,
                            fontSize: 22,
                            fontWeight: "600"
                        }}>Trending</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "500"
                        }}>See All</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 30
                        }}>
                            <View style={{
                                ...styles.categories,
                                borderColor: "#1EB3F4",
                                borderWidth: 2
                            }}>
                                <Text style={{
                                    ...styles.categoryText,
                                    color: "#1EB3F4",
                                }}>Popular</Text>
                            </View>
                            <View style={styles.categories}>
                                <Text style={styles.categoryText}>Tours</Text>
                            </View>
                            <View style={styles.categories}>
                                <Text style={styles.categoryText}>Visit,Eat,Sleep</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.container}>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                </View>
            </View>
        </ScrollView>
    );
}

export {HomeScreen}
