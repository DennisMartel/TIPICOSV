import { SafeAreaView, ScrollView, Text, View } from "react-native"
import ButtonAdd from "../../components/FloatButton"
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
        <SafeAreaView style={{ flex: 1, backgroundColor: colours.white }}>
            <Header topBar navigation={navigation}/>
            <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false} centerContent={true} contentContainerStyle={{ alignItems: "center", paddingBottom: 110}}>
                <Slider />
                <View style={theme.container}>
                    <Text style={theme.title}>Categorias populares</Text>
                    <ScrollView overScrollMode="never" horizontal={true} showsHorizontalScrollIndicator={false} style={theme.content}>
                        { categories.map((item, index) => <CardsCategories item={item} key={index} />)}
                    </ScrollView>

                    <Text style={{ ...theme.title, marginTop: dimensions.width / 20 }}>Recientes</Text>
                    <View style={theme.grid}>
                        { products.map((item, index) => <ProductCard item={item} key={index} navigation={navigation} />) }
                    </View>
                </View>
            </ScrollView>
            <ButtonAdd navigation={navigation} />
        </SafeAreaView>
    )
}

export default Home