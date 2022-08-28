import { Image, Text, TouchableOpacity, View } from "react-native";
import theme from "./theme";

const ProductCard = ({ item, navigation }) => {
    return (
        <View style={theme.card}>
            <TouchableOpacity style={theme.imageTop} onPress={() => navigation.navigate("product", { id: item.id})}>
                <Image source={{ uri: item.image }} resizeMode="stretch" style={theme.image} />
            </TouchableOpacity>
            <View style={theme.cardBody}>
                <Text numberOfLines={2} style={theme.name}>{item.name}</Text>
                <View style={theme.price}>
                    <Text style={theme.discountPrice}>${(item.discountPrice).toFixed(2)}</Text>
                    <Text style={theme.normalPrice}>${(item.price).toFixed(2)}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductCard;