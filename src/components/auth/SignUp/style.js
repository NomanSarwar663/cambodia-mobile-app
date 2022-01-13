import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingBottom: 20,
    },
    tinyLogo: {
        position: "absolute",
        alignItems: "center",
        right: 0,
        left: 0,
        top: 30,
        bottom: 0,
    },
    header: {
        paddingTop: 20,
        paddingLeft: 20,
        textAlign: "center",
    },
    heading: {
        fontWeight: "500",
        fontSize: 24,
        letterSpacing:-0.5,
        marginBottom: 4,
    },
    subHeading: {
        color: "black",
        fontSize: 13,
    },
    flexRow:{
        display:"flex",

    },
    form: {
        margin:20
    },
    label:{
        marginBottom: 12,
        color:"#3b444f"
    },
    input: {
        borderWidth: 1.4,
        padding: 15,
        borderRadius: 12,
        borderColor:"red",
        marginBottom: 12
    },
    image: {
        flex: 1,
        height: 700,
        justifyContent: "center"
    },

});

export default styles
