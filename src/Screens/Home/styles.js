import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "Roboto",
        color: BaseColor.primaryColor
    }
});

export default styles;