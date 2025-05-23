import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import { Button } from "react-native-paper";
import { SilverGradient } from "./SilverGradient";
import { Colors } from "../constants";
import { GradientButtonProps } from "../types";

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
          borderRadius: 10,
          overflow: "hidden",
          width: 165,
          marginTop: 10,
          padding: 6,
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
            fontSize: 18,
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
