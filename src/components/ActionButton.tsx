import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ActionButtonProps {
    title: string;
    onPress?: () => void;
    variant?: "primary" | "secondary";
}

export function ActionButton({
    title,
    onPress,
    variant = "primary",
}: ActionButtonProps) {
    const isPrimary = variant === "primary";

    return (
        <TouchableOpacity
            style={[
                styles.button,
                isPrimary ? styles.primary : styles.secondary,
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.text,
                    isPrimary ? styles.primaryText : styles.secondaryText,
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    primary: {
        backgroundColor: "#007AFF",
    },
    secondary: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#007AFF",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    },
    primaryText: {
        color: "#fff",
    },
    secondaryText: {
        color: "#007AFF",
    },
});
