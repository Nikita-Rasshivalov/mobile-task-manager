import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { LabeledInputStyles as styles } from "./LabeledInput.styles";
import { Colors } from "../constants";

type LabeledInputProps = TextInputProps & {
  label: string;
  multiline?: boolean;
  errorMessage?: string;
};

export function LabeledInput({
  label,
  multiline,
  style,
  errorMessage,
  ...rest
}: LabeledInputProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.errorText}>{errorMessage || " "}</Text>
      <TextInput
        style={[
          styles.input,
          multiline && styles.textArea,
          errorMessage && styles.inputError,
          style,
        ]}
        multiline={multiline}
        placeholderTextColor={Colors.placeholderTextColor}
        {...rest}
      />
    </View>
  );
}
