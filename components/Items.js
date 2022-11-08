import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from '../styles/styles';
import Item from './Item';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Items() {
    const route = useRoute();
    const navigation = useNavigation();

    const [currentSubTab, setCurrentSubTab] = useState(1);
    const [showList, setShowList] = useState([]);

    const loadList = () => {
        const newList = [];

        if (currentSubTab === 1) {
            route.params.categories.forEach(i => {
                newList.push({ id: i.id, nameToShow: i.name, color: i.color })
            });
        } else if (currentSubTab === 2) {
            route.params.products.forEach(i => {
                const color = route.params.categories.find(c => c.id === i.codCategory).color;
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

    const goToItem = (id) => {
        let params = {};

        if (id) {
            if (currentSubTab === 1) {
                const category = route.params.categories.find(i => i.id === id);
                params = {
                    id: id,
                    name: category.name,
                    color: category.color,
                    isEdit: true
                };
            } else if (currentSubTab === 2) {
                const product = route.params.products.find(i => i.id === id);
                params = {
                    id: id,
                    name: product.name,
                    price: product.price,
                    valid: product.valid,
                    stored: product.stored,
                    codCategory: product.codCategory,
                    isEdit: true
                };
            }
        } else {
            params.push({ isEdit: false })
        }

        if (currentSubTab === 1) {
            navigation.navigate("Category", { ...params });
        } else if (currentSubTab === 2) {
            navigation.navigate("Product", { categories: route.params.categories, ...params });
    }
};

return (
    <View style={styles.component}>
        <View style={styles.componentHeader}>
            <Text style={styles.h1}>Itens</Text>
            <TouchableOpacity
                style={[styles.button, styles.primary]}
                onPress={goToItem}>
                <Image
                    source={require("../assets/images/plus1.png")}
                    style={styles.buttonImg}
                />
            </TouchableOpacity>
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
                        openItem={goToItem}
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