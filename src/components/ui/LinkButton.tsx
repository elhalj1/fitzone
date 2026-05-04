import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface LinkButtonProps {
    title: string;
    onPress?: () => void;
    align?: "left" | "center" | "right";
}

export function LinkButton({
    title,
    onPress,
    align = "center",
}: LinkButtonProps) {
    const alignStyle = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
    }[align];

    return (
        <TouchableOpacity
            style={[styles.container, { alignSelf: alignStyle }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    text: {
        color: "#007AFF",
        fontSize: 16,
    },
});
