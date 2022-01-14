import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header:{
        display:"flex",
        marginTop:60,
        flexDirection:"row",
        paddingHorizontal:30
    },
    headerHeading: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold"
    },
    inputIcons: {
        position: "absolute",
        maxWidth:40,
        zIndex: 1000,
        top: 15,
        right: 0,
        left: 15,
        bottom: 0,
    },
    plansContainer: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 20
    },
    container: {
        backgroundColor: "white",
        paddingHorizontal: 20,
    },
    categories: {
        backgroundColor: "#E9E6E4",
        minWidth: 110,
        height: 40,
        paddingHorizontal:9,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginRight:20,
    },
    categoryText: {
        color:"grey",
        fontSize: 18
    },
    destinationHeading: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    trendingContainer: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 30
    },
    image: {
        flex: 1,
    },

});

export default styles
