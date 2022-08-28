import { StyleSheet } from "react-native";
import { dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    title: {
        fontSize: dimensions.width / 18,
        textAlign: "center",
        marginBottom: dimensions.width / 20,
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