import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    statusContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    selected: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#dcdcdc",
        borderBottomWidth: 3,
        borderBottomColor: "red"
    },
    statusView: {
        flex: 1,
        flexDirection: "row",
        PaddingVertical: 10,
        borderBottomWidth: 0.6,
        borderColor: "gray"
    },
    info: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 10,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    centerAlign: {
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: "gray",
        fontWeight: "300"
    },
    subHeading: {
        fontWeight: "bold"
    },
    nightRoomInfo: {
        justifyContent: "center",
        alignItems: "center",
        borderLeftWidth: 1,
        paddingHorizontal: 6,
        borderColor: "gray"
    },
    statusInfo:{
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    statusInfoText:{
        color:"red",
        fontSize:20,
        fontWeight:"500",
        marginLeft:8
    }
});

export default styles
