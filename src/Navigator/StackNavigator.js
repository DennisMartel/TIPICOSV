import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from "./TabNavigation";
import Product from "../screens/Product";
import Search from "../screens/Search";
import Food from "../screens/Food";

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{ 
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={TabNavigation} />
            <Stack.Screen name="product" component={Product}  />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="food" component={Food} />
        </Stack.Navigator>
    )
}

export default StackNavigator;