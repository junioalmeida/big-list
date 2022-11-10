import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from '../styles/styles';
import Item from './Item';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../AppContext';

export default function Items() {
    const context = useContext(AppContext);
    const navigation = useNavigation();

    const loadList = (subMenu, products) => {
        const newList = [];

        if (!subMenu)
            subMenu = currentSubTab;

        if (!products)
            products = context.products;


        if (subMenu === 1) {
            context.categories.forEach(i => {
                newList.push({ id: i.id, nameToShow: i.name, color: i.color })
            });
        } else if (subMenu === 2) {
            products.forEach(i => {
                const color = context.categories.find(c => c.id === i.codCategory).color;
                newList.push({ id: i.id, nameToShow: `${i.name} - ${i.stored}`, color: color })
            });
        }
        return newList;
    };

    const [currentSubTab, setCurrentSubTab] = useState(1);
    const [showList, setShowList] = useState(loadList());

    useEffect(() => {
        setShowList(loadList());
    }, [context.products, context.categories])

    const changeSubMenu = (subMenu) => {
        if (subMenu !== currentSubTab) {
            setCurrentSubTab(subMenu)
            setShowList(loadList(subMenu));
        }
    }

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

    const applySort = (id) => {
        if (id === 0)
            return;

        const newShowList = [...showList];

        if (currentSubTab === 1) {
            switch (id) {
                /*Categories*/
                case 1:
                    newShowList.sort((a, b) => {
                        return a.nameToShow.localeCompare(b.nameToShow);
                    });

                    break;
                case 2:
                    newShowList.sort((a, b) => {
                        let totalA = 0, totalB = 0;

                        context.products.map(p => {
                            if (p.codCategory === a.id) {
                                totalA += p.stored * p.price;
                            } else if (p.codCategory === b.id) {
                                totalB += p.stored * p.price;
                            }
                        });

                        return totalB - totalA;
                    });

                    break;
            }
        } else if (currentSubTab === 2) {
            switch (id) {
                /*Products*/
                case 1:
                    newShowList.sort((a, b) => {
                        return a.nameToShow.localeCompare(b.nameToShow);
                    });

                    break;
                case 2:
                    newShowList.sort((a, b) => {
                        const p1 = context.products.find(p => p.id === a.id);
                        const p2 = context.products.find(p => p.id === b.id);

                        return p1.valid - p2.valid;
                    });

                    break;
                case 3:
                    newShowList.sort((a, b) => {
                        const p1 = context.products.find(p => p.id === a.id);
                        const p2 = context.products.find(p => p.id === b.id);

                        return -1 * (p1.stored - p2.stored);
                    });

                    break;
                case 4:
                    newShowList.sort((a, b) => {
                        const p1 = context.products.find(p => p.id === a.id);
                        const p2 = context.products.find(p => p.id === b.id);

                        return (p1.codCategory - p2.codCategory);
                    });

                    break;
            }
        }
        setShowList(newShowList);
    };

    const showSelectionSort = () => {
        if (currentSubTab === 1) {
            navigation.navigate("Sort", {
                options: [
                    { id: 1, description: "Ordem alfabética", selected: false },
                    { id: 2, description: "Categorias de maior valor", selected: false },
                ],
                onSelection: applySort
            })
        } else if (currentSubTab === 2) {
            navigation.navigate("Sort", {
                options: [
                    { id: 1, description: "Ordem alfabética", selected: false },
                    { id: 2, description: "Vencimento de produtos", selected: false },
                    { id: 3, description: "Produtos com maior estoque", selected: false },
                    { id: 4, description: "Catetegoria de produtos", selected: false },
                ],
                onSelection: applySort
            })
        }
    };

    const applyFilter = (id) => {
        if (id === 0)
            return;

        let newShowList;

        const today = new Date();

        switch (id) {
            case 1:
                newShowList = context.products.filter(p => {
                    return p.valid !== null && p.valid < today;
                })

                break;
            case 2:
                const maxDate = new Date();
                maxDate.setDate(today.getDate() + 7);

                newShowList = context.products.filter(p => {
                    return p.valid !== null && p.valid > today && p.valid < maxDate;
                })

                break;
            case 3:
                newShowList = context.products.filter(p => {
                    return p.stored === 0;
                })
                break;
        }
        setShowList(loadList(null, newShowList));
    };

    const showSelectionFilter = () => {
        if (currentSubTab === 2) {
            navigation.navigate("Sort", {
                options: [
                    { id: 1, description: "Produtos vencidos", selected: false },
                    { id: 2, description: "Produtos próximos ao vencimento", selected: false },
                    { id: 3, description: "Produtos sem estoque", selected: false },
                ],
                onSelection: applyFilter
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
                {showList.length === 0 ? (
                    <View style={styles.blank}>
                        <Image source={require("../assets/images/empty-list.png")} style={styles.blankImg} />
                        <Text>Nenhum item cadastrado!</Text>
                    </View>
                ) : (
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
                    />)}
            </View>
        </View>
    );
}