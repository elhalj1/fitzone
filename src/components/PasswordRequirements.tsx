import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

interface Requirement {
    label: string;
    met: boolean;
}

interface PasswordRequirementsProps {
    requirements: Requirement[];
}

export function PasswordRequirements({
    requirements,
}: PasswordRequirementsProps) {
    return (
        <View style={styles.container}>
            {requirements.map((req, index) => (
                <View key={index} style={styles.row}>
                    <View style={styles.bullet}>
                        <FontAwesome
                            name={req.met ? "check-square" : "square-o"}
                            size={20}
                            color={req.met ? "green" : "#666"}
                        />
                    </View>
                    <Text
                        style={[
                            styles.text,
                            req.met && styles.textMet,
                        ]}
                    >
                        {req.label}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 12,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        gap: 8,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    bullet: {
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 14,
        color: "#666",
    },
    textMet: {
        color: "green",
    },
});
