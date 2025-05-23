import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SelectorProps, TaskStatus } from "../types";
import { StatusSelectorStyles as styles } from "./StatusSelector.styles";

const AVAILABLE_STATUSES: TaskStatus[] = [
  TaskStatus.InProgress,
  TaskStatus.Completed,
  TaskStatus.Cancelled,
];
export const StatusSelector = ({ status, setStatus }: SelectorProps) => (
  <View style={{ marginTop: 10 }}>
    <Text style={styles.label}>Status</Text>
    <View
      style={[
        styles.statusContainer,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
      ]}
    >
      {AVAILABLE_STATUSES.map((s) => (
        <TouchableOpacity
          key={s}
          style={[
            styles.statusButton,
            status === s && styles.statusButtonActive,
          ]}
          onPress={() => setStatus(s)}
        >
          <Text
            style={status === s ? styles.statusTextActive : styles.statusText}
          >
            {s}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);
