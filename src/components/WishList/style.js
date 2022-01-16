import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        marginTop: 30,
        marginHorizontal: 10
    },
    image: {
        width: 125,
        height: 130,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    locationText: {
        fontSize: 12,
        fontWeight: "300",
        paddingLeft: 20
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
    }

});

export default styles
