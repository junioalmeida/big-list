import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

export default function NavBar() {
    const navigation = useNavigation();

    const [currentTab, setCurrentTab] = useState("Items");

    const goToTab = (tab) => {
        if(tab !== currentTab) {
            navigation.navigate(tab);
            setCurrentTab(tab);
        }
    }
    return (
        <View style={[styles.buttonGroup, styles.navBar]}>
            <TouchableOpacity 
                style={[styles.navButton, (currentTab === "Items" ? styles.primary : styles.secondary)]}
                onPress={() => goToTab("Items")}>
                <Text style={[(currentTab === "Items" ? styles.primary : styles.secondary), styles.buttonText]}>Itens</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.navButton, (currentTab === "Report" ? styles.primary : styles.secondary)]}
                onPress={() => goToTab("Report")}>
                <Text style={[(currentTab === "Report" ? styles.primary : styles.secondary), styles.buttonText]}>Relatório</Text>
            </TouchableOpacity>
        </View>
    );
}