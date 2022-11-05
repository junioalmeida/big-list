import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../styles/styles";
import ItemSelection from "./ItemSelection";

export default function Selection(props) {
    const [options, setOptions] = useState([
        {id: 1, description: "Ordem alfabética", selected: true},
        {id: 2, description: "Categorias de maior valor", selected: false}
    ])

    return (
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h1}>{props.title}</Text>
                <IconButton icon="check" style={[styles.button, styles.success]}/>
            </View>
            <View style={styles.componentContent}>
                <FlatList 
                    data={options}
                    renderItem={({item}) => (
                        <ItemSelection
                            id={item.id}
                            description={item.description}
                            selected={item.selected}
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