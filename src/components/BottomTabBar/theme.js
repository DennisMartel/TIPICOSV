import { StyleSheet } from "react-native";
import { colours, dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: "3%",
        width: dimensions.width,
        alignItems: "center",
    },
    bottomTabs: {
        alignItems: "center",
        borderRadius: dimensions.width / 50,
        flexDirection: "row",
        height: dimensions.width / 10,
        width: "95%",
        justifyContent: "space-between",
        paddingHorizontal: dimensions.width / 30,
        paddingVertical: dimensions.width / 17
    },
    btnBottomTabs: {
        // flex: 1,
        borderRadius: dimensions.width / 10,
        alignItems: "center",
        justifyContent: "center",
        height: dimensions.width / 11,
        width: dimensions.width / 11,
    }
})

export default theme;