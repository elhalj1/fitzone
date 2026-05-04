import { FeedScreenStyles } from "@/styles/screens/FeedScreen.styles";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Feed() {
    const router = useRouter();

    return (
        // Header Feed
        <View style={FeedScreenStyles.container}>
            <View style={FeedScreenStyles.header}>
                <Text style={FeedScreenStyles.title}>Feed</Text>
                <TouchableOpacity onPress={() => router.push("/connexion")}>
                    <Text style={FeedScreenStyles.logout}>Déconnexion</Text>
                </TouchableOpacity>
            </View>

            {/* Hello Header */}
            <View style={FeedScreenStyles.headerContainer}>
                <View style={FeedScreenStyles.headerBoxLeft}>
                    <Text style={FeedScreenStyles.headerGreating}>Bonjour</Text>
                    <View style={FeedScreenStyles.userNameBox}>
                        <Text style={FeedScreenStyles.userNameLeft}>
                            Wilson
                        </Text>
                    </View>
                </View>
                <View style={FeedScreenStyles.headerBoxRight}>
                    <Text style={FeedScreenStyles.timeRight}>12 j</Text>
                    <Text style={FeedScreenStyles.userNameRight}>KY</Text>
                </View>
            </View>

            <ScrollView>
                {/* Calorie Box */}
                <SafeAreaView style={FeedScreenStyles.calorieContainer}>
                    <View style={FeedScreenStyles.calorieBox}>
                        <Text style={FeedScreenStyles.calorieFirstText}>
                            1,840
                        </Text>
                        <Text style={FeedScreenStyles.calorieSecondText}>
                            kcl / 2200
                        </Text>
                    </View>
                    <View style={FeedScreenStyles.calorieBox}>
                        <Text style={FeedScreenStyles.calorieFirstText}>
                            120
                        </Text>
                        <Text style={FeedScreenStyles.calorieSecondText}>
                            protéines / 150
                        </Text>
                    </View>
                    <View style={FeedScreenStyles.calorieBox}>
                        <Text style={FeedScreenStyles.calorieFirstText}>4</Text>
                        <Text style={FeedScreenStyles.calorieSecondText}>
                            séances / sem
                        </Text>
                    </View>
                </SafeAreaView>

                {/* Dayly SeanceBox */}
                <View style={FeedScreenStyles.seanceCard}>
                    <Text style={FeedScreenStyles.seanceCardLabel}>
                        SÉANCE DU JOUR
                    </Text>
                    <Text style={FeedScreenStyles.seanceCardTitle}>
                        Push Day - Pectoraux
                    </Text>
                    <TouchableOpacity style={FeedScreenStyles.seanceCardButton}>
                        <Text style={FeedScreenStyles.seanceCardButtonText}>
                            ▶ Démarrer la séance
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Actifs défis */}
                <View style={FeedScreenStyles.defisContainer}>
                    <Text style={FeedScreenStyles.defisLabel}>
                        DÉFIS ACTIFS
                    </Text>
                    <View style={FeedScreenStyles.defisCard}>
                        <View style={FeedScreenStyles.defisHeader}>
                            <View style={FeedScreenStyles.defisParticipants}>
                                <Text
                                    style={
                                        FeedScreenStyles.defisParticipantText
                                    }
                                >
                                    KY
                                </Text>
                                <Text style={FeedScreenStyles.defisVsText}>
                                    VS
                                </Text>
                                <Text
                                    style={
                                        FeedScreenStyles.defisParticipantText
                                    }
                                >
                                    AB
                                </Text>
                            </View>
                            <View style={FeedScreenStyles.defisChallengeInfo}>
                                <Text
                                    style={FeedScreenStyles.defisChallengeText}
                                >
                                    200 pompes en 7j
                                </Text>
                                <Text
                                    style={FeedScreenStyles.defisTimeRemaining}
                                >
                                    3j restants
                                </Text>
                            </View>
                        </View>
                        <View style={FeedScreenStyles.defisProgressContainer}>
                            <Text style={FeedScreenStyles.defisProgressText}>
                                Toi : 140
                            </Text>
                            <Text style={FeedScreenStyles.defisProgressText}>
                                Adversaire: 120
                            </Text>
                        </View>
                        <View style={FeedScreenStyles.defisProgressBar}>
                            <View
                                style={[
                                    FeedScreenStyles.defisProgressBarFill,
                                    FeedScreenStyles.defisProgressYou,
                                ]}
                            />
                            <View
                                style={[
                                    FeedScreenStyles.defisProgressBarFill,
                                    FeedScreenStyles.defisProgressOpponent,
                                ]}
                            />
                        </View>
                    </View>
                </View>

                <SafeAreaView>
                    <ScrollView>
                        <View style={FeedScreenStyles.content}>
                            <Text style={FeedScreenStyles.welcomeText}>
                                Bienvenue dans votre feed FitZone!
                            </Text>
                            <Text style={FeedScreenStyles.subtitle}>
                                Ici vous verrez vos activités et celles de votre
                                salle
                            </Text>

                            <View style={FeedScreenStyles.placeholder}>
                                <Text style={FeedScreenStyles.placeholderText}>
                                    🏋️‍♂️
                                </Text>
                                <Text style={FeedScreenStyles.placeholderTitle}>
                                    Votre feed est vide
                                </Text>
                                <Text
                                    style={FeedScreenStyles.placeholderSubtitle}
                                >
                                    Commencez à vous entraîner pour voir vos
                                    activités ici
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}
