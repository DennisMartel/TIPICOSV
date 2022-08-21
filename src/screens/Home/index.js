import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import CardsCategories from "../../components/CardsCategories"
import Header from "../../components/Header"
import ProductCard from "../../components/ProductCard"
import Slider from "../../components/Slider"
import { categories } from "../../utils/Database/categories"
import { products } from "../../utils/Database/products"
import { colours, dimensions } from "../../utils/Themes"

const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: colours.white }}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} centerContent={true} contentContainerStyle={{ alignItems: "center", paddingBottom: 120 }}>
                <Slider />
                <View style={theme.container}>
                    <Text style={theme.title}>Categorias populares</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={theme.content}>
                        { categories.map((item, index) => <CardsCategories item={item} key={index} />)}
                    </ScrollView>

                    <Text style={{ ...theme.title, marginTop: dimensions.width / 20 }}>Últimas recetas</Text>
                    <View style={theme.grid}>
                        { products.map((item, index) => <ProductCard item={item} key={index} />) }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const theme = StyleSheet.create({
    title: {
        fontSize: dimensions.width / 18,
        textAlign: "center",
        marginBottom: dimensions.width / 20,
    },
    container: {
        marginTop: 20,
        width: "95%",
    },
    grid: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
})

export default Home