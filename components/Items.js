import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from '../styles/styles';
import Item from './Item';

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
                    <IconButton icon="sort-alphabetical-ascending" style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonMenuSort]} />
                    <TouchableOpacity title='Categorias' style={[styles.button, styles.buttonGroupButton, styles.dark, styles.buttonGroupButtonThrid]}>
                        <Text style={[styles.dark, styles.buttonText]}>Categorias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title='Produtos' style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonGroupButtonThrid]}>
                        <Text style={[styles.light, styles.buttonText]}>Produtos</Text>
                    </TouchableOpacity>
                    <IconButton icon="filter-variant" style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonMenuFilter]} />
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
                    ItemSeparatorComponent={() => <View style={{marginBottom: 5}}/>}
                />
            </View>
        </View>
    );
}