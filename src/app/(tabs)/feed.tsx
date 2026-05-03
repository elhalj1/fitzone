import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Feed() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Feed</Text>
                <TouchableOpacity onPress={() => router.push("/connexion")}>
                    <Text style={styles.logout}>Déconnexion</Text>
                </TouchableOpacity>
            </View>

            {/* Hello Header */}
            <View style={styles.headerContainer}>
                <View style={styles.headerBoxLeft}>
                    <Text style={styles.headerGreating}>Bonjour</Text>
                    <View style={styles.userNameBox}>
                        <Text style={styles.userNameLeft}>Wilson</Text>
                    </View>
                </View>
                <View style={styles.headerBoxRight}>
                    <Text style={styles.timeRight}>12 j</Text>
                    <Text style={styles.userNameRight}>KY</Text>
                </View>
            </View>

            {/* Calorie Box */}
            <SafeAreaView style={styles.calorieContainer}>
                <View style={styles.calorieBox}>
                    <Text style={styles.calorieFirstText}>1,840</Text>
                    <Text style={styles.calorieSecondText}>kcl / 2200</Text>
                </View>
                <View style={styles.calorieBox}>
                    <Text style={styles.calorieFirstText}>120</Text>
                    <Text style={styles.calorieSecondText}>
                        protéines / 150
                    </Text>
                </View>
                <View style={styles.calorieBox}>
                    <Text style={styles.calorieFirstText}>4</Text>
                    <Text style={styles.calorieSecondText}>séances / sem</Text>
                </View>
            </SafeAreaView>

            {/* Dayly SeanceBox */}
            <View style={styles.seanceContainer}>
                <Text style={styles.seanceLabel}>SEANCE DU JOUR</Text>
                <Text style={styles.seanceText1}>Push Day -- Pectoraux</Text>
                <TouchableOpacity style={styles.seanceButton}>
                    <Text style={styles.seanceText}>Démarer la séance</Text>
                </TouchableOpacity>
            </View>

            <SafeAreaView>
                <ScrollView>
                    <View style={styles.content}>
                        <Text style={styles.welcomeText}>
                            Bienvenue dans votre feed FitZone!
                        </Text>
                        <Text style={styles.subtitle}>
                            Ici vous verrez vos activités et celles de votre
                            salle
                        </Text>

                        <View style={styles.placeholder}>
                            <Text style={styles.placeholderText}>🏋️‍♂️</Text>
                            <Text style={styles.placeholderTitle}>
                                Votre feed est vide
                            </Text>
                            <Text style={styles.placeholderSubtitle}>
                                Commencez à vous entraîner pour voir vos
                                activités ici
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 4,
        margin: 4,
    },
    headerBoxLeft: { gap: 2 },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    headerGreating: { fontSize: 20 },
    userNameBox: { marginLeft: 2 },
    userNameLeft: { fontSize: 26 },
    headerBoxRight: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 10,
    },
    timeRight: {
        width: 50,
        padding: 4,
        borderWidth: 2,
        borderColor: "#8092a0",
        borderRadius: 20,
        textAlign: "center",
        backgroundColor: "#5aa4e0",
        color: "#fff",
    },
    userNameRight: {
        width: 40,
        height: 40,
        padding: 4,
        borderWidth: 2,
        borderColor: "#a5ab89",
        borderRadius: 40,
        textAlign: "center",
        backgroundColor: "#e0de5ab6",
        color: "#fff",
    },
    calorieContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: 5,
    },
    calorieBox: {
        backgroundColor: "#ffffff",
        width: 120,
        height: 80,
        padding: 4,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#c1bebe",
        borderRadius: 10,
        elevation: 4,
    },
    calorieFirstText: { fontSize: 32 },
    welcomeText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    calorieSecondText: {},
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 40,
    },
    seanceContainer: {
        flexDirection: "column",
        marginHorizontal: 20,
        gap: 4,
        padding: 4,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#d8e2e0",
        backgroundColor: "#ffffff",
        justifyContent: "flex-start",
        elevation: 4,
    },
    seanceLabel: { fontSize: 32, color: "#bfadad" },
    seanceText: { fontSize: 24, color: "#fff" },
    seanceText1: { fontSize: 32, color: "#bfadad" },
    seanceButton: {
        backgroundColor: "#149ad4",
        padding: 2,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 4,
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
