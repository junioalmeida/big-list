import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/styles';
import BigListStyles from '../styles/BigListStyles';

export default function Item(props) {
    const [id, setId] = useState(props.id);
    const [color, setColor] = useState(props.color);
    const [nameToShow, setNameToShow] = useState(props.nameToShow);

    return (
        <TouchableOpacity style={styles.listli} onPress={() => console.log(id + " - " + nameToShow + " - " + color)}>
            <View style={styles.listDivItem}>
                <View style={[styles.listDivColor, BigListStyles.getDivColor(color).divColor]}></View>
                <Text style={styles.listDivContent}>{nameToShow}</Text>
            </View>
        </TouchableOpacity>

    );
}