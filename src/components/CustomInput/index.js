import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { AntDesign, Feather} from "@expo/vector-icons";
import theme from "./theme";
import { colours, dimensions } from "../../utils/Themes";

const CustomInput = ({ label, labelStyles, iconName, error, onFocus = () => {}, password, ...props }) => {
    const [hidePassword, setHidePassword] = useState(password);
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
                <TextInput 
                    autoComplete="off"
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus(),
                        setIsFocused(true)
                    }}
                    onBlur={() => {
                        setIsFocused(false)
                    }}
                    secureTextEntry={hidePassword}
                    style={theme.input}
                    {...props}
                />
                {
                    password && (
                        <Feather 
                            onPress={() => setHidePassword(!hidePassword)}
                            name={!hidePassword ? 'eye-off' : 'eye'}
                            size={dimensions.width / 20}
                            color={colours.gray}
                        />
                    )
                }
            </View>
            { error && <Text>{error}</Text> }
        </View>
    )
}

export default CustomInput;