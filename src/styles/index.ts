import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, SIZES, SPACING } from "@/constants";

// Reusable style utilities
export const createCard = (backgroundColor: string = COLORS.background) => ({
  backgroundColor,
  borderRadius: BORDER_RADIUS.lg,
  padding: SPACING.md,
  elevation: 2,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
});

export const createButton = (
  backgroundColor: string = COLORS.primary,
  textColor: string = "#FFFFFF"
) => ({
  backgroundColor,
  paddingVertical: SPACING.sm,
  paddingHorizontal: SPACING.md,
  borderRadius: BORDER_RADIUS.md,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  elevation: 2,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
});

export const createButtonText = (color: string = "#FFFFFF") => ({
  fontSize: SIZES.medium,
  color,
  fontWeight: "600",
});

export const createSectionTitle = (color: string = COLORS.text) => ({
  fontSize: SIZES.large,
  fontWeight: "bold",
  color,
  marginBottom: SPACING.sm,
});

export const createCardContainer = () => ({
  marginHorizontal: SPACING.md,
  marginVertical: SPACING.sm,
});

// Common layout styles
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    padding: SPACING.md,
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: SIZES.xl,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: SPACING.md,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  row: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  spaceBetween: {
    justifyContent: "space-between" as const,
  },
  center: {
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
});

export default commonStyles;
