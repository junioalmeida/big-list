import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { COLORS } from "./Colors";

export default StyleSheet.create({
    // Titles and Text
    h1: {
        fontSize: 30,
        fontWeight: "bold",
    },
    h2: {
        fontSize: 24,
        fontWeight: "bold"
    },
    h3: {
        fontSize: 18,
        fontWeight: "bold"
    },
    p: {
        textAlign: "justify"
    },


    // Header
    app: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: COLORS.darkBlueHeader,
    },
    content: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "white",
    },
    headerBar: {
        height: 80,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.darkBlueHeader,
    },
    appName: {
        fontSize: 36,
        marginLeft: 12,
        fontWeight: "bold",
        color: "white"
    },
    badge: {
        marginRight: 15
    },
    component: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        margin: 18,
    },
    componentHeader: {
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    componentContent: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
    },

    // Buttons
    button: {
        height: 52,
        minWidth: 52,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#edf6f9",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dce5e8",
        color: "#000",
    },
    buttonImg: {
        height: 30,
        width: 30,
        resizeMode: "stretch",
    },
    buttonGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    buttonGroupEnd: {
        justifyContent: "flex-end"
    },
    buttonGroupButton: {
        flex: 1,
        borderRadius: 0
    },
    buttonGroupButtonHalf: {
        flex: 0.5
    },
    buttonGroupButtonThrid: {
        flex: 0.33
    },
    buttonGroupButtonQuarter: {
        flex: 0.25
    },
    buttonMenuSort: {
        flexGrow: 0.05,
        marginRight: "auto"
    },
    buttonMenuFilter: {
        flexGrow: 0.05,
        marginLeft: "auto"
    },
    buttonText: {
        fontSize: 15,
        textAlign: "center",
        backgroundColor: "transparent",
        borderWidth: 0,
    },
    
    // Nav Bar
    navBar: {
        backgroundColor: "#edf6f9",
        display: "flex",
        flexDirection: "row",
        flex: 0.1
    },
    navButton: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    field: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    fieldSelect: {
        //alignItems: "normal"
    },
    label: { 
        marginRight: 10,
        flex: 0.35
    },
    input: {
        flex: 1,
        height: 45,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: "#fff",
        color: "#000",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dce5e8",
        borderRadius: 10
    },
    
    ".field select": { height: "3rem" },
    ".field input.valid, .field select.valid": {
        border: "thin solid var(--green-success)"
    },
    ".field input.invalid, .field select.invalid": {
        border: "thin solid var(--red-danger)"
    },
    ".field label.half": { flex: 1 },
    ".field label.thrid": { flex: 0.5 },
    ".field label.quarter": { flex: 0.33 },
    ".field label.fifth": { flex: 0.25 },

    list: {
        flex: 1
    },
    listli: {
        backgroundColor: "#fff",
        color: "#000",
        borderWidth: 1,
        borderColor: "#dce5e8",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 15,
        flex: 1,
        height: 50
    },
    listDivItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#fff',
        flex: 1,
        height: 50
    },
    listDivColor: {
        height: "100%",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flex: 0.10
    },
    listDivContent: {
        paddingLeft: 10,
        paddingRight: 10
    },

    // Colors
    primary: {
        color: "#fff",
        backgroundColor: COLORS.bluePrimary,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: COLORS.bluePrimaryBorder,
    },
    secondary: {
        color: "#000",
        backgroundColor: COLORS.blueSecondary,
        borderWidth: 1,
        borderColor: COLORS.blueSecondaryBorder,
        borderStyle: "solid"
    },
    success: {
        color: "#fff",
        backgroundColor: COLORS.greenSuccess,
        borderWidth: 1,
        borderColor: COLORS.greenSuccessActiveBorder,
        borderStyle: "solid"
    },
    warning: {
        color: "#000",
        backgroundColor: COLORS.yellowWarning,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: COLORS.yellowWarningBorder
    },
    danger: {
        color: "#fff",
        backgroundColor: COLORS.redDanger,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: COLORS.redDangerBorder
    },
    light: {
        color: "#000",
        backgroundColor: "#edf6f9",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#edf6f9"
    },
    dark: {
        color: "#fff",
        backgroundColor: "#1d3a4e",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#1d3a4e",
    },

    // Margins
    mt1: {
        marginTop: 12
    },
    mt2: {
        marginTop: 24
    },
    mt3: {
        marginTop: 36
    },
    mt4: {
        marginTop: 48
    },

    // Specific Big List
    itemSelected: {
        backgroundColor: '#cbd4d7',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#bac3c6",
    },
});