import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function ItemSelection(props) {
    
    const applyStyles = [styles.listDivContent, styles.listli];

    props.selected ? applyStyles.push(styles.itemSelected) : false;
    return (
        <TouchableOpacity style={applyStyles} onPress={() => props.onChoose(props.id)}>
            <Text style={styles.buttonText}>{props.description}</Text>
        </TouchableOpacity>
    );
}