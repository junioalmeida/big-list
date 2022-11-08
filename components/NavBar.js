import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import styles from "../styles/styles";

export default function NavBar(props) {
    return (
        <View style={[styles.buttonGroup, styles.navBar]}>
            <Link to="/" style={{flex: 1}}>
                <View style={[styles.navButton, styles.primary]}>
                    <Text style={[styles.primary, styles.buttonText]}>Itens</Text>
                </View>
            </Link>
            <Link to="/report" style={{flex: 1}}>
                <View style={[styles.navButton, styles.secondary]}>
                    <Text style={[styles.buttonText]}>Relatório</Text>
                </View>
            </Link>
        </View>
    );
}