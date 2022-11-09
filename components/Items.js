import React, { useContext, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from '../styles/styles';
import Item from './Item';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../AppContext';

export default function Items() {
    const context = useContext(AppContext);
    const navigation = useNavigation();

    const loadList = () => {
        const newList = [];

        if (currentSubTab === 1) {
            context.categories.forEach(i => {
                newList.push({ id: i.id, nameToShow: i.name, color: i.color })
            });
        } else if (currentSubTab === 2) {
            context.products.forEach(i => {
                const color = context.categories.find(c => c.id === i.codCategory).color;
                newList.push({ id: i.id, nameToShow: `${i.name} - ${i.stored}`, color: color })
            });
        }
        return newList;
    };

    const [currentSubTab, setCurrentSubTab] = useState(1);
    const showList = loadList();

    const changeSubMenu = (subMenu) => subMenu !== currentSubTab && setCurrentSubTab(subMenu)

    const saveProduct = (product) => {
        if (product.id) {
            const index = context.products.findIndex((p) => p.id === product.id);
            const newProducts = [...context.products];
            newProducts.splice(index, 1, product);
            context.setProducts(newProducts);
        } else {
            product.id = context.productId;
            context.setProducts([...context.products, product]);
            context.setProductId(context.productId + 1);
        }
    };

    const deleteProduct = (id) => context.setProducts(context.products.filter(p => p.id !== id))

    const saveCategory = (category) => {
        if (category.id) {
            const index = context.categories.findIndex((c) => c.id === category.id);
            const newCategories = [...context.categories];
            newCategories.splice(index, 1, category);
            context.setCategories(newCategories);
        } else {
            category.id = context.categoryId;
            context.setCategories([...context.categories, category]);
            context.setCategoryId(context.categoryId + 1);
        }
    };

    const deleteCategory = (id) => {
        context.setCategories(context.categories.filter(c => c.id !== id));
        context.setProducts(context.products.filter(p => p.codCategory !== id));
    };

    const showSelectionSort = () => {
        if (currentSubTab === 1) {
            navigation.navigate("Sort", {
                options: [
                    { id: 1, description: "Ordem alfabética", selected: false },
                    { id: 2, description: "Categorias de maior valor", selected: false },
                ]
            })
        } else if (currentSubTab === 2) {
            navigation.navigate("Sort", {
                options: [
                    { id: 1, description: "Ordem alfabética", selected: false },
                    { id: 2, description: "Vencimento de produtos", selected: false },
                    { id: 3, description: "Produtos com maior estoque", selected: false },
                ]
            })
        }
    };

    const showSelectionFilter = () => {
        if (currentSubTab === 2) {
            navigation.navigate("Sort", {
                options: [
                    { id: 1, description: "Produtos vencidos", selected: false },
                    { id: 2, description: "Produtos próximos ao vencimento", selected: false },
                    { id: 3, description: "Produtos sem estoque", selected: false },
                ]
            });
        }
    };

    const goToItem = (id) => {
        let params = {};

        if (id) {
            if (currentSubTab === 1) {
                const category = context.categories.find(i => i.id === id);
                params = {
                    id: id,
                    name: category.name,
                    color: category.color,
                    isEdit: true,
                };
            } else if (currentSubTab === 2) {
                const product = context.products.find(i => i.id === id);
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
            params = { isEdit: false };
        }

        if (currentSubTab === 1) {
            navigation.navigate("Category", { ...params, onSave: saveCategory, onDelete: deleteCategory });
        } else if (currentSubTab === 2) {
            navigation.navigate("Product", { ...params, onSave: saveProduct, onDelete: deleteProduct });
        }
    };

    return (
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h1}>Itens</Text>
                <TouchableOpacity
                    style={[styles.button, styles.primary]}
                    onPress={() => goToItem()}>
                    <Image
                        source={require("../assets/images/plus1.png")}
                        style={styles.buttonImg}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.componentContent}>
                <View style={[styles.buttonGroup, styles.mt1]}>
                    <IconButton
                        icon="sort-alphabetical-ascending"
                        style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonMenuSort]}
                        onPress={showSelectionSort} />
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
                    <IconButton 
                        icon="filter-variant" 
                        style={[styles.button, styles.buttonGroupButton, styles.light, styles.buttonMenuFilter]} 
                        onPress={showSelectionFilter} 
                        disabled={currentSubTab === 1} />
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