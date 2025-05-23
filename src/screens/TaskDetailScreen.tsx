import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { TaskStatus, RootStackParamList, Address } from "../types";
import { TaskDetailScreenStyles as styles } from "./TaskDetailScreen.styles";
import { useTaskContext } from "../hooks/useTaskContext";
import { useConfirmDelete } from "../hooks/useConfirmDelete";
import { generateId } from "../utils/utils";
import { DateTimePickerField } from "../components/DateTimePickerField";
import AddressInputModal from "../components/AddressInputModal";
import { StatusSelector } from "../components/StatusSelector";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-paper";
import { LabeledInput } from "../components/LabeledInput";
import { GradientButton } from "../components/GradientButton";

type TaskDetailScreenRouteProp = RouteProp<RootStackParamList, "TaskDetail">;

const defaultAddress: Address = {
  county: "",
  city: "",
  street: "",
  house: "",
  room: "",
  index: "",
};

const TaskDetailScreen = () => {
  const { params } = useRoute<TaskDetailScreenRouteProp>();
  const navigation = useNavigation();
  const { tasks, addTask, updateTask, deleteTask } = useTaskContext();
  const existingTask = tasks.find((t) => t.id === params?.taskId);

  const [title, setTitle] = useState(existingTask?.title || "");
  const [description, setDescription] = useState(
    existingTask?.description || ""
  );
  const [datetime, setDatetime] = useState(
    new Date(existingTask?.datetime || Date.now())
  );
  const [location, setLocation] = useState<Address>(
    existingTask?.location || defaultAddress
  );
  const [status, setStatus] = useState<TaskStatus>(
    existingTask?.status || TaskStatus.InProgress
  );
  const [showDate, setShowDate] = useState(false);

  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const confirmDelete = useConfirmDelete(() => {
    if (existingTask) {
      deleteTask(existingTask.id);
      navigation.goBack();
    }
  }, existingTask?.title);

  const handleSave = () => {
    const newErrors: typeof errors = {};

    if (!title.trim()) {
      newErrors.title = "Please enter a task title";
    }
    if (!description.trim()) {
      newErrors.description = "Please enter a task description";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const taskData = {
      title,
      description,
      datetime: datetime.toISOString(),
      location,
      status,
    };

    if (existingTask) {
      updateTask({ ...existingTask, ...taskData });
    } else {
      addTask({
        id: generateId(),
        ...taskData,
        status: TaskStatus.InProgress,
      });
    }

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card style={styles.card}>
          <Card.Content style={{ marginTop: -15 }}>
            <LabeledInput
              label="Title"
              value={title}
              onChangeText={(text) => {
                setTitle(text);
                if (errors.title)
                  setErrors((prev) => ({ ...prev, title: undefined }));
              }}
              placeholder="Enter title"
            />

            <LabeledInput
              label="Description"
              value={description}
              onChangeText={(text) => {
                setDescription(text);
                if (errors.description)
                  setErrors((prev) => ({ ...prev, description: undefined }));
              }}
              placeholder="Enter description"
              errorMessage={errors.description}
            />

            <View>
              <DateTimePickerField
                label="Date and time"
                date={datetime}
                isVisible={showDate}
                show={() => setShowDate(true)}
                hide={() => setShowDate(false)}
                onConfirm={setDatetime}
              />
            </View>

            <View>
              <AddressInputModal
                location={location}
                setLocation={setLocation}
              />
            </View>

            {existingTask && (
              <View>
                <StatusSelector status={status} setStatus={setStatus} />
              </View>
            )}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <GradientButton onPress={handleSave} label="Save" />
              {existingTask && (
                <GradientButton
                  onPress={confirmDelete}
                  label="Delete"
                  containerStyle={{ marginTop: 10 }}
                />
              )}
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetailScreen;
