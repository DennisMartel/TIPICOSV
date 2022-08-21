import { StyleSheet } from "react-native";
import { colours, dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    formContainer: {
        flex: 1,
        width: "95%",
        justifyContent: "center",
        marginBottom: dimensions.width / 3,
    },
    title: {
        fontSize: dimensions.width / 12,
        marginBottom: dimensions.width / 10,
        letterSpacing: 0.5
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colours.primaryColor,
        height: dimensions.width / 9,
    },
    labelButton: {
        fontSize: dimensions.width / 22,
        letterSpacing: 0.5,
        fontWeight: "400",
        color: colours.white,
    }
})

export default theme;