import { StyleSheet } from "react-native";
import { Colors } from "../constants";

export const TaskDetailScreenStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBgColor,
  },
  scrollContent: {
    paddingTop: 0,
    paddingBottom: 12,
    paddingHorizontal: 18,
    flexGrow: 1,
  },
  card: {
    backgroundColor: Colors.secondaryBgColor,
    borderRadius: 12,
    elevation: 4,
  },
});
