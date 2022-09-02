import { StyleSheet } from "react-native"
import { colours, dimensions } from "../../utils/Themes"

const theme = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignSelf: "center",
    },
    btnOmit: {
        borderWidth: 1,
        borderColor: colours.primaryColor,
        alignSelf: "flex-end",
        height: dimensions.width/12,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: dimensions.width/30,
        borderRadius: 100,
        marginTop: dimensions.width/20
    },
    labelBtnOmit: {
        color: colours.primaryColor,
        fontSize: dimensions.width/24,
        letterSpacing: 1,
    },
    slider: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    image: {
        height: dimensions.height/2.5,
        width: dimensions.width/1.2,
        resizeMode: "contain",
        alignSelf: "center"
    },
    title: {
        fontSize: dimensions.width/20,
        marginBottom: dimensions.width/20,
        textAlign: "center",
        fontWeight: "bold",
        color: colours.primaryColor,
        letterSpacing: 0.3
    },
    subtitle: {
        fontSize: dimensions.width/30,
        textAlign: "center",
        opacity: 0.6,
        fontWeight: "600",
        letterSpacing: 0.2
    }
})

export default theme