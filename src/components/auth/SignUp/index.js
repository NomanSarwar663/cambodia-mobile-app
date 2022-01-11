import {Image, Text, View} from "react-native";
import * as React from "react";
import styles from "./style"
import {ImageBackground, TextInput} from "react-native";
import {Button, CheckBox} from "react-native-elements"

const image = {uri: "https://i.pinimg.com/236x/0d/91/76/0d9176f10b71f4729d72a8841e1a7a41.jpg"};

function SignUpScreen({setIsLogin}) {
    const [check,setCheck] = React.useState(false)
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
                           Sign Up
                        </Text>
                    </View>
                    <View style={styles.form}>
                       <View style={{
                           display:"flex",
                           flexDirection:"row",
                           justifyContent:"space-between"
                       }}>
                           <TextInput
                               placeholder="First Name"
                               style={{
                                   ...styles.input,
                                   flex:1,
                                   marginRight:5
                                   // width:100
                               }}
                               value={""}
                           />
                           <TextInput
                               placeholder="Last Name"
                               style={{
                                   ...styles.input,
                                   marginLeft: 5,
                                   // width:200,
                                   flex:1,
                                   alignItems:"flex-end"
                               }}
                               value={""}
                           />
                       </View>
                        <TextInput
                            placeholder="Phone Number"
                            style={{
                                ...styles.input,
                            }}
                            value={""}
                        />
                        <TextInput
                            placeholder="Email"
                            style={{
                                ...styles.input,
                            }}
                            value={""}
                        />
                        <TextInput
                            placeholder="Password"
                            style={{
                                ...styles.input,
                            }}
                            value={""}
                        />

                        <CheckBox
                            center
                            title={<Text style={{
                                    paddingLeft:4
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
                                marginTop:30
                            }}>
                                <Text style={{
                                    ...styles.subHeading,
                                }}>
                                    Already have an account?
                                </Text>
                                <Text onPress={()=>{
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
    );
}

export {SignUpScreen}
