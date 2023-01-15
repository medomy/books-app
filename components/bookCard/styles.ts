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
        }
    }
)

export default styles;