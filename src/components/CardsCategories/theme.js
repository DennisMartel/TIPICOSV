import { StyleSheet } from "react-native";
import { colours, dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    categories: {
        alignItems: "center",
        marginRight: 18
    },
    image: {
        width: dimensions.width / 5,
        height: dimensions.width / 5,
    },
    name: {
        marginTop: 2,
        fontSize: dimensions.width / 35,
        color: colours.black,
        fontWeight: "600",
        letterSpacing: 0.5
    }
})

export default theme;