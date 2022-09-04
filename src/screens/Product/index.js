import React, { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
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
import Header from "../../components/Header"
import AlertComponent from "../../components/Alert"

const BANNER_H = dimensions.height / 2.6

const Product = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const scrollA = useRef(new Animated.Value(0)).current;

    const images = [
        { url: "https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" },
        { url: "https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" }
    ]

    const addToFavorites = () => {
        AlertComponent("Platillo típico agregado a favoritos", false)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Header back navigation={navigation} />

            <Modal visible={showModal} transparent>
                <ImageViewer
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
                        <TouchableOpacity 
                            style={{ 
                                    position: "absolute", 
                                    right: dimensions.width*0.03, 
                                    top: dimensions.width*0.03, 
                                    backgroundColor: colours.light, 
                                    height: dimensions.width *0.12,
                                    width: dimensions.width *0.12,
                                    borderRadius: 100,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 10, 
                                }}
                                activeOpacity={0.8}
                                onPress={() => addToFavorites()}
                            >
                            <AntDesign name="heart" color={colours.primaryColor} size={dimensions.width*0.05} />
                        </TouchableOpacity>
                        <Swiper
                            key={2}
                            showsButtons
                            activeDotColor={colours.primaryColor}
                            height={dimensions.height / 2.6}
                            prevButton={<FontAwesome5 name="chevron-left" size={dimensions.width*0.05} color={colours.primaryColor} />}
                            nextButton={<FontAwesome5 name="chevron-right" size={dimensions.width*0.05} color={colours.primaryColor} />}
                            removeClippedSubviews={false}
                        >
                            <TouchableOpacity activeOpacity={1} style={styles.slider} onPress={() => setShowModal(true)}>
                                <Image source={{ uri: "https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" }} resizeMode="cover" style={styles.sliderImage} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} style={styles.slider} onPress={() => setShowModal(true)}>
                                <Image source={{ uri: "https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" }} resizeMode="cover" style={styles.sliderImage} />
                            </TouchableOpacity>
                        </Swiper>
                    </Animated.View>
                </View>

                <View style={{ width: "95%" }}>
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