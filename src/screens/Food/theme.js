import { StyleSheet } from "react-native";
import { colours, dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    container: {
        width: "95%",
    },
    gallery: {

    },
    btnGallery: {
        backgroundColor: colours.primaryColor,
        height: dimensions.width * 0.10,
        width: dimensions.width * 0.10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: dimensions.width * 0.02
    },
    contentGallery: {
        backgroundColor: colours.gray,
        padding: dimensions.width * 0.05,
        borderRadius: dimensions.width * 0.02,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default theme;