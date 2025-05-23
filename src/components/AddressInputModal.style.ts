import { StyleSheet } from "react-native";
import { Colors } from "../constants";

export const AddressInputModalStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: Colors.primaryBgColor,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  modalContainer: {
    backgroundColor: Colors.secondaryBgColor,
    borderRadius: 16,
    padding: 24,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 18,
    color: Colors.primaryTextColor,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },

  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.primaryInputBgcolor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0A84FF",
    shadowColor: "#0A84FF",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 12,
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  locationButtonText: {
    color: "#0A84FF",
    fontWeight: "600",
    fontSize: 18,
  },
});
