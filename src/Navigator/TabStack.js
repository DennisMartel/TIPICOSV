import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { AntDesign } from 'expo-vector-icons';

import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Cart from "../screens/Cart";
import BottomTabBar from "../components/BottomTabBar";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    
    const screensOptions = (route, color) => {
        let iconName;
        
        switch (route.name) {
            case "home":
                iconName = "home"
                break;
            case "categories":
                iconName = "appstore-o"
                break;
            case "cart":
                iconName = "shoppingcart"
                break;
            case "account":
                iconName = "user"
                break;
        }

        return <AntDesign name={iconName} color={color} size={26} />
    }

    return (
        <Tab.Navigator 
            screenOptions={{ headerShown: false }} 
            tabBar={props => <BottomTabBar {...props} /> 
        }>
            <Tab.Screen options={{ title: "Inicio" }} name="home" component={Home} />
            <Tab.Screen options={{ title: "Categorias" }} name="categories" component={Categories} />
            <Tab.Screen options={{ title: "MiCarrito", tabBarBadge: 0 }} name="cart" component={Cart} />
            <Tab.Screen options={{ title: "Deseos" }} name="wishlist" component={Categories} />
            <Tab.Screen options={{ title: "Cuenta" }} name="account" component={Login} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadowBottomBar: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    }
})

export default Tabs;