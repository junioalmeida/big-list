import { Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../styles/styles";

export default function Header() {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.appName}>Big List</Text>

                <IconButton icon="account-circle" style={[styles.badge, styles.success]} size={40}/>
           
        </View>
    );
}