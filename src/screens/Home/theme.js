import { StyleSheet } from "react-native";
import { dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    title: {
        fontSize: dimensions.width / 22,
        marginBottom: dimensions.width / 20,
        opacity: 0.7
    },
    container: {
        marginTop: 20,
        width: "95%",
    },
    grid: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
})

export default theme;