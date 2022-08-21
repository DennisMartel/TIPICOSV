import { NavigationContainer } from '@react-navigation/native';
import TabStack from './src/Navigator/TabStack'
const App = () => {
    return (
      <NavigationContainer>
          <TabStack />
      </NavigationContainer>
    )
}

export default App;