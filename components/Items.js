import React, { useState } from 'react';
import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/styles';
import Svg, { Path } from "react-native-svg"
import Item from './Item';
import { COLORS } from '../styles/Colors';
import { BigListStyles } from '../styles/BigListStyles';

export default function Itens(props) {
    const [currentSubTab, setCurrentSubTab] = useState(1);
    const [showList, setShowList] = useState(props.showList);
    /*const [showList, setShowList] = useState([
        { id: 1, color: COLORS.pinkCategory, nameToShow: "Categoria 1" },
        { id: 2, color: COLORS.yellowCategory, nameToShow: "Categoria 2" },
        { id: 3, color: COLORS.greenCategory, nameToShow: "Categoria 3" }
    ]);*/

    return (
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h1}>Itens</Text>
                <TouchableOpacity style={[styles.button, styles.primary]} onPress={() => console.log("rete")}>
                    <Image
                        source={require("../assets/images/plus1.png")}
                        style={styles.buttonImg}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.componentContent}>
                <View style={[styles.buttonGroup, styles.mt1]}>
                    <TouchableOpacity title='Sort' style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonMenuSort]} />
                    <TouchableOpacity title='Categorias' style={[styles.button, styles.buttonGroupButton, styles.dark, styles.buttonGroupButtonThrid]}>
                        <Text style={[styles.buttonText, styles.dark]}>Categorias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title='Produtos' style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonGroupButtonThrid]}>
                        <Text style={[styles.buttonText, styles.light]}>Produtos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title='Filter' style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonMenuFilter]} />
                </View>
                <FlatList
                    data={props.showList}
                    renderItem={({ item }) => (
                        <Item 
                            id={item.id}
                            nameToShow={item.nameToShow}
                            color={item.color}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    style={[styles.list, styles.mt3]}
                />
            </View>
        </View>
    );
}