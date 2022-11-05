import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function ItemSelection(props) {
    const [id, setId] = useState(props.id);
    const [description, setDescription] = useState(props.description);
    const [selected, setSelected] = useState(props.selected);
    
    const applyStyles = [styles.listDivContent, styles.listli];

    selected ? applyStyles.push(styles.itemSelected) : false;
    return (
        <TouchableOpacity style={applyStyles}>
            <Text style={styles.buttonText}>{description}</Text>
        </TouchableOpacity>
    );
}