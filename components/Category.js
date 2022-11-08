import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { COLORS } from "../styles/Colors";
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Category() {
    const props = useRoute().params;
    const navigation = useNavigation();
    
    const [id, setId] = useState(props.id);
    const [name, setName] = useState(props.name);
    const [color, setColor] = useState(props.color);

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
                            style={styles.input}
                            value={name}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Cor:</Text>
                        <View style={styles.inputSelect}>
                            <DropDownPicker
                                style={styles.input}
                                placeholder="Selecione uma cor..."
                                open={open}
                                value={color}
                                items={items}
                                setOpen={setOpen}
                                setValue={setColor}
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