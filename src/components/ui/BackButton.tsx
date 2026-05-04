import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

interface BackButtonProps {
    onPress?: () => void;
    size?: number;
    color?: string;
}

export function BackButton({
    onPress,
    size = 60,
    color = "#868282",
}: BackButtonProps) {
    const router = useRouter();

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            router.back();
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Ionicons name="arrow-back-circle" size={size} color={color} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        opacity: 1,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
});
