import { StyleSheet } from "react-native";
import { Colors } from "../constants";

export const TaskListScreenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primaryBgColor,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 8,
  },
  addIcon: {
    backgroundColor: Colors.accentColor,
    borderRadius: 24,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 32,
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: Colors.secondaryBgColor,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primaryTextColor,
  },
  dateText: {
    color: Colors.primaryTextColor,
  },
  statusText: {
    marginTop: 4,
    color: Colors.secondaryTextColor,
    fontWeight: "800",
    fontSize: 16,
  },
});
