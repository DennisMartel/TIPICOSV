import { StyleSheet } from "react-native";
import { colours, dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    button: {
        position: "absolute",
        bottom: dimensions.height * 0.02,
        right: dimensions.width * 0.02,
        backgroundColor: colours.primaryColor,
        width: dimensions.width * 0.13,
        height: dimensions.width *0.13,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        shadowColor: colours.primaryColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 2.22,
        shadowOpacity: 0.50,
        elevation: 3,
    }
})

export default theme