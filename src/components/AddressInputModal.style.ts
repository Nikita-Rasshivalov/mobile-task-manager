import { StyleSheet } from "react-native";
import { Colors } from "../constants";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const AddressInputModalStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: Colors.primaryBgColor,
    justifyContent: "center",
    paddingHorizontal: scale(24),
    paddingVertical: scale(15),
  },
  modalContainer: {
    backgroundColor: Colors.secondaryBgColor,
    borderRadius: scale(16),
    padding: scale(24),
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: scale(10),
    shadowOffset: { width: 0, height: verticalScale(6) },
  },
  modalTitle: {
    fontSize: moderateScale(120),
    fontWeight: "900",
    marginBottom: verticalScale(18),
    color: Colors.primaryTextColor,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    backgroundColor: Colors.primaryInputBgcolor,
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: "#0A84FF",
    shadowColor: "#0A84FF",
    shadowOpacity: 0.2,
    shadowRadius: scale(5),
    shadowOffset: { width: 0, height: verticalScale(2) },
    marginBottom: verticalScale(12),
  },
  locationIcon: {
    fontSize: moderateScale(20),
    marginRight: scale(8),
  },
  locationButtonText: {
    color: "#0A84FF",
    fontWeight: "600",
    fontSize: moderateScale(18),
  },
});
