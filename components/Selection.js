import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../styles/styles";
import ItemSelection from "./ItemSelection";

export default function Selection() {
    const props = useRoute().params;
    const navigation = useNavigation();

    const [options, setOptions] = useState(props.options)

    const chooseOption = (id) => {
        const newOptions = [...options];
        newOptions.map(o => {
            if (o.id === id)
                o.selected = true;
            else
                o.selected = false;
        })
        setOptions(newOptions);
    };

    const returnSelection = () => {
        const selected = options.find(o => o.selected === true);
        props.onSelection(selected ? selected.id : 0)
        navigation.goBack();
    }

    return (
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h1}>{props.title}</Text>
                <IconButton
                    icon="check"
                    style={[styles.button, styles.success]}
                    onPress={returnSelection} />
            </View>
            <View style={styles.componentContent}>
                <FlatList
                    data={options}
                    renderItem={({ item }) => (
                        <ItemSelection
                            id={item.id}
                            description={item.description}
                            selected={item.selected}
                            onChoose={chooseOption}
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