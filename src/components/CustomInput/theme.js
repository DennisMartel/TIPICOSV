import { StyleSheet } from "react-native";
import { colours, dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    container: {
        marginBottom: dimensions.width / 22,
    },
    label: {
        marginBottom: dimensions.width / 50,
        fontSize: dimensions.width / 27,
        color: colours.secondaryColor,
        letterSpacing: 0.4
    },
    inputContainer: {
        height: dimensions.width / 9,
        backgroundColor: colours.white,
        flexDirection: "row",
        paddingHorizontal: dimensions.width / 30,
        borderWidth: 1,
        alignItems: "center",
    },
    icon: {
        marginRight: 10
    },
    input: {
        flex: 1
    }
})

export default theme;