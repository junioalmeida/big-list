import { Text, View } from "react-native";
import styles from "../styles/styles";
import SvgUser from './SVG/SvgUser';

export default function Header() {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.appName}>Big List</Text>
            <View style={[styles.badge, styles.success]}>
                <SvgUser />
            </View>
        </View>
    );
}