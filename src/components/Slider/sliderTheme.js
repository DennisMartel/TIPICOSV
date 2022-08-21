import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const sliderTheme = StyleSheet.create({
    sliderContainer: {
        height: height / 3.2,
        justifyContent: "center",
        alignSelf: "center",
    }, 
    slider: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    sliderImage: {
        width: "100%",
        height: "100%",
        alignSelf: "center",
    }
});

export default sliderTheme;