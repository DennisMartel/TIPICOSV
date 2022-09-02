import { StyleSheet } from "react-native";
import { dimensions } from "../../utils/Themes";

const sliderTheme = StyleSheet.create({
    sliderContainer: {
        borderRadius: dimensions.width/50,
        height: dimensions.height / 4,
        justifyContent: "center",
        alignSelf: "center",
        width: "95%",
        marginTop: 10,
    }, 
    slider: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: dimensions.width/20,
        borderRadius: dimensions.width/50,
    },
    sliderImage: {
        width: "100%",
        height: "100%",
        alignSelf: "center",
        borderRadius: dimensions.width/50,
    }
});

export default sliderTheme;