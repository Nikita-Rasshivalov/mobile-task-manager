import { StyleSheet } from "react-native";
import { Colors } from "../constants";

export const LabeledInputStyles = StyleSheet.create({
  label: {
    color: Colors.primaryTextColor,
    fontSize: 18,
    fontWeight: "600",
  },

  input: {
    backgroundColor: Colors.primaryInputBgcolor,
    color: Colors.primaryTextColor,
    fontWeight: 400,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: Colors.silver,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  section: {
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginTop: 4,
    marginBottom: 6,
    marginLeft: 4,
    minHeight: 18,
  },
  inputError: {
    borderColor: "red",
  },
});
