import { useContext } from "react"
import { AntDesign } from "@expo/vector-icons"
import { 
    Image, 
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from "react-native"
import Header from '../../components/Header'
import { colours, dimensions } from "../../utils/Themes"
import FavoritesContext from '../../context/Favorites/FavoritesContext'

const Favorites = ({ navigation }) => {
    const { 
        favoritesItems, 
        removeItemFavorites, 
        removeAllFavorites 
    } = useContext(FavoritesContext)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header back navigation={navigation} />
            <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false} centerContent={true} contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}>
                <View style={theme.container}>
                    {
                        favoritesItems.length !== 0 && (
                            <TouchableOpacity onPress={() => removeAllFavorites()} style={{ backgroundColor: colours.primaryColor, alignSelf: "flex-end", borderRadius: dimensions.width, padding: dimensions.width*0.02, marginBottom: dimensions.width*0.02 }}>
                                <Text style={{ color: colours.white }}>Limpiar lista</Text>
                            </TouchableOpacity>
                        )
                    }
                    {
                        favoritesItems.length !== 0 ? (
                            favoritesItems?.map((favoritesItems, index) => (
                                <View style={theme.card} key={index}>
                                    <TouchableOpacity onPress={() => navigation.navigate("product", { id: favoritesItems?.id })} activeOpacity={0.7} style={theme.contentImage}>
                                        <Image source={{ uri: favoritesItems?.image }} resizeMode="contain" style={theme.image} />
                                    </TouchableOpacity>
                                    <View style={theme.cardContent}>
                                        <Text style={theme.title} numberOfLines={2}>{favoritesItems?.name}</Text>
                                        <View style={theme.reviews}>
                                            <AntDesign name="star" color={favoritesItems?.review >= 1 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon} />
                                            <AntDesign name="star" color={favoritesItems?.review >= 2 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon} />
                                            <AntDesign name="star" color={favoritesItems?.review >= 3 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon} />
                                            <AntDesign name="star" color={favoritesItems?.review >= 4 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon} />
                                            <AntDesign name="star" color={favoritesItems?.review >= 5 ? colours.yellow : colours.gray} size={dimensions.width * 0.04} style={theme.startIcon} />
                                        </View>
                                        <TouchableOpacity onPress={() => removeItemFavorites(favoritesItems?.id)} style={theme.btnDelete}>
                                            <AntDesign name="delete" color={colours.white} size={dimensions.width*0.05} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ fontSize: dimensions.width*0.06, textAlign: "center" }}>Sin productos agregados a favoritos</Text>
                            </View>
                        )
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
    reviews: {
        flexDirection: "row",
    },
    startIcon: {
        marginRight: dimensions.width * 0.01,
    },
    btnDelete: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        width: dimensions.width*0.08,
        height: dimensions.width*0.08,
        marginTop: 'auto',
        backgroundColor: colours.primaryColor,
        borderRadius: dimensions.width*0.01,
    }
})


export default Favorites