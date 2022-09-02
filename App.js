import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/Navigator/TabStack'

import { getData } from './src/utils/LocalStorage';
import Onboarding from './src/components/Onboarding';

const App = () => {    
    const [firstOpen, setFirstOpen] = useState(null);

    useEffect(() => {
        checkFirstOpenApp()
    }, [])

    const checkFirstOpenApp = async () => {
        const storage = await getData('open');
        // !storage ? await storeData('open', true) : setFirstOpen(true);
    }

    if (firstOpen === null) return <Onboarding />

    return (
      <NavigationContainer>
          <StackNavigator />
      </NavigationContainer>
    )
}

export default App;