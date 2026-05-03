import { ActionButton } from "@/components/ActionButton";
import { BackButton } from "@/components/BackButton";
import { Dropdown } from "@/components/Dropdown";
import { InputField } from "@/components/InputField";
import { LinkButton } from "@/components/LinkButton";
import { PasswordRequirements } from "@/components/PasswordRequirements";
import { ScreenLayout } from "@/components/ScreenLayout";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type Room = "Abidjan" | "Marcory" | "Yopugon" | "Adjamé" | "Port bouet";

const ROOMS: Room[] = ["Abidjan", "Marcory", "Yopugon", "Adjamé", "Port bouet"];

export default function Inscription() {
    const router = useRouter();
    const [selectedRoom, setSelectedRoom] = useState<Room>("Abidjan");

    const passwordRequirements = [
        { label: "8 caractères minimum", met: false },
        { label: "Majuscule + chiffre", met: false },
    ];

    return (
        <ScreenLayout>
            <View style={styles.header}>
                <BackButton onPress={() => router.push("/")} />
                <Text style={styles.title}>Inscription</Text>
            </View>

            <InputField label="Nom" placeholder="Votre nom" />

            <InputField
                label="Email"
                placeholder="Votre email"
                keyboardType="email-address"
            />

            <InputField
                label="Mot de passe"
                placeholder="Votre mot de passe"
                secureTextEntry
            />

            <InputField
                label="Confirmer le mot de passe"
                placeholder="Confirmez votre mot de passe"
                secureTextEntry
            />

            <Dropdown
                label="Choix de la salle"
                options={ROOMS}
                selected={selectedRoom}
                onSelect={setSelectedRoom}
            />

            <PasswordRequirements requirements={passwordRequirements} />

            <ActionButton title="S'inscrire" />

            <LinkButton
                title="Déjà un compte? Se connecter"
                onPress={() => router.push("/")}
            />
        </ScreenLayout>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginBottom: 40,
        alignItems: "center",
        gap: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
    },
});
