import { Alert, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { COLORS } from "../styles/Colors";
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Category() {
    const props = useRoute().params;
    const navigation = useNavigation();

    const [name, setName] = useState(props.name);
    const [color, setColor] = useState(props.color);
    const [validName, setValidName] = useState(name ? true : null);
    const [validColor, setValidColor] = useState(color ? true : null);

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Azul', value: COLORS.blueCategory },
        { label: 'Rosa', value: COLORS.pinkCategory },
        { label: 'Verde', value: COLORS.greenCategory },
        { label: 'Vermelho', value: COLORS.redCategory },
        { label: 'Amarelo', value: COLORS.yellowCategory },
        { label: 'Preto', value: COLORS.blackCategory },
        { label: 'Roxo', value: COLORS.purpleCategory },
    ]);

    const updateName = (e) => {
        setName(e);
        e.trim().length < 2 ? setValidName(false) : setValidName(true)
    };

    const validateFields = () => {
        if (validName === true && validColor === true)
            return true;

        color ? setValidColor(true) : setValidColor(false)
        validName == null && setValidName(false);
    }

    const saveCategory = () => {
        if (!validateFields()) {
            Alert.alert(
                "ERRO",
                "Por favor, preencha os campos em vermelho corretamente.",
                [
                    {
                        text: "Ok",
                        style: "cancel",
                    },
                ],
                {
                    cancelable: true,
                }
            )
            return;
        }

        const categpry = { name: name, color: color };

        if (!props.isEdit)
            props.onSave(categpry);
        else
            props.onSave({ ...categpry, id: props.id })

        navigation.navigate("Items");
    };

    const showAlert = () => {
        Alert.alert(
            "AVISO",
            "Todos os produtos associados a esta categoria serão deletados, deseja continuar?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: () => deleteCategory()
                },
            ],
            {
                cancelable: true,
            }
        )
    }

    const deleteCategory = () => {
        props.onDelete(props.id);
        navigation.navigate("Items");
    };

    return (
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h2}>{(props.isEdit ? "Editar " : "Adicionar ") + "Categoria"}</Text>
            </View>
            <View style={styles.componentContent}>
                <KeyboardAvoidingView>
                    <View style={styles.field}>
                        <Text style={styles.label}>Nome:</Text>
                        <TextInput
                            style={[styles.input, validName === true ? styles.fieldValid : validName === false ? styles.fieldInvalid : false]}
                            value={name}
                            onChangeText={(e) => updateName(e)}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Cor:</Text>
                        <View style={styles.inputSelect}>
                            <DropDownPicker
                                style={[styles.input, validColor === true ? styles.fieldValid : validColor === false ? styles.fieldInvalid : false]}
                                placeholder="Selecione uma cor..."
                                open={open}
                                value={color}
                                items={items}
                                setOpen={setOpen}
                                setValue={(e) => { setColor(e); setValidColor(true) }}
                                setItems={setItems}
                                onPress={Keyboard.dismiss}
                            />
                        </View>
                    </View>

                    <View style={[styles.buttonGroup, styles.buttonGroupEnd]}>
                        <TouchableOpacity
                            style={[styles.button,
                            styles.buttonGroupButton,
                            styles.buttonGroupButtonThrid]}
                            onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button,
                            styles.buttonGroupButton,
                            styles.buttonGroupButtonThrid,
                            styles.primary]}
                            onPress={saveCategory}>
                            <Text style={[styles.primary, styles.buttonText]}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                    {props.isEdit ? (
                        <View style={[styles.buttonGroup, styles.buttonGroupEnd, styles.mt2]}>
                            <TouchableOpacity
                                style={[styles.button,
                                styles.buttonGroupButton,
                                styles.buttonGroupButtonThrid,
                                styles.danger]}
                                onPress={showAlert}>
                                <Text style={[styles.danger, styles.buttonText]}>Deletar</Text>
                            </TouchableOpacity>
                        </View>) : false}
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}