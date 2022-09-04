import { Alert } from "react-native";

const AlertComponent = (msg, cancelPress) => {
    Alert.alert(
        "TipicoSV. - Notificación",
        `${msg || "Mensaje"}`,
        [
            cancelPress && { text: "CANCELAR", onPress: () => {} },
            { text: "ACEPTAR", onPress: () => {} }
        ]
    )
}

export default AlertComponent