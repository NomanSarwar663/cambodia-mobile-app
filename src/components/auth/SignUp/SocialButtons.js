import {View} from "react-native";
import * as React from "react";
import {Button} from "react-native-elements"


function SocialButtons() {
    return (
        <View style={{display: "flex", flexDirection: "row",marginVertical:10}}>
            <Button
                title={'Facebook'}
                titleStyle={{
                    fontSize: 13,
                    color: "black"
                }}
                buttonStyle={{
                    borderWidth: 0,
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                    borderRadius: 20,
                }}
                containerStyle={{
                    width: 80,
                }}
                icon={{
                    name: 'facebook',
                    type: 'font-awesome',
                    size: 15,
                    color: 'blue',
                }}
                iconLeft
                iconContainerStyle={{marginRight: 10,}}
            />
            <Button
                title={'Gmail'}
                titleStyle={{
                    fontSize: 13,
                    color: "black"
                }}
                buttonStyle={{
                    borderWidth: 0,
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                    borderRadius: 20,
                }}
                containerStyle={{
                    width: 80,
                }}
                icon={{
                    name: 'google',
                    type: 'font-awesome',
                    size: 15,
                    color: 'blue',
                }}
                iconLeft
                iconContainerStyle={{marginRight: 10,}}
            />
        </View>
    );
}

export {SocialButtons}
