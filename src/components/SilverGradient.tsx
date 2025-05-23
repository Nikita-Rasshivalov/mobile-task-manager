import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants";

export const SilverGradient = ({ children, style }: any) => (
  <LinearGradient
    colors={[Colors.secondaryBgColor, Colors.primaryBgColor, Colors.silver]}
    locations={[0, 0.6, 1]}
    start={{ x: -0.2, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={style}
  >
    {children}
  </LinearGradient>
);
