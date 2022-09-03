import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import Swiper from "react-native-swiper"
import { colours } from "../../utils/Themes"
import theme from "./theme"

const Onboarding = ({ skip }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <StatusBar backgroundColor={colours.primaryColor} />
            <View style={theme.sliderContainer}>
                <TouchableOpacity style={theme.btnOmit} onPress={() => skip()}>
                    <Text style={theme.labelBtnOmit}>Omitir</Text>
                </TouchableOpacity>
                <Swiper 
                    bounces={true}
                    showsButtons={false}
                    activeDotColor={colours.primaryColor}
                    containerStyle={theme.wrapper}
                    key={3}
                    removeClippedSubviews={false}
                >
                    <View style={theme.slider}>
                        <Image
                            source={require('../../assets/Onboardings/onboarding.png')}
                            resizeMode="contain"
                            style={theme.image}
                        />
                        <Text style={theme.title}>Descubre nuevos platillos típicos</Text>
                        <Text style={theme.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <View style={theme.slider}>
                        <Image
                            source={require('../../assets/Onboardings/onboarding2.png')}
                            resizeMode="contain"
                            style={theme.image}
                        />
                        <Text style={theme.title}>Disfruta en familia o amigos</Text>
                        <Text style={theme.subtitle}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
                    </View>
                    <View style={theme.slider}>
                        <Image
                            source={require('../../assets/Onboardings/onboarding3.png')}
                            resizeMode="contain"
                            style={theme.image}
                        />
                        <Text style={theme.title}>Encuentra lo que más te guste</Text>
                        <Text style={theme.subtitle}>Contrary to popular belief, Lorem Ipsum is not simply random text</Text>
                    </View>
                </Swiper>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding