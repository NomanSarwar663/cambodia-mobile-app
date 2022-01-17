import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 30,
        marginHorizontal: 10
    },
    card:{
        backgroundColor:"white",
        padding:20,
        borderRadius:10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    status: {
        marginTop: 4,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        backgroundColor: "gray",
    },
    statusText: {
        fontSize: 14,
        color: "white",
        fontWeight: "300"
    },
    nA: {
        fontSize: 17,
        fontWeight: "300"
    },
    statusContainer: {
        marginLeft: 30,
        justifyContent:"center",
        alignItems:"center"
    },
    text: {
        fontSize: 17,
        fontWeight:"300",
        width:80
    },
    item: {display: "flex", flexDirection: "row",marginBottom:20,alignItems: "center"},
    input: {
        borderWidth: 0.8,
        padding: 6,
        width:200,
        borderRadius: 10,
        marginBottom: 12
    },

});

export default styles
