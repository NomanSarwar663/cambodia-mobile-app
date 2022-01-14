import {Text, TextInput, View} from "react-native";
import * as React from "react";
import styles from "./style"
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import {Button} from "react-native-elements";
import {useState} from "react";


function SearchForm() {
    const [inputOne,setInputOne]=useState('')
    const [inputTwo,setInputTwo]=useState('')
    return (
        <View style={{
            paddingHorizontal: 30,
            marginTop: 20
        }
        }>
            <Text style={styles.headerHeading}>
                Where do you want to explore?
            </Text>
            <View style={{
                position: "relative",
                marginTop: 20
            }}>
                <Ionicons
                    style={styles.inputIcons}
                    name={"ios-search"}
                    color={"grey"}
                    size={30}/>
                <TextInput
                    name={"email"}
                    onChangeText={e=>setInputOne(e)}
                    value={inputOne}
                    placeholder="Where do you want to go?"
                    style={{
                        borderRadius: 20,
                        height: 60,
                        paddingLeft: 60,
                        fontSize: 18,
                        backgroundColor: "white"
                    }}
                />
            </View>
            <View style={{
                position: "relative",
                marginTop: 10
            }}>
                <Icon
                    style={styles.inputIcons}
                    name={"th-large"}
                    color={"grey"}
                    size={30}/>
                <TextInput
                    placeholder="Category"
                    onChangeText={e => setInputTwo(e)}
                    value={inputTwo}
                    style={{
                        borderRadius: 20,
                        height: 60,
                        paddingLeft: 60,
                        fontSize: 18,
                        backgroundColor: "white"
                    }}
                />
            </View>
            <Button
                title={'Search'}
                titleStyle={{
                    fontWeight: "bold",
                    fontSize: 22
                }}
                buttonStyle={{
                    backgroundColor: "#FF7A33",
                    borderRadius: 15,
                    paddingVertical: 12,
                    marginTop: 8,
                    marginBottom: 25,
                }}
            />
        </View>
    );
}

export {SearchForm}
