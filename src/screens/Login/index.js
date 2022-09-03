import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign} from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import theme from "./theme";
import { colours, dimensions } from "../../utils/Themes";

const Login = () => {
    const login = () => {
        Keyboard.dismiss()
    }

    return (
        <ImageBackground
            source={{ uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-vegetarian-recipes-overshoot-banner-image_139051.jpg" }}
            resizeMode="cover"
            style={{ flex: 1 }}
        >
            <KeyboardAvoidingView
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
                style={{ flex: 1, alignItems: "center" }}
            >
                <View style={theme.formContainer}>
                    <Text style={theme.title}>Iniciar sesión</Text>
                    <CustomInput 
                        label="Usuario" 
                        iconName="user" 
                        placeholder="Ingresa tu usuario"
                        placeholderTextColor="rgba(0, 0, 0, 0.3)"
                        labelStyles={{ 
                            color: "white",
                            fontWeight: "bold"
                        }}
                    />

                    <CustomInput 
                        label="Contraseña" 
                        iconName="lock" 
                        placeholder="Ingresa tu contraseña" 
                        placeholderTextColor="rgba(0, 0, 0, 0.3)"
                        labelStyles={{ 
                            color: "white",
                            fontWeight: "bold"
                        }}
                        password 
                    />

                    <TouchableOpacity activeOpacity={0.8} style={theme.button} onPress={() => login()}>
                        <AntDesign 
                            name="login" 
                            size={dimensions.width / 22} 
                            color={colours.white} 
                            style={{ marginRight: 5 }}
                        />
                        <Text style={theme.labelButton}>Ingesar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default Login;