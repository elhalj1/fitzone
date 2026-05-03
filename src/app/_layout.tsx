import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
    const [count, setCount] = useState(0);
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />

            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="inscription" />
        </Stack>
    );
}
