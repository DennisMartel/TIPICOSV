import { StyleSheet } from "react-native";
import { colours, dimensions } from '../../utils/Themes';

const searchBarTheme = StyleSheet.create({
    searchBar: {
        marginVertical: dimensions.width / 50
    },
    inputSearch: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: dimensions.width / 25,
        paddingVertical: dimensions.width / 80,
        backgroundColor: colours.white
    }
})

export default searchBarTheme