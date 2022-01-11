import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        backgroundColor: "white",
        flex: 1,
        marginTop: "50%",
        borderRadius: 30,
    },
    tinyLogo:{
        position:"absolute",
        top:50,
        left:"37%",
        alignItems: "center",
    },
    header: {
        paddingTop: 20,
        alignItems: "center",
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
    form: {
        margin:12
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
        height: 600,
        justifyContent: "center"
    },

});

export default styles
