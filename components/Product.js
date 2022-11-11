import { Alert, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Platform } from "react-native";
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
    const [valid, setValid] = useState(props.valid ? new Date(props.valid) : null);
    const [stored, setStored] = useState(props.stored);
    const [codCategory, setCodCategory] = useState(props.codCategory);
    const [validName, setValidName] = useState(name ? true : null);
    const [validPrice, setValidPrice] = useState(price ? true : null);
    const [validValid, setValidValid] = useState(valid ? true : null);
    const [validStored, setValidStored] = useState(stored ? true : null);
    const [validCategory, setValidCategory] = useState(codCategory ? true : null);

    const updateName = (e) => {
        setName(e);
        e.trim().length < 2 ? setValidName(false) : setValidName(true)
    };

    const updatePrice = (e) => {
        if (!isNaN(+e) && !e.endsWith(".")) {
            setValidPrice(true);
            setPrice(+e);
        } else {
            setValidPrice(false)
            setPrice(e);
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

    const updateValid = (e) => {
        if (e.length > 10)
            return;

        const reg = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
        if (reg.test(e)) {
            setValidValid(true);
        } else if (e.length === 0) {
            setValidValid(null);
        } else {
            setValidValid(false);
        }
        setValid(e);
    };

    const loadItems = () => {
        const items = [];
        if (!context.categories) return items

        context.categories.forEach(c => {
            items.push({ label: c.name, value: c.id })
        });

        return items;
    };

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(loadItems());

    const onChange = (event, selectedDate) => {
        if (event.type !== "dismissed") {
            const currentDate = selectedDate;
            setValid(currentDate);
            setValidValid(true);
        }
    };

    const showDatePicker = () => {
        if (Platform.OS === 'android')
            DateTimePickerAndroid.open({
                value: valid instanceof Date ? valid : new Date(),
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

        let dateObj = valid;

        if (!(valid instanceof Date) && valid) {
            const parts = valid.split("/");
            dateObj = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
        }

        const product = { name: name, valid: dateObj, price: price, stored: stored, codCategory: codCategory };

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

    const selectCategory = (id) => {
        if (id) {
            setCodCategory(id);
            setValidCategory(true);
        }
    };

    const showSelection = () => {
        Keyboard.dismiss;
        if (items.length === 0) {
            Alert.alert("ERRO", "Nenhuma categoria cadastra até o momento, por favor, cadastre primeiro uma categoria");
            return;
        }
        const options = items.map(function (i) {
            return { id: i.value, description: i.label, selected: codCategory === i.value ? true : false }
        })
        navigation.navigate("Selection", {
            options: [...options],
            onSelection: selectCategory
        })
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
                            keyboardType="decimal-pad"
                            onChangeText={(e) => updatePrice(e)}
                            value={price ? price.toString() : ""}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Vencimento:</Text>
                        <TextInput
                            onFocus={showDatePicker}
                            onPressIn={showDatePicker}
                            style={[styles.input, validValid === true ? styles.fieldValid : validValid === false ? styles.fieldInvalid : false]}
                            value={valid instanceof Date ? `${valid.getDate()}/${month[valid.getMonth()]}/${valid.getFullYear()}` : valid}
                            onChangeText={(e) => updateValid(e)} />
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
                            {Platform.OS === 'android' ? (
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
                            ) : (
                                <TouchableWithoutFeedback
                                    style={[styles.input, validCategory === true ? styles.fieldValid : validCategory === false ? styles.fieldInvalid : false]}
                                    placeholder="Selecione uma categoria..."
                                    onPress={showSelection}>
                                    <Text style={
                                        [styles.input,
                                        { padding: 10, backgroundColor: "#e6e6e6" },
                                        !codCategory ? { opacity: 0.5 } : { backgroundColor: "white" },
                                        validCategory === true ? styles.fieldValid : validCategory === false ? styles.fieldInvalid : false]}>
                                        {codCategory ? items.find(i => i.value === codCategory).label : "Clique para selecionar..."}
                                    </Text>
                                </TouchableWithoutFeedback>
                            )}
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