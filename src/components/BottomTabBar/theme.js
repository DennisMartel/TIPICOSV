import { StyleSheet } from "react-native";
import { colours, dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    container: {
        width: dimensions.width,
        bottom: dimensions.width * 0.01,
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: dimensions.width * 0.01
    },
    bottomTabs: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colours.primaryColor,
        height: dimensions.width*0.15,
        width: "95%",
        padding: dimensions.width * 0.03,
        borderRadius: dimensions.width * 0.10
    },
    btnBottomTabs: {
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        height: dimensions.width * 0.12,
        width: dimensions.width * 0.12,
    }
})

export default theme;