import { StyleSheet } from "react-native";
import { colours, dimensions } from '../../utils/Themes';

const searchBarTheme = StyleSheet.create({
    container: {
        marginTop: dimensions.width/40,
        flexDirection: "row",
        alignItems: "center",
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colours.white,
        height: dimensions.width/10,
        borderRadius: dimensions.width/50,
        paddingHorizontal: dimensions.width/30
    },
    iconSearch: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: dimensions.width/25,
        opacity: 0.5
    }
})

export default searchBarTheme