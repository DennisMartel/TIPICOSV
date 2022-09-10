import { AntDesign } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colours, dimensions } from "../../utils/Themes";
import theme from "./theme";

const ProductCard = ({ item, navigation }) => {
    return (
        <View style={theme.card}>
            <TouchableOpacity activeOpacity={0.8} style={theme.imageTop} onPress={() => navigation.navigate("product", { id: item.id})}>
                <Image source={{ uri: item.image }} resizeMode="cover" style={theme.image} />
            </TouchableOpacity>
            <View style={theme.cardBody}>
                <Text numberOfLines={2} style={theme.name}>{item.name}</Text>
                <View style={theme.reviews}>
                    <AntDesign name="star" color={item.review >= 1 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon}/>
                    <AntDesign name="star" color={item.review >= 2 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon}/>
                    <AntDesign name="star" color={item.review >= 3 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon}/>
                    <AntDesign name="star" color={item.review >= 4 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon}/>
                    <AntDesign name="star" color={item.review >= 5 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon}/>
                </View>
            </View>
        </View>
    )
}

export default ProductCard;