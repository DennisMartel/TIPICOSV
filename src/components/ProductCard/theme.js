import { StyleSheet } from "react-native";
import { colours, dimensions } from "../../utils/Themes";

const theme = StyleSheet.create({
    card: {
        flexDirection: "column",
        width: dimensions.width / 2.20,
        backgroundColor: colours.white,
        shadowColor: colours.black,
        marginBottom: dimensions.width / 20,
        borderRadius: 4,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 2.22,
        elevation: 5
    },
    imageTop: {
        width: "100%",
        height: dimensions.width / 2.8,
        borderRadius: 4
    },
    image: {
        width: "100%",
        height: dimensions.width / 2.8,
        resizeMode: "contain",
        borderRadius: 4
    },
    cardBody: {
        flex: 1,
        paddingHorizontal: dimensions.width / 40,
        paddingVertical: dimensions.width / 40,
        flexDirection: "column",
    },
    name: {
        color: colours.black,
        fontSize: dimensions.width / 28,
        fontWeight: "700",
        letterSpacing: 0.4,
    },
    reviews: {
        flexDirection: "row",
        marginTop: "auto"
    },
    startIcon: {
        marginRight: dimensions.width * 0.01,
    }
})

export default theme;