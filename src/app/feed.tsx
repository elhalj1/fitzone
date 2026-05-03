import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Feed() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Feed</Text>
                <TouchableOpacity onPress={() => router.push("/")}>
                    <Text style={styles.logout}>Déconnexion</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.welcomeText}>
                    Bienvenue dans votre feed FitZone!
                </Text>
                <Text style={styles.subtitle}>
                    Ici vous verrez vos activités et celles de votre salle
                </Text>

                <View style={styles.placeholder}>
                    <Text style={styles.placeholderText}>🏋️‍♂️</Text>
                    <Text style={styles.placeholderTitle}>
                        Votre feed est vide
                    </Text>
                    <Text style={styles.placeholderSubtitle}>
                        Commencez à vous entraîner pour voir vos activités ici
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: 40,
        // backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    logout: {
        color: "#FF3B30",
        fontSize: 16,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 40,
    },
    placeholder: {
        alignItems: "center",
        padding: 40,
    },
    placeholderText: {
        fontSize: 60,
        marginBottom: 20,
    },
    placeholderTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    placeholderSubtitle: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
});
