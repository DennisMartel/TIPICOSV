import { Text, TouchableOpacity, View } from "react-native";
import { colours, dimensions, iconsBottomTabs } from "../../utils/Themes";
import { AntDesign} from "@expo/vector-icons";
import theme from "./theme";

const BottomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={theme.container}>
            <View style={{ ...theme.bottomTabs, backgroundColor: colours.primaryColor }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ ...theme.btnBottomTabs, backgroundColor: isFocused ? colours.white : "transparent"}}
                        >
                            <AntDesign name={iconsBottomTabs[label]} size={dimensions.width / 15} color={isFocused ? colours.primaryColor : colours.white} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

export default BottomTabBar;