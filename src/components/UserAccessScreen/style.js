import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "white",
    },
    buttonContainer: {
        backgroundColor: "gray",
        marginTop: 20,
        borderRadius: 5,
        buttonText: {
            color: "white",

            paddingVertical: 10,
            paddingHorizontal: 20,
            fontSize: 20,
            fontWeight: "600",

        }
    },
    listContainer: {
        marginTop: 30,
        marginLeft: 20
    },
    list: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop:15
    },
    listText: {
        fontSize: 20,
        fontWeight: "500"
    }

});

export default styles
