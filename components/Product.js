import { Alert, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useContext, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useRoute, useNavigation } from '@react-navigation/native';
import AppContext from "../AppContext";

const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

export default function Product() {
    const context = useContext(AppContext);
    const props = useRoute().params;
    const navigation = useNavigation();

    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);
    const [valid, setValid] = useState(props.valid);
    const [stored, setStored] = useState(props.stored);
    const [codCategory, setCodCategory] = useState(props.codCategory);
    const [validName, setValidName] = useState(name ? true : null);
    const [validPrice, setValidPrice] = useState(price ? true : null);
    const [validStored, setValidStored] = useState(stored ? true : null);
    const [validCategory, setValidCategory] = useState(codCategory ? true : null);

    const updateName = (e) => {
        setName(e);
        e.trim().length < 2 ? setValidName(false) : setValidName(true)
    };

    const updatePrice = (e) => {
        if (!isNaN(+e)) {
            setValidPrice(true);
            setPrice(+e);
        } else {
            setValidPrice(false)
            setPrice(0);
        }
    };

    const updateStored = (e) => {
        if (!isNaN(+e) && +e >= 0) {
            setValidStored(true);
            setStored(+e);
        } else {
            setValidStored(false)
            setStored(0);
        }
    };

    const loadItems = () => {
        const items = [];
        context.categories.forEach(c => {
            items.push({ label: c.name, value: c.id })
        });
        return items;
    };

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(loadItems());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setValid(currentDate);
    };

    const showDatePicker = () => {
        DateTimePickerAndroid.open({
            value: valid ? valid : new Date(),
            mode: "date",
            onChange,
            is24Hour: true,
        });
    };

    const validateFields = () => {
        if (validName === true && validPrice === true && validStored === true && validCategory === true)
            return true;

        !isNaN(+codCategory) ? setValidCategory(true) : setValidCategory(false)


        validName == null && setValidName(false);
        validPrice == null && setValidPrice(false);
        validStored == null && setValidStored(false);
    }

    const saveProduct = () => {
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

        const product = { name: name, valid: valid, price: price, stored: stored, codCategory: codCategory };

        if (!props.isEdit)
            props.onSave(product);
        else
            props.onSave({ ...product, id: props.id })

        navigation.navigate("Items");
    };

    const deleteProduct = () => {
        props.onDelete(props.id);
        navigation.navigate("Items");
    };

    return (
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h2}>{(props.isEdit ? "Editar " : "Adicionar ") + "Produto"}</Text>
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
                        <Text style={styles.label}>Preço:</Text>
                        <TextInput
                            style={[styles.input, validPrice === true ? styles.fieldValid : validPrice === false ? styles.fieldInvalid : false]}
                            keyboardType="numeric"
                            onChangeText={(e) => updatePrice(e)}
                            value={price >= 0 ? price.toString() : ""}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Vencimento:</Text>
                        <TextInput
                            onFocus={showDatePicker}
                            onPressIn={showDatePicker}
                            style={styles.input}
                            value={valid ? `${valid.getDate()}/${month[valid.getMonth()]}/${valid.getFullYear()}` : ""} />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Qtde Estoque:</Text>
                        <TextInput
                            style={[styles.input, validStored === true ? styles.fieldValid : validStored === false ? styles.fieldInvalid : false]}
                            keyboardType="numeric"
                            value={stored >= 0 ? stored.toString() : ""}
                            onChangeText={(e) => updateStored(e)}
                            onBlur={Keyboard.dismiss}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Categoria:</Text>
                        <View style={styles.inputSelect}>
                            <DropDownPicker
                                style={[styles.input, validCategory === true ? styles.fieldValid : validCategory === false ? styles.fieldInvalid : false]}
                                placeholder="Selecione uma categoria.."
                                open={open}
                                value={codCategory}
                                items={items}
                                setOpen={setOpen}
                                setValue={(e) => { setCodCategory(e); setValidCategory(true) }}
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
                            onPress={saveProduct}>
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
                                onPress={deleteProduct}>
                                <Text style={[styles.danger, styles.buttonText]}>Deletar</Text>
                            </TouchableOpacity>
                        </View>) : false}
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}