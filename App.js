import { useEffect, useRef, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/Navigator/StackNavigator'

import { clearAll, getData, storeData } from './src/utils/LocalStorage'
import Onboarding from './src/components/Onboarding'
import { startNotifications } from './src/utils/Notifications'
import FavoritesState from './src/context/Favorites/FavoritesState'

const App = () => {
    // clearAll()
    const notificationListener = useRef();
    const responseListener = useRef();

    const [firstOpenApp, setFirstOpenApp] = useState(null)

    useEffect(() => {
        checkFirstOpenApp()
        startNotifications(notificationListener, responseListener)
    }, [])

    const skip = async () => {
        await storeData('open', true)
        setFirstOpenApp(true)
    }

    const checkFirstOpenApp = async () => {
        const res = await getData('open')
        res && setFirstOpenApp(true)
    }

    if (firstOpenApp == null) return <Onboarding skip={skip}/>

    return (
        <FavoritesState>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </FavoritesState>
    )
}

export default App;