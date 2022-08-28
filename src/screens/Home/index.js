import { SafeAreaView, ScrollView, Text, View } from "react-native"
import CardsCategories from "../../components/CardsCategories"
import Header from "../../components/Header"
import ProductCard from "../../components/ProductCard"
import Slider from "../../components/Slider"
import { categories } from "../../utils/Database/categories"
import { products } from "../../utils/Database/products"
import { colours, dimensions } from "../../utils/Themes"
import theme from "./theme"

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: colours.white }}>
            <Header />
            <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false} centerContent={true} contentContainerStyle={{ alignItems: "center", paddingBottom: 120 }}>
                <Slider />
                <View style={theme.container}>
                    <Text style={theme.title}>Categorias populares</Text>
                    <ScrollView overScrollMode="never" horizontal={true} showsHorizontalScrollIndicator={false} style={theme.content}>
                        { categories.map((item, index) => <CardsCategories item={item} key={index} />)}
                    </ScrollView>

                    <Text style={{ ...theme.title, marginTop: dimensions.width / 20 }}>Últimas publicaciones</Text>
                    <View style={theme.grid}>
                        { products.map((item, index) => <ProductCard item={item} key={index} navigation={navigation} />) }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home