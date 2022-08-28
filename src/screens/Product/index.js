import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, Image, Modal, Platform, SafeAreaView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import ImageViewer from 'react-native-image-zoom-viewer';
import { colours, dimensions } from "../../utils/Themes";

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = dimensions.height / 2;

const Product = () => {
    const [showModal, setShowModal] = useState(false);

    const images = [
        { url: "https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" },
        { url: "https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" }
    ]
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "https://almacenesbomba.com/producto/330293/detalle",
                url: "https://almacenesbomba.com/producto/330293/detalle",
                title: "TIPICOSV"
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) { } 
                else { }
            } else if (result.action === Share.dismissedAction) { }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <Modal
                visible={showModal}
                transparent
            >
                <ImageViewer 
                    imageUrls={images}
                    enablePreload
                    saveToLocalByLongPress
                />
                <TouchableOpacity onPress={() => setShowModal(false)} style={{ position:"absolute", top: dimensions.width/10, left: dimensions.width/30 }}>
                    <AntDesign name="closecircleo" color="white" size={dimensions.width/10}/>
                </TouchableOpacity>
            </Modal>
            <ImageHeaderScrollView
                showsVerticalScrollIndicator={false}
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                maxOverlayOpacity={0.6}
                minOverlayOpacity={0.2}
                renderForeground={() => (
                    <TouchableOpacity activeOpacity={1} onPress={() => setShowModal(true)} style={{ width: dimensions.width, height: MAX_HEIGHT }}>
                        <Image source={{ uri: "https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" }} style={theme.image} />
                    </TouchableOpacity>
                )}
                renderHeader={() => (
                    <Image source={{ uri: "https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" }} style={theme.image} />
                )}
                style={{ flex: 1 }}
            >
                <View style={{ alignItems: "center" }}>
                    <TriggeringView style={{ width: "95%", marginVertical: dimensions.width / 30 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1, marginRight: dimensions.width / 10 }}>
                                <Text style={{ opacity: 0.7, letterSpacing: 0.3, fontSize: dimensions.width / 24, fontWeight: "500" }} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                            </View>
                            <TouchableOpacity onPress={onShare}>
                                <AntDesign name="sharealt" size={dimensions.width / 13} color={colours.black} />
                            </TouchableOpacity>
                        </View>
                    </TriggeringView>
                </View>
            </ImageHeaderScrollView>

            <View style={{ paddingVertical: dimensions.width / 50, borderTopColor: colours.light, borderTopWidth: 1, alignItems: "center" }}>
                <View style={{ width: "95%", flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={{ paddingHorizontal: dimensions.width / 40, height: dimensions.width / 10, marginRight: dimensions.width / 30, alignItems: "center", justifyContent: "center" }}>
                        <AntDesign name="hearto" color={colours.primaryColor} size={dimensions.width / 15} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ flex: 1, backgroundColor: colours.primaryColor, height: dimensions.width / 10, alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                        <AntDesign name="shoppingcart" color={colours.white} size={dimensions.width / 20} style={{ marginRight: 10 }} />
                        <Text style={{ color: colours.white, fontWeight: "700", letterSpacing: 1, fontSize: dimensions.width / 25 }}>Añadir al pedido</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const theme = StyleSheet.create({
    image: {
        width: dimensions.width,
        height: MAX_HEIGHT,
        resizeMode: "cover",
        alignSelf: "center"
    }
})

export default Product