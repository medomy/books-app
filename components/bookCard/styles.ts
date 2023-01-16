import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        bookCardContainer: {
            padding: 8,
            flexDirection: "row",
            marginBottom: 4,
            borderBottomColor: "gray",
            borderBottomWidth: StyleSheet.hairlineWidth
        },
        img: {
            width: 60,
            height: 60,
            marginRight: 6
        },
        infoContainer: {
            flex: 1,
        },
        title: {
            fontWeight: "bold",
            marginVertical: 4
        },
        authors: {
            fontWeight: "500"
        },
        activeAddToFavsBtn: {
            padding: 6,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#198655",
            width: "60%",
            marginTop: 6,
            borderRadius: 6
        },
        addToFavsTxt: {
            color: "white",
            fontWeight: "700"
        },
        removeFromFavsBtn: {
            padding: 6,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#dd3544",
            width: "60%",
            marginTop: 6,
            borderRadius: 6
        }
    }
)

export default styles;