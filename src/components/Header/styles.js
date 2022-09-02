import { StyleSheet } from "react-native";
import { colours, dimensions } from "../../utils/Themes";

const headerTheme = StyleSheet.create({
    header: {
        backgroundColor: colours.primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },  
    topBar: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    brandLogo: {
        color: colours.white,
        fontSize: dimensions.width/15,
        fontWeight: "bold",
    },
    bell: {
        position: "relative",
    },
    badge: {
        position: "absolute",
        backgroundColor: colours.yellow,
        borderRadius: 100,
        zIndex: 10,
        padding: 3,
        top: -10,
        left: 14
    }
})

export default headerTheme