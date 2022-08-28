import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Swiper from "react-native-swiper";
import Header from "../../components/Header"
import { categories } from "../../utils/Database/categories";
import { colours, dimensions } from "../../utils/Themes";

const Categories = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <Header />
            <ScrollView overScrollMode="never" contentContainerStyle={{ alignItems: "center", paddingBottom: 120 }}>
                <View style={theme.container}>
                    <Swiper overScrollMode='never' activeDotColor={colours.primaryColor} loop style={theme.sliderContainer}>
                        <TouchableOpacity onPress={() => alert('hi')} style={theme.slider}>
                            <Image source={{ uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-vegetarian-recipes-overshoot-banner-image_139051.jpg" }} style={theme.sliderImage} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert('hi')} style={theme.slider}>
                            <Image source={{ uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-vegetarian-recipes-overshoot-banner-image_139051.jpg" }} style={theme.sliderImage} />
                        </TouchableOpacity>
                    </Swiper>
                    <View style={theme.grid}>
                        {
                            categories.map((item, index) => (
                                <TouchableOpacity activeOpacity={0.8} style={theme.content} key={index}>
                                    <Image source={{ uri: item.image }} resizeMode="contain" style={theme.image} />
                                    <View style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                                        <Text>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const theme = StyleSheet.create({
    container: {
        width: "95%",
        marginVertical: dimensions.width/30,
        alignItems: "center"
    },
    sliderContainer: {
        height: dimensions.height/3.5,
        backgroundColor: colours.light,
        marginBottom: dimensions.width/20,
        justifyContent: "center",
        alignSelf: "center",
    },
    slider: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    sliderImage: {
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    content: {
        width: dimensions.width/2.20,
        marginBottom: dimensions.width/20,
    },
    image: {
        width: "100%",
        height: dimensions.width/3.20,
        resizeMode: "contain",
    }
})

export default Categories;