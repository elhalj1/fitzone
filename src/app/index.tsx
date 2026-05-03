import { ActionButton } from "@/components/ActionButton";
import { InputField } from "@/components/InputField";
import { LinkButton } from "@/components/LinkButton";
import { ScreenLayout } from "@/components/ScreenLayout";
import Separator from "@/components/Separator";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    const router = useRouter();

    return (
        <ScreenLayout scrollable={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Connexion</Text>

                <InputField
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    keyboardType="email-address"
                />

                <InputField
                    label="Mot de passe"
                    placeholder="*******"
                    secureTextEntry
                />

                <LinkButton
                    title="Mot de passe oublié?"
                    onPress={() => router.push("/forgotPassword")}
                    align="right"
                />

                <ActionButton
                    title="Connexion"
                    onPress={() => router.push("/feed")}
                />

                <View style={styles.separator}>
                    <Separator />
                    <Text>ou</Text>
                    <Separator />
                </View>

                <ActionButton
                    title="Inscription"
                    onPress={() => router.push("/inscription")}
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
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },
    separator: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        gap: 10,
    },
});
