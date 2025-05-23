import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DateTimePickerProps } from "../types";
import { Colors } from "../constants";

export const DateTimePickerField = ({
  label,
  date,
  onConfirm,
  isVisible,
  show,
  hide,
}: DateTimePickerProps) => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 8,
          marginTop: 10,
          color: Colors.primaryTextColor,
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        {label}
      </Text>
      <TouchableOpacity
        onPress={show}
        style={{
          padding: 12,
          backgroundColor: Colors.primaryInputBgcolor,
          borderWidth: 1,
          borderColor: Colors.silver,
          borderRadius: 8,
          marginBottom: 12,
          marginTop: 10,
        }}
      >
        <Text style={{ color: Colors.primaryTextColor, fontSize: 15 }}>
          {date.toLocaleString()}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isVisible}
        mode="datetime"
        date={date}
        onConfirm={(selectedDate) => {
          onConfirm(selectedDate);
          hide();
        }}
        onCancel={hide}
      />
    </View>
  );
};
