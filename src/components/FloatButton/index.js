import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import theme from "./theme"
import { colours, dimensions } from "../../utils/Themes"

const FloatButton = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('food')} activeOpacity={0.6} style={theme.button}>
            <AntDesign name="plus" color={colours.white} size={dimensions.width*0.06} />
        </TouchableOpacity>
    )
}

export default FloatButton