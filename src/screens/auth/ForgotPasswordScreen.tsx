import { InputField } from "@/components/forms/InputField";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { ActionButton } from "@/components/ui/ActionButton";
import { LinkButton } from "@/components/ui/LinkButton";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ForgotPassword() {
    const router = useRouter();

    return (
        <ScreenLayout scrollable={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Mot de passe oublié</Text>

                <Text style={styles.description}>
                    Entrez votre adresse email et nous vous enverrons un lien
                    pour réinitialiser votre mot de passe.
                </Text>

                <InputField
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    keyboardType="email-address"
                />

                <ActionButton title="Envoyer le lien" />

                <LinkButton
                    title="Retour à la connexion"
                    onPress={() => router.push("/")}
                />
            </View>
        </ScreenLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: "#666",
        marginBottom: 30,
        paddingHorizontal: 20,
    },
});
