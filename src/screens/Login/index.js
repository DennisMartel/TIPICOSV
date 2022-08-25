import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign} from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import theme from "./theme";
import { colours, dimensions } from "../../utils/Themes";

const Login = () => {
    const login = () => {
        Keyboard.dismiss()
    }

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
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
                    />

                    <CustomInput 
                        label="Contraseña" 
                        iconName="lock" 
                        placeholder="Ingresa tu contraseña" 
                        placeholderTextColor="rgba(0, 0, 0, 0.3)"
                        password 
                    />

                    <TouchableOpacity style={theme.button} onPress={() => login()}>
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
        </SafeAreaView>
    )
}

export default Login;