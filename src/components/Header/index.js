import { View, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import SearchBar from '../SearchBar';
import headerTheme from './styles';
import { colours } from '../../utils/Themes';

const Header = () => {
    return (
        <>
            <StatusBar backgroundColor={colours.primaryColor} />
            <View style={headerTheme.header}>
                <SearchBar />
            </View>
        </>
    )
}

export default Header