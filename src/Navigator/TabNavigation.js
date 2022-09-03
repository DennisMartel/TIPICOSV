import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { colours, dimensions } from "../utils/Themes"

import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Login from "../screens/Login";
import BottomTabBar from "../components/BottomTabBar";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{ headerShown: false }}
            tabBar={props => <BottomTabBar {...props} />}
        >
            <Tab.Screen options={{ title: "Inicio" }} name="home" component={Home} />
            <Tab.Screen options={{ title: "Categorias" }} name="categories" component={Categories} />
            <Tab.Screen options={{ title: "Deseos" }} name="favorites" component={Categories} />
            <Tab.Screen options={{ title: "Cuenta" }} name="account" component={Login} />
        </Tab.Navigator>
    )
}

export default TabNavigation