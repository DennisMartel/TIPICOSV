import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { colours, dimensions } from "../utils/Themes"
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Login from "../screens/Login";
import { useContext } from "react";
import FavoritesContext from "../context/Favorites/FavoritesContext";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const { favoritesItems } = useContext(FavoritesContext)
    console.log(favoritesItems);
    
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: colours.primaryColor },
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    switch (route.name) {
                        case 'home':
                            iconName = 'home'
                            break;
                        case 'categories':
                            iconName = 'appstore-o'
                            break;
                        case 'favorites':
                            iconName = 'hearto'
                            break;
                        case 'account':
                            iconName = 'user'
                            break;
                    }
                    return (
                        <AntDesign 
                            name={iconName} 
                            size={focused ? dimensions.width/15 : dimensions.width/18} 
                            color={colours.white} 
                        />
                    )
                },
            })}
        >
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="categories" component={Categories} />
            <Tab.Screen 
                options={{ 
                    tabBarBadge: favoritesItems.length, 
                    tabBarBadgeStyle: {
                        backgroundColor: colours.white,
                        color: colours.primaryColor
                    }, 
                }} 
                name="favorites" 
                component={Categories} 
            />
            <Tab.Screen name="account" component={Login} />
        </Tab.Navigator>
    )
}

export default TabNavigation