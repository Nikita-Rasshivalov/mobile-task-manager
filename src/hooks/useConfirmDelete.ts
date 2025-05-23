import { Alert } from "react-native";

export const useConfirmDelete = (onConfirm: () => void, taskTitle?: string) => {
  const confirmDelete = () => {
    Alert.alert(
      "Confirm Deletion",
      taskTitle
        ? `Are you sure you want to delete the task "${taskTitle}"?`
        : "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: onConfirm,
        },
      ],
      { cancelable: true }
    );
  };

  return confirmDelete;
};
