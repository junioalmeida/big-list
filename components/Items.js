import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Link, useLocation } from 'react-router-native';
import styles from '../styles/styles';
import Item from './Item';

export default function Items(props) {
    let stateLink = useLocation().state;
    if(stateLink === undefined || stateLink === null)
        stateLink = {};

    const [currentSubTab, setCurrentSubTab] = useState(stateLink.subTab ? stateLink.subTab : 1);
    const [showList, setShowList] = useState([]);

    const loadList = () => {
        const newList = [];
        if (currentSubTab === 1) {
            props.categories.forEach(i => {
                newList.push({ id: i.id, nameToShow: i.name, color: i.color })
            });
        } else if (currentSubTab === 2) {
            props.products.forEach(i => {
                const color = props.categories.find(c => c.id === i.codCategory).color;
                newList.push({ id: i.id, nameToShow: `${i.name} - ${i.stored}`, color: color })
            });
        }
        return newList;
    };

    useEffect(() => {
        setShowList(loadList());
    }, [currentSubTab]);

    const changeSubMenu = (subMenu) => {
        if (subMenu !== currentSubTab) {
            setShowList([]);
            setCurrentSubTab(subMenu);
        }
    };

    return (
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h1}>Itens</Text>
                <Link 
                    to={currentSubTab === 1 ? "/category" : "/product"} 
                    state={currentSubTab === 2 ? {categories: props.categories} : false} >
                    <View style={[styles.button, styles.primary]}>
                        <Image
                            source={require("../assets/images/plus1.png")}
                            style={styles.buttonImg}
                        />
                    </View>
                </Link>
            </View>
            <View style={styles.componentContent}>
                <View style={[styles.buttonGroup, styles.mt1]}>
                    <IconButton icon="sort-alphabetical-ascending" style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonMenuSort]} />
                    <TouchableOpacity
                        style={[styles.button, styles.buttonGroupButton, (currentSubTab === 1 ? styles.dark : styles.light), styles.buttonGroupButtonThrid]}
                        onPress={() => changeSubMenu(1)}>
                        <Text style={[(currentSubTab === 1 ? styles.dark : styles.light), styles.buttonText]}>Categorias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonGroupButton, (currentSubTab === 2 ? styles.dark : styles.light), styles.buttonGroupButtonThrid]}
                        onPress={() => changeSubMenu(2)}>
                        <Text style={[(currentSubTab === 2 ? styles.dark : styles.light), styles.buttonText]}>Produtos</Text>
                    </TouchableOpacity>
                    <IconButton icon="filter-variant" style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonMenuFilter]} />
                </View>
                <FlatList
                    data={showList}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            nameToShow={item.nameToShow}
                            color={item.color}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    style={[styles.list, styles.mt3]}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 5 }} />}
                />
            </View>
        </View>
    );
}