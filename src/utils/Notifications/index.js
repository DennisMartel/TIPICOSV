import { Platform } from 'react-native'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

export const getToken = async () => {
    if (!Device.isDevice) {
        console.log("Debes utilizar un dispositivo fisico para poder usar las notificaciones")
        return
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
    }

    if (finalStatus !== 'granted') {
        console.log('Debes dar permisos para acceder a las notificaciones')
        return
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        })
    }

    devicePlatform = Platform.OS === 'ios' ? 'ios' : 'android'
    userDevice = Device.modelName

    return token
}

export const startNotifications = (notificationListener, responseListener) => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        console.log(notification)
    })

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response)
    })

    return () => {
        Notifications.removeNotificationSubscription(notificationListener.current)
        Notifications.removeNotificationSubscription(responseListener.current)
    }
}