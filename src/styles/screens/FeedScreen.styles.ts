import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, SIZES } from "@/constants";

export const FeedScreenStyles = StyleSheet.create({
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
  
  // Calorie Section
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
  calorieSecondText: {},
  
  // Seance Card Section
  seanceCard: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: "#2C3E50",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  seanceCardLabel: { 
    fontSize: 14, 
    color: "#27AE60",
    fontWeight: "600",
    marginBottom: 8,
    letterSpacing: 1,
  },
  seanceCardTitle: { 
    fontSize: 24, 
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 16,
  },
  seanceCardButton: {
    backgroundColor: "#27AE60",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: BORDER_RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  seanceCardButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  
  // Defis Section
  defisContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  defisLabel: { 
    fontSize: 18, 
    fontWeight: "bold",
    marginBottom: 10,
    color: COLORS.text,
  },
  defisCard: {
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.lg,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  defisHeader: {
    marginBottom: 16,
  },
  defisParticipants: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  defisParticipantText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.text,
  },
  defisVsText: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.primary,
    marginHorizontal: 12,
  },
  defisChallengeInfo: {
    alignItems: "center",
  },
  defisChallengeText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 4,
  },
  defisTimeRemaining: {
    fontSize: 14,
    color: COLORS.textSecondary,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS.sm,
  },
  defisProgressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  defisProgressText: {
    fontSize: 14,
    color: COLORS.text,
  },
  defisProgressBar: {
    height: 8,
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.sm,
    overflow: "hidden",
    flexDirection: "row",
  },
  defisProgressBarFill: {
    height: "100%",
    borderRadius: BORDER_RADIUS.sm,
  },
  defisProgressYou: {
    width: "70%",
    backgroundColor: COLORS.primary,
  },
  defisProgressOpponent: {
    width: "60%",
    backgroundColor: COLORS.textSecondary,
    marginLeft: -20,
  },
  
  // Content Section
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

export default FeedScreenStyles;
