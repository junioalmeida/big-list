import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/styles';
import BigListStyles from '../styles/BigListStyles';

export default function Item({id, color, nameToShow, openItem}) {
    /**
     * Render do hook.
     */
    return (
        <TouchableOpacity 
            style={styles.listli} 
            onPress={() => openItem(id)}>
            <View style={styles.listDivItem}>
                <View style={[styles.listDivColor, BigListStyles.getDivColor(color).divColor]}></View>
                <Text style={styles.listDivContent}>{nameToShow}</Text>
            </View>
        </TouchableOpacity>

    );
}