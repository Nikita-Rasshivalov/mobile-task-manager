import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { Button } from "react-native-paper";
import { SilverGradient } from "./SilverGradient";
import { Colors } from "../constants";
import { GradientButtonProps } from "../types";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";

export function GradientButton({
  onPress,
  label,
  containerStyle,
  labelStyle,
}: GradientButtonProps) {
  return (
    <SilverGradient
      style={[
        {
          borderRadius: scale(10),
          overflow: "hidden",
          width: scale(135),
          marginTop: verticalScale(10),
          padding: scale(6),
        },
        containerStyle,
      ]}
    >
      <Button
        mode="text"
        onPress={onPress}
        style={{ backgroundColor: "transparent" }}
        labelStyle={[
          {
            fontSize: moderateScale(18),
            fontWeight: "600",
            color: Colors.primaryTextColor,
          },
          labelStyle,
        ]}
      >
        {label}
      </Button>
    </SilverGradient>
  );
}
