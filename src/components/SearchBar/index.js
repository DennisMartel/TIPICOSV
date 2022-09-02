import { AntDesign } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { TextInput, TouchableOpacity, View } from "react-native"
import { colours, dimensions } from "../../utils/Themes"
import searchBarTheme from "./styles"

const SearchBar = ({ back, navigation }) => {
    return (
        <View style={searchBarTheme.container}>
            {
                back && (
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={1} style={{ width: "10%" }}>
                        <FontAwesome5 name="chevron-left" size={dimensions.width/15} color={colours.white} />
                    </TouchableOpacity>
                )
            }
            <View style={{ ...searchBarTheme.inputContainer }}>
                <AntDesign name="search1" color={colours.gray} size={dimensions.width/18} style={searchBarTheme.iconSearch}/>
                <TextInput 
                    placeholder="Buscar..."
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    autoComplete="off"
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={searchBarTheme.input}
                />
            </View>
        </View>
    )
}

export default SearchBar