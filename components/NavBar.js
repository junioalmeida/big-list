import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";

export default function NavBar(props) {
    return (
        <View style={[styles.buttonGroup, styles.navBar]}>
            <TouchableOpacity style={[styles.navButton, styles.primary]}>
                <Text style={[styles.primary, styles.buttonText]}>Itens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.navButton]}>
                <Text style={[styles.buttonText]}>Relatório</Text>
            </TouchableOpacity>
        </View>
    );
}