import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import sliderTheme from './sliderTheme';
import { colours, dimensions } from '../../utils/Themes'

const { height } = Dimensions.get('window');

const Slider = () => {
    return (
        <View style={sliderTheme.sliderContainer}>
            <Swiper 
                showsButtons 
                overScrollMode='never' 
                autoplayTimeout={5} 
                activeDotColor={colours.primaryColor} 
                showsPagination={true} 
                loop 
                autoplay 
                height={height / 4}
                prevButton={<FontAwesome5 name="chevron-left" size={dimensions.width/20} color={colours.primaryColor} />}
                nextButton={<FontAwesome5 name="chevron-right" size={dimensions.width/20} color={colours.primaryColor} />}
                removeClippedSubviews={false}
            >
                <TouchableOpacity activeOpacity={1} style={sliderTheme.slider}>
                    <Image source={{ uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-vegetarian-recipes-overshoot-banner-image_139051.jpg" }} resizeMode="cover" style={sliderTheme.sliderImage} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={sliderTheme.slider}>
                    <Image source={{ uri: "https://d1.com.co/wp-content/uploads/2021/04/recetas-banner.jpg" }} resizeMode="cover" style={sliderTheme.sliderImage} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={sliderTheme.slider}>
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsj-NPjcJyx0t0taoDkqnD0p777nr4u5EsJg&usqp=CAU" }} resizeMode="cover" style={sliderTheme.sliderImage} />
                </TouchableOpacity>
            </Swiper>
        </View>
    )
}

export default Slider;