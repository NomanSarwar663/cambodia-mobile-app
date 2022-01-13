import {Image, ScrollView, Text, View} from "react-native";
import * as React from "react";
import styles from "./style"
import {ImageBackground, TextInput, Keyboard} from "react-native";
import {Button} from "react-native-elements"
import {SocialButtons} from "./SocialButtons";
import {useState, useEffect} from "react";

const image = {uri: "https://i.pinimg.com/236x/0d/91/76/0d9176f10b71f4729d72a8841e1a7a41.jpg"};

function LoginScreen() {
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
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={!isKeyboardVisible ? styles.tinyLogo : {display: "none"}}>
                        <Image
                            source={require('../../../images/logo.png')}
                        />
                    </View>
                    <View style={!isKeyboardVisible ? styles.container : {
                        ...styles.container,
                        position: "relative",
                        marginTop:50
                    }}>
                        <View style={styles.header}>
                            <Text style={styles.heading}>
                                Log In or Create an account
                            </Text>
                            <Text style={styles.subHeading}>
                                Enter you email address to start
                            </Text>
                        </View>
                        <View style={styles.form}>
                            <Text style={styles.label}>Email Address</Text>
                            <TextInput
                                name={"email"}
                                onChangeText={(email) => {
                                    setData({...data, email})
                                }}
                                placeholder="Email Address"
                                style={styles.input}
                                value={data.email}
                            />

                            <View style={{display: "flex", flexDirection: "row"}}>
                                <Text style={{
                                    ...styles.label,
                                    flex: 1
                                }}>
                                    Enter Password
                                </Text>
                                <Text style={{
                                    ...styles.label,
                                    flex: 1,
                                    textAlign: "right",
                                    color: "red",
                                    fontSize: 12,
                                    fontWeight: "normal",
                                    paddingRight: 10
                                }}>
                                    Forgot Password
                                </Text>
                            </View>
                            <TextInput
                                onChangeText={(password) => {
                                    setData({...data, password})
                                }}
                                placeholder="Password"
                                style={styles.input}
                                value={data.password}
                            />
                            <View style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: 20
                            }}>
                                <Button
                                    title={'Login'}
                                    titleStyle={{
                                        fontWeight: "bold",
                                        fontSize: 22
                                    }}
                                    buttonStyle={{
                                        backgroundColor: "red",
                                        borderRadius: 12,
                                        paddingVertical: 12,
                                    }}
                                    containerStyle={{
                                        width: 120,
                                    }}
                                />
                                <Text style={{
                                    ...styles.subHeading,
                                    marginTop: 12,
                                }}>
                                    or login with another account
                                </Text>
                                <SocialButtons/>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <Text style={{
                                        ...styles.subHeading,
                                    }}>
                                        Do you have an account?
                                    </Text>
                                    <Text onPress={() => setIsLogin(false)} style={{
                                        ...styles.subHeading,
                                        color: "red",
                                        paddingLeft: 6
                                    }}>
                                        SIGNUP
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

export {LoginScreen}
