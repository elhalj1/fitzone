import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackIcon = () => {
    return (
        <TouchableOpacity style={styles.backBox}>
            <Ionicons
                name="arrow-back-circle"
                size={60}
                color="#868282"
                style={styles.backText}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backBox: {
        // padding: 4,
        width: 60,
        // backgroundColor: "#868282",
        opacity: 1,
        borderRadius: 30,
        textAlign: "center",
        alignItems: "center",
    },
    backText: {
        marginTop: 0,
    },
});
export default BackIcon;
