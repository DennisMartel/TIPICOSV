import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Cart from "../screens/Cart";
import BottomTabBar from "../components/BottomTabBar";

const Tab = createBottomTabNavigator();

const Tabs = () => {
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

export default Tabs;