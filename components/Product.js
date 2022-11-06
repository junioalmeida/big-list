import { Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Fragment, useState } from "react";
import SearchableDropDown from "react-native-searchable-dropdown";

export default function Product(props) {
    const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const [id, setId] = useState(props.id);
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);
    const [date, setDate] = useState(props.valid);
    const [stored, setStored] = useState(props.stored);
    const [codCategory, setCodCategory] = useState(props.codCategory);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showDatePicker = () => {
        DateTimePickerAndroid.open({
            value: date,
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
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={[styles.label, { flex: 1, alignSelf: "baseline" }]}>Categoria:</Text>
                        <SearchableDropDown
                            style={styles.input}
                            itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#ddd',
                                borderColor: '#bbb',
                                borderWidth: 1,
                                borderRadius: 5,
                            }}
                            itemTextStyle={{ color: '#222' }}
                            itemsContainerStyle={{ maxHeight: 140 }}
                            items={[
                                { id: 1, name: "Teste 1" },
                                { id: 2, name: "Teste 2" },
                                { id: 3, name: "Teste 3" },
                                { id: 4, name: "Teste 4" },
                            ]}
                            defaultIndex={2}
                            resetValue={false}
                            textInputProps={
                                {
                                    placeholder: "Selecione uma categoria...",
                                    underlineColorAndroid: "transparent",
                                    style: {
                                        padding: 12,
                                        borderWidth: 1,
                                        borderColor: "#dce5e8",
                                        borderRadius: 10,
                                    },

                                }
                            }
                            listProps={
                                {
                                    nestedScrollEnabled: true,
                                }
                            }
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Preço:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            onChangeText={(e) => setPrice(+e)}

                            value={price.toString()}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Vencimento:</Text>
                        <TextInput
                            onFocus={showDatePicker}
                            onPressIn={showDatePicker}
                            style={styles.input}
                            value={date !== undefined ? `${date.getDate()}/${month[date.getMonth()]}/${date.getFullYear()}` : ""} />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Qtde Estoque:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={stored.toString()}
                            onChangeText={(e) => setStored(+e)}
                        />
                    </View>



                    <View style={[styles.buttonGroup, styles.buttonGroupEnd]}>
                        <TouchableOpacity
                            style={[styles.button,
                            styles.buttonGroupButton,
                            styles.buttonGroupButtonThrid]}>
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