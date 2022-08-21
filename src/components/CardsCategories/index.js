import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import theme from "./theme";

const CardsCategories = ({ item }) => {
    return (
        <View style={theme.categories}>
            <TouchableOpacity style={theme.circles}>
                <Image source={{ uri: item.image }} resizeMode="contain" style={theme.image} />
            </TouchableOpacity>
            <Text style={theme.name}>{item.name}</Text>
        </View>
    )
}

export default CardsCategories;