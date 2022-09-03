import { Picker } from '@react-native-picker/picker'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { colours, dimensions } from '../../utils/Themes';
import theme from './theme';

const CustomInputSelect = ({ children, label, labelStyles, iconName, error, onFocus = () => {}, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
        <View style={theme.container}>
            <Text style={{ ...theme.label, ...labelStyles }}>{label}</Text>
            <View style={{ 
                ...theme.inputContainer, 
                borderColor: error 
                    ?  colours.primaryColor
                    : isFocused
                    ? colours.gray
                    : colours.light
            }}>
                <AntDesign name={iconName} size={dimensions.width / 20} style={theme.icon} color={colours.gray} />
                <Picker
                    onFocus={() => {
                        onFocus(),
                        setIsFocused(true)
                    }}
                    onBlur={() => {
                        setIsFocused(false)
                    }}
                    style={theme.input}
                    {...props}
                >
                    <Picker.Item label={label} value={null} />
                    {children}
                </Picker>
            </View>
            { error && <Text>{error}</Text> }
        </View>
    )
}

export default CustomInputSelect