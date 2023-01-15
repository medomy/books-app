import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 8,
        marginVertical: 6
    },
    activeTab: {
        padding: 6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#46AA71",
        borderRadius: 3
    },
    inActiveTab: {
        padding: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    activeTxt : {
        color : "white",
        fontWeight : "bold"
    },
    inActiveTxt : {
        color : "black"
    }
})

export default styles;