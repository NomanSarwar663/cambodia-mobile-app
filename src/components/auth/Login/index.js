import {Image, Text, View} from "react-native";
import * as React from "react";
import styles from "./style"
import {ImageBackground, TextInput} from "react-native";
import {Button} from "react-native-elements"
import {SocialButtons} from "./SocialButtons";

const image = {uri: "https://i.pinimg.com/236x/0d/91/76/0d9176f10b71f4729d72a8841e1a7a41.jpg"};

function LoginScreen() {
    return (
        <View style={styles.wrapper}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.tinyLogo}>
                    <Image
                        source={require('../../../images/logo.png')}
                    />
                </View>
                <View style={styles.container}>
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
                            placeholder="Email Address"
                            style={styles.input}
                            value={""}
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
                            placeholder="Password"
                            style={styles.input}
                            value={""}
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
                                <Text onPress={()=> setIsLogin(false)} style={{
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
    );
}

export {LoginScreen}
