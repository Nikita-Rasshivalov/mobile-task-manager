import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TaskProvider } from "./context/TaskContext";
import TaskListScreen from "./screens/TaskListScreen";
import TaskDetailScreen from "./screens/TaskDetailScreen";
import { Colors } from "./constants";
import { StatusBar } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primaryBgColor}
          translucent={false}
        />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="TaskList"
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primaryBgColor,
              },
              headerTintColor: Colors.primaryTextColor,
              headerTitleStyle: {
                fontWeight: "600",
              },
            }}
          >
            <Stack.Screen
              name="TaskList"
              component={TaskListScreen}
              options={{ title: "Task Manager" }}
            />
            <Stack.Screen
              name="TaskDetail"
              component={TaskDetailScreen}
              options={{ title: "Task Details" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TaskProvider>
  );
}
