import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { dimensions } from "../utils/Themes";

import BottomTabBar from "../components/BottomTabBar";
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Cart from "../screens/Cart";
import Product from "../screens/Product";
import Search from "../screens/Search";
import Food from "../screens/Food";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabBar {...props} />}>
            <Tab.Screen options={{ title: "Inicio" }} name="home" component={Home} />
            <Tab.Screen options={{ title: "Categorias" }} name="categories" component={Categories} />
            <Tab.Screen options={{ title: "MiCarrito", tabBarBadge: 0 }} name="cart" component={Cart} />
            <Tab.Screen options={{ title: "Deseos" }} name="wishlist" component={Categories} />
            <Tab.Screen options={{ title: "Cuenta" }} name="account" component={Login} />
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{ 
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={TabNavigation} />
            <Stack.Screen 
                options={{ 
                    headerTransparent: true,
                    headerBackTitle: "Atrás",
                    headerTintColor: "white",
                    headerBackTitleStyle: {
                        fontWeight: "bold",
                        fontSize: dimensions.width/22
                    },
                    headerTitle: ""
                }} 
                name="product" 
                component={Product} 
            />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="food" component={Food} />
        </Stack.Navigator>
    )
}

export default StackNavigator;