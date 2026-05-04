import { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface ScreenLayoutProps {
    children: ReactNode;
    scrollable?: boolean;
}

export function ScreenLayout({
    children,
    scrollable = true,
}: ScreenLayoutProps) {
    const content = scrollable ? (
        <ScrollView>{children}</ScrollView>
    ) : (
        children
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {content}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
});
