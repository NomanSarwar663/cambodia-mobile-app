import {Image, Keyboard, ScrollView, Text, View} from "react-native";
import * as React from "react";
import styles from "./style"
import {ImageBackground, TextInput} from "react-native";
import {Button, CheckBox} from "react-native-elements"
import {useEffect, useState} from "react";

const image = {uri: "https://i.pinimg.com/236x/0d/91/76/0d9176f10b71f4729d72a8841e1a7a41.jpg"};

function SignUpScreen({setIsLogin}) {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    })
    const [check, setCheck] = React.useState(false)
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
                <ImageBackground source={image} resizeMode="cover" style={!isKeyboardVisible ? styles.image : {
                    ...styles.image,
                    height: 800
                }}>
                    <View style={!isKeyboardVisible? styles.tinyLogo:{display:"none"}}>
                        <Image
                            source={require('../../../images/logo.png')}
                        />
                    </View>
                    <View style={!isKeyboardVisible ? styles.container : {
                        ...styles.container,
                        position: "relative",
                        marginTop: 50,
                        flex: 1
                    }}>
                        <View style={styles.header}>
                            <Text style={styles.heading}>
                                Sign Up
                            </Text>
                        </View>
                        <View style={styles.form}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <TextInput
                                    placeholder="First Name"
                                    onChangeText={firstName => setData({...data, firstName})}
                                    style={{
                                        ...styles.input,
                                        flex: 1,
                                        marginRight: 5
                                        // width:100
                                    }}
                                    value={data.firstName}
                                />
                                <TextInput
                                    placeholder="Last Name"
                                    onChangeText={lastName => setData({...data, lastName})}
                                    style={{
                                        ...styles.input,
                                        marginLeft: 5,
                                        // width:200,
                                        flex: 1,
                                        alignItems: "flex-end"
                                    }}
                                    value={data.lastName}
                                />
                            </View>
                            <TextInput
                                placeholder="Phone Number"
                                onChangeText={phoneNumber => setData({...data, phoneNumber})}
                                style={{
                                    ...styles.input,
                                }}
                                value={data.phoneNumber}
                            />
                            <TextInput
                                placeholder="Email"
                                onChangeText={email => setData({...data, email})}
                                style={{
                                    ...styles.input,
                                }}
                                value={data.email}
                            />
                            <TextInput
                                placeholder="Password"
                                onChangeText={password => setData({...data, password})}
                                style={{
                                    ...styles.input,
                                }}
                                value={data.password}
                            />

                            <CheckBox
                                center
                                title={<Text style={{
                                    paddingLeft: 4
                                }}>
                                    I have read and accept the
                                    <Text style={{
                                        ...styles.subHeading,
                                        color: "red",
                                    }}>
                                        Terms and Privacy Policy
                                    </Text>
                                </Text>}
                                checked={check}
                                onPress={() => setCheck(!check)}
                            />
                            <View style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: 30
                            }}>
                                <Button
                                    title={'Sign Up'}
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

                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: 30
                                }}>
                                    <Text style={{
                                        ...styles.subHeading,
                                    }}>
                                        Already have an account?
                                    </Text>
                                    <Text onPress={() => {
                                        setIsLogin(true)
                                    }} style={{
                                        ...styles.subHeading,
                                        color: "red",
                                        paddingLeft: 6
                                    }}>
                                        Log In
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

export {SignUpScreen}
