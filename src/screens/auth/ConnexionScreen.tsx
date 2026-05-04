import { InputField } from "@/components/forms/InputField";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { ActionButton } from "@/components/ui/ActionButton";
import { LinkButton } from "@/components/ui/LinkButton";
import Separator from "@/components/ui/Separator";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Connexion = () => {
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
};

export default Connexion;

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
