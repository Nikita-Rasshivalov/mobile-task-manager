import { StyleSheet } from "react-native";
import { Colors } from "../constants";

export const StatusSelectorStyles = StyleSheet.create({
  label: {
    color: Colors.primaryTextColor,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: "row",
  },
  statusButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.silver,
    backgroundColor: Colors.primaryInputBgcolor,
  },
  statusButtonActive: {
    backgroundColor: Colors.primaryBgColor,
    borderColor: Colors.primaryBgColor,
  },
  statusText: {
    color: Colors.primaryTextColor,
    fontSize: 16,
    fontWeight: "500",
  },
  statusTextActive: {
    color: Colors.secondaryTextColor,
    fontSize: 16,
    fontWeight: "600",
  },
});
