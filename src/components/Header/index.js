import { View, TouchableOpacity, Image, TextInput, StatusBar, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SearchBar from '../SearchBar';
import headerTheme from './styles';
import { colours, dimensions } from '../../utils/Themes';

const Header = ({ navigation, back, topBar }) => {
    return (
        <>
            <StatusBar backgroundColor={colours.primaryColor} />
            <View style={headerTheme.header}>
                {
                    topBar && (
                        <View style={headerTheme.topBar}>
                            <Text style={headerTheme.brandLogo}>TipicoSV.</Text>
                            <TouchableOpacity style={headerTheme.bell}>
                                <FontAwesome name="bell" color={colours.white} size={dimensions.width/15} />
                            </TouchableOpacity>
                        </View>
                    )
                }
                <SearchBar back={back} navigation={navigation} />
            </View>
        </>
    )
}

export default Header