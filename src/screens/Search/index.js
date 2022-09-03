import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Header from "../../components/Header"
import { products } from "../../utils/Database/products";
import { colours, dimensions } from "../../utils/Themes";

const Search = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Header back navigation={navigation}/>
            <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false} centerContent={true} contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}>
                <View style={theme.container}>
                    {
                        products.map((item, index) => (
                            <View style={theme.card} key={index}>
                                <TouchableOpacity onPress={() => navigation.navigate('product')} activeOpacity={0.7} style={theme.contentImage}>
                                    <Image source={{ uri: item.image }} resizeMode="contain" style={theme.image} />
                                </TouchableOpacity>
                                <View style={theme.cardContent}>
                                    <Text style={theme.title} numberOfLines={2}>{item.name}</Text>
                                    <View style={theme.prices}>
                                        <Text style={theme.discountPrice}>${Number.parseFloat(item.discountPrice).toFixed(2)}</Text>
                                        <Text style={theme.normalPrice}>${Number.parseFloat(item.price).toFixed(2)}</Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const theme = StyleSheet.create({
    container: {
        width: "95%",
        marginTop: 10,
    },
    card: {
        flexDirection: "row",
        height: dimensions.width * 0.25,
        marginBottom: dimensions.width * 0.03,
        borderRadius: dimensions.width * 0.02,
        backgroundColor: colours.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.50,
        shadowRadius: 2.22,
        elevation: 3.5,
        overflow: "hidden"
    },
    contentImage: {
        height: dimensions.width * 0.25,
        width: "30%",
        backgroundColor: colours.gray,
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover"
    },
    cardContent: {
        flex: 1,
        flexDirection: "column",
        padding: dimensions.width * 0.01,
    },
    title: {
        letterSpacing: 0.2,
        opacity: 0.6,
        fontWeight: "500",
        marginBottom: dimensions.width * 0.01,
        fontSize: dimensions.width * 0.04
    },
    prices: {
        flexDirection: "row",
        marginTop: "auto"
    },
    discountPrice: {
        color: colours.primaryColor,
        fontWeight: "700",
        letterSpacing: 0.2,
        marginRight: dimensions.width * 0.01,
        fontSize: dimensions.width * 0.05
    },
    normalPrice: {
        textDecorationLine: "line-through",
        fontWeight: "500",
        opacity: 0.8,
        fontSize: dimensions.width * 0.04,
        alignSelf: "flex-end"
    }
})

export default Search;