import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContainer : {
        flexDirection : "row",
        padding : 8,
        justifyContent : "space-between"
    },
    input : {
        flex : 1,
        borderColor : "#46AA71",
        borderWidth : StyleSheet.hairlineWidth,
        padding : 8,
        borderRadius : 6,
        marginHorizontal : 6
    },
    searchBtn : {
        width : "30%",
        padding : 8,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#46AA71",
        marginHorizontal : 6
    }
})

export default styles;