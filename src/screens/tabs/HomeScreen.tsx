import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabIndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Accueil</Text>
        <Text style={styles.subtitle}>Bienvenue sur FitZone</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#666666",
  },
});
