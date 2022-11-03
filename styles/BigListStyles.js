import { StyleSheet } from "react-native";

export default class BigListStyles {
    static getDivColor(color) {
        return StyleSheet.create({
            divColor: {
                backgroundColor: color
            }
        })
    }
}