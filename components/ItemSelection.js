import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function ItemSelection(props) {
    
    const applyStyles = [styles.listDivContent, styles.listli];

    /**
     * Verifica se o item é o selecionado, ser for, aplica um estilo específico
     */
    props.selected ? applyStyles.push(styles.itemSelected) : false;

    /**
     * Render do hook.
     */
    return (
        <TouchableOpacity style={applyStyles} onPress={() => props.onChoose(props.id)}>
            <Text style={styles.buttonText}>{props.description}</Text>
        </TouchableOpacity>
    );
}