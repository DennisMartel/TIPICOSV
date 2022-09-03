import { useState } from "react"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Picker } from '@react-native-picker/picker'
import { AntDesign } from "@expo/vector-icons"

import CustomInput from "../../components/CustomInput"
import CustomInputSelect from "../../components/CustomInputSelect"

import { categories } from "../../utils/Database/categories"

import theme from "./theme"
import { colours, dimensions } from "../../utils/Themes"

const Food = ({ navigation }) => {
    const [category, setCategory] = useState("")

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <KeyboardAwareScrollView overScrollMode="never" showsVerticalScrollIndicator={false} centerContent={true} contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}>
                <View style={theme.container}>
                    <Text>Agregar comida típica</Text>
                    <CustomInput
                        label="Nombre"
                        placeholder="Ingrese el nombre"
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    />
                    <CustomInput
                        label="Precio"
                        placeholder="ingrese el precio"
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        keyboardType="numeric"
                    />
                    <CustomInputSelect
                        label="Seleccionar categoria"
                        selectedValue={category}
                        onValueChange={itemValue =>
                          setCategory(itemValue)
                        }
                    >
                        {
                            categories.map((item, index) => (
                                <Picker.Item key={index} label={item.name} value={item.name} />
                            ))
                        }
                    </CustomInputSelect>

                    <View style={theme.gallery}>
                        <Text style={{ marginBottom: dimensions.width*0.03 }}>Agregar imagenes</Text>
                        <View style={theme.contentGallery}>
                            <TouchableOpacity style={theme.btnGallery}>
                                <AntDesign name="pluscircle" color={colours.white} size={dimensions.width*0.05} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Food