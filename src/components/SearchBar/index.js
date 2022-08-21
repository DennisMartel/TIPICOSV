import { TextInput, View } from "react-native"
import searchBarTheme from "./styles"

const SearchBar = () => {
    return (
        <View style={searchBarTheme.searchBar}>
            <TextInput
                placeholder='¿Deseas buscar algo podemos ayudarte?' 
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                style={searchBarTheme.inputSearch} 
                onFocus={() => alert('change')}
            />
        </View>
    )
}

export default SearchBar