import React, { useContext, useEffect, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
    Text,
    Modal,
    SafeAreaView,
    TouchableOpacity,
    Animated,
    View,
    Image,
    StyleSheet
} from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer'
import { FontAwesome5 } from "@expo/vector-icons"
import Swiper from "react-native-swiper";
import { colours, dimensions } from "../../utils/Themes"
import { products } from '../../utils/Database/products'
import Header from "../../components/Header"
import FavoritesContext from "../../context/Favorites/FavoritesContext";

const BANNER_H = dimensions.height / 2.6

const Product = ({ navigation, route }) => {
    const { id } = route.params
    const { addToFavorites } = useContext(FavoritesContext)
    const [showModal, setShowModal] = useState(false)
    const [productInfo, setProductInfo] = useState({})
    const [images, setImages] = useState([])
    const [imageZoom, setImageZoom] = useState(0)
    const scrollA = useRef(new Animated.Value(0)).current

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            for (let index = 0; index < products.length; index++) {
                if (products[index].id == id) {
                    setProductInfo(products[index])
                    setImages([{ url: products[index].image}])
                    return
                }
            }
        });
      
        return unsubscribe;
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Header back navigation={navigation} />

            <Modal visible={showModal} transparent>
                <ImageViewer
                    index={imageZoom}
                    imageUrls={images}
                    enablePreload
                    saveToLocalByLongPress
                />
                <TouchableOpacity onPress={() => setShowModal(false)} style={{ position: "absolute", top: dimensions.width / 10, left: dimensions.width / 30 }}>
                    <AntDesign name="closecircleo" color="white" size={dimensions.width / 10} />
                </TouchableOpacity>
            </Modal>

            <Animated.ScrollView
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
                contentContainerStyle={{ alignItems: "center" }}
            >

                <View style={styles.bannerContainer}>
                    <Animated.View style={styles.banner(scrollA)}>
                        <TouchableOpacity style={{ 
                                position: "absolute", 
                                right: dimensions.width*0.03, 
                                top: dimensions.width*0.03, 
                                backgroundColor: colours.light, 
                                height: dimensions.width*0.12,
                                width: dimensions.width*0.12,
                                borderRadius: 100,
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 10, 
                            }}
                            activeOpacity={0.8}
                            onPress={() => addToFavorites(productInfo)}
                        >
                            <AntDesign name="heart" color={colours.primaryColor} size={dimensions.width*0.05} />
                        </TouchableOpacity>
                        <Swiper
                            key={images.length}
                            showsButtons
                            activeDotColor={colours.primaryColor}
                            height={dimensions.height / 2.6}
                            prevButton={<FontAwesome5 name="chevron-left" size={dimensions.width*0.05} color={colours.primaryColor} />}
                            nextButton={<FontAwesome5 name="chevron-right" size={dimensions.width*0.05} color={colours.primaryColor} />}
                            removeClippedSubviews={false}
                        >
                            {images.map((item, index) => (
                                <TouchableOpacity key={index} activeOpacity={1} style={styles.slider} onPress={() => {
                                    setShowModal(true)
                                    setImageZoom(index)
                                }}>
                                    <Image source={{ uri: item.url }} resizeMode="cover" style={styles.sliderImage} />
                                </TouchableOpacity>
                            ))}
                        </Swiper>
                    </Animated.View>
                </View>

                <View style={{ width: "95%", marginVertical: dimensions.width*0.03 }}>
                    <Text style={{ fontWeight: "400", fontSize: dimensions.width*0.07, opacity: 0.7 }}>{productInfo?.name}</Text>
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        alignItems: 'center',
        overflow: 'hidden',
    },
    banner: scrollA => ({
        height: BANNER_H,
        position: "relative",
        transform: [
            {
                translateY: scrollA.interpolate({
                    inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
                    outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
                }),
            },
            // {
            //     scale: scrollA.interpolate({
            //         inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
            //         outputRange: [2, 1, 0.5, 0.5],
            //     }),
            // },
        ],
    }),
    sliderImage: {
        width: "100%",
        height: "100%",
        alignSelf: "center",
        resizeMode: "cover"
    }
});

export default Product