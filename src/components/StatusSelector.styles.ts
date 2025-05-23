import { StyleSheet } from "react-native";
import { Colors } from "../constants";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const StatusSelectorStyles = StyleSheet.create({
  label: {
    color: Colors.primaryTextColor,
    fontSize: moderateScale(18),
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  statusContainer: {
    flexDirection: "row",
  },
  statusButton: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: Colors.silver,
    backgroundColor: Colors.primaryInputBgcolor,
    width: scale(92),
  },
  statusButtonActive: {
    backgroundColor: Colors.primaryBgColor,
    borderColor: Colors.primaryBgColor,
  },
  statusText: {
    color: Colors.primaryTextColor,
    fontSize: moderateScale(11),
    fontWeight: "500",
  },
  statusTextActive: {
    color: Colors.secondaryTextColor,
    fontSize: moderateScale(11),
    fontWeight: "600",
  },
});
