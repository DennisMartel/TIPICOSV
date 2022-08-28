import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigator/TabStack'
const App = () => {
    return (
      <NavigationContainer>
          <StackNavigator />
      </NavigationContainer>
    )
}

export default App;