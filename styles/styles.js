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
        justifyContent: "end"
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
    /*
    ".navBar:not(.bottom)~*": { marginTop: "4rem" },
    ".navBar .buttonGroup": { flex: 1 },
    ".navBar .button": { height: "4rem" },
    ".navBar .buttonGroup .button:first-child,\n.navBar .buttonGroup .button:last-child": {
        borderRadius: "0"
    },
    /*
    ".hidden": { display: "none !important" },
    ".field": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ".field label": { marginRight: "1rem" },
    ".field input, .field select": {
        flex: 1,
        height: "2rem",
        padding: "0.3rem 0.7rem",
        background: "#fff",
        color: "#000",
        border: "thin solid #dce5e8",
        borderRadius: "0.35rem"
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
    */
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
    /*
    ".table": { padding: "1rem", width: "100%", textAlign: "center" },
    ".table tr": { height: "2.5rem" },
    ".table tr td": { color: "#000", background: "#eff8ff" },
    ".table tr th": { color: "#000", background: "#9fcedf", fontWeight: "bold" },
    ".table tr:first-child th:first-child,\n.table tr:first-child td:first-child": {
        borderRadius: "0.35rem 0 0 0"
    },
    ".table tr:first-child th:last-child, \n.table tr:first-child td:last-child": {
        borderRadius: "0 0.35rem 0 0"
    },
    ".table tr:last-child td:first-child": { borderRadius: "0 0 0 0.35rem" },
    ".table tr:last-child td:last-child": { borderRadius: "0 0 0.35rem 0" },
    ".table tr.total-line td": {
        backgroundColor: "#d9ebf2",
        color: "#000",
        fontWeight: "bold"
    },
    ".table:has(thead) td:first-child": { borderTopLeftRadius: "0 !important" },
    ".table:has(thead) td:last-child": { borderTopRightRadius: "0 !important" },
    ".active": {
        color: "#fff",
        background: "var(--blue-primary)",
        border: "thin solid var(--blue-primary-border)"
    },
    ".active:active": {
        background: "var(--blue-primary-active)",
        border: "thin solid var(--blue-primary-active-border)"
    },*/
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
    /*
    ".warning": {
        color: "#000",
        background: "var(--yellow-warning)",
        border: "thin solid var(--yellow-warning-border)"
    },
    ".warning:active": {
        background: "var(--yellow-warning-active)",
        border: "thin solid var(--yellow-warning-active-border)"
    },
    ".danger": {
        color: "#fff",
        background: "var(--red-danger)",
        border: "thin solid var(--red-danger-border)"
    },
    ".danger:active": {
        background: "var(--red-danger-active)",
        border: "thin solid var(--red-danger-active-border)"
    },*/
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