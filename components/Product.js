import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Product() {
    const props = useRoute().params;
    const navigation = useNavigation();

    const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const [id, setId] = useState(props.id);
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);
    const [date, setDate] = useState(props.valid);
    const [stored, setStored] = useState(props.stored);
    const [codCategory, setCodCategory] = useState(props.codCategory);
    
    const loadItems = () => {
        const items = [];
        props.categories.forEach(c => {
            items.push({ label: c.name, value: c.id })
        });
        return items;
    };

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(loadItems());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showDatePicker = () => {
        DateTimePickerAndroid.open({
            value: date ? date : new Date(),
            mode: "date",
            onChange,
            is24Hour: true,
        });
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
                            style={styles.input}
                            value={name}
                            onChangeText={(e) => setName(e)}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Preço:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            onChangeText={(e) => setPrice(+e)}
                            value={price ? price.toString() : ""}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Vencimento:</Text>
                        <TextInput
                            onFocus={showDatePicker}
                            onPressIn={showDatePicker}
                            style={styles.input}
                            value={date ? `${date.getDate()}/${month[date.getMonth()]}/${date.getFullYear()}` : ""} />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Qtde Estoque:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={stored ? stored.toString() : ""}
                            onChangeText={(e) => setStored(+e)}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Categoria:</Text>
                        <View style={styles.inputSelect}>
                            <DropDownPicker
                                style={styles.input}
                                placeholder="Selecione uma categoria.."
                                open={open}
                                value={codCategory}
                                items={items}
                                setOpen={setOpen}
                                setValue={setCodCategory}
                                setItems={setItems}
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
                            styles.primary]}>
                            <Text style={[styles.primary, styles.buttonText]}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                    {props.isEdit ? (
                        <View style={[styles.buttonGroup, styles.buttonGroupEnd, styles.mt2]}>
                            <TouchableOpacity
                                style={[styles.button,
                                styles.buttonGroupButton,
                                styles.buttonGroupButtonThrid,
                                styles.danger]}>
                                <Text style={[styles.danger, styles.buttonText]}>Deletar</Text>
                            </TouchableOpacity>
                        </View>) : false}
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}