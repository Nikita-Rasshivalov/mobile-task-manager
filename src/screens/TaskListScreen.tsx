import React, { useState, useMemo } from "react";
import { View, FlatList } from "react-native";
import { useTaskContext } from "../hooks/useTaskContext";
import { RootStackParamList, Task } from "../types";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Card, Text, Button, IconButton } from "react-native-paper";
import { TaskListScreenStyles as styles } from "./TaskListScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants";
import { SilverGradient } from "../components/SilverGradient";

const TaskListScreen = () => {
  const { tasks } = useTaskContext();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [sortByStatus, setSortByStatus] = useState(false);

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) =>
      sortByStatus
        ? a.status.localeCompare(b.status)
        : new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
    );
  }, [tasks, sortByStatus]);

  const renderItem = ({ item }: { item: Task }) => (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate("TaskDetail", { taskId: item.id })}
    >
      <Card.Title title={item.title} titleStyle={styles.cardTitle} />
      <Card.Content>
        <Text variant="bodyMedium" style={styles.dateText}>
          {new Date(item.datetime).toLocaleString()}
        </Text>
        <Text variant="bodySmall" style={styles.statusText}>
          Status: {item.status}
        </Text>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.topBar}>
        <SilverGradient
          style={{ borderRadius: 6, minWidth: 220, maxWidth: 400 }}
        >
          <Button
            mode="text"
            onPress={() => setSortByStatus((prev) => !prev)}
            labelStyle={{
              color: Colors.primaryTextColor,
              paddingHorizontal: 12,
              paddingVertical: 8,
            }}
            style={{ backgroundColor: "transparent" }}
            icon="sort"
          >
            {sortByStatus ? "Sort by date" : "Sort by status"}
          </Button>
        </SilverGradient>

        <SilverGradient style={{ marginLeft: 8, borderRadius: 100 }}>
          <IconButton
            icon="plus"
            size={28}
            onPress={() => navigation.navigate("TaskDetail", {})}
            iconColor={Colors.primaryTextColor}
            style={{ backgroundColor: "transparent" }}
          />
        </SilverGradient>
      </View>
      <FlatList
        data={sortedTasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default TaskListScreen;
