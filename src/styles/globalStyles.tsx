import { StyleSheet } from "react-native";
import { myColors } from "./colors";

export const Styles = StyleSheet.create({
    btn:{
        width: 90,
        height: 90,
        backgroundColor: myColors.btn,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    btnEqual:{
        width: 190,
        height: 90,
        backgroundColor: myColors.btn,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    btnLight:{
        width: 90,
        height: 90,
        backgroundColor: myColors.btnLight,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    btnDark:{
        width: 90,
        height: 90,
        backgroundColor: myColors.btnDark,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    textBtnTop:{
        fontSize: 36,
        fontWeight: '300',
        color: myColors.textTop
    },
    textBtnSide:{
        fontSize: 36,
        fontWeight: '300',
        color: myColors.textSide
    },
    textBtn:{
        fontSize: 36,
        fontWeight: '300',
        color: myColors.text
    },
    textDisplay1:{
        fontSize: 80,
        fontWeight: '200',
        color: myColors.text,
        alignSelf: 'flex-end'
    },
    textDisplay2:{
        fontSize: 40,
        fontWeight: '200',
        color: myColors.text,
        alignSelf: 'flex-end'
    },
    textHistory:{
        fontSize: 25,
        fontWeight: '200',
        color: myColors.text,
        alignSelf: 'flex-end',
        marginBottom: 5,
        borderBottomColor: '#D5D5D5',
        borderBottomWidth: 1
    },
    row:{
        maxWidth: '100%',
        flexDirection: "row"
    },
    viewBotton: {
        position: "absolute",
        bottom: 30
    }
})