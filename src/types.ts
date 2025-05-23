import { StyleProp, ViewStyle, TextStyle } from "react-native";

export type RootStackParamList = {
  TaskList: undefined;
  TaskDetail: { taskId?: string };
};

export interface Task {
  id: string;
  title: string;
  description: string;
  datetime: string;
  location: Address;
  status: TaskStatus;
}

export interface Address {
  county: string;
  city: string;
  street: string;
  house: string;
  room?: string;
  index?: string;
}

export interface AddressModalProps {
  location: Address;
  setLocation: (address: Address) => void;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

export interface DateTimePickerProps {
  label: string;
  date: Date;
  onConfirm: (date: Date) => void;
  isVisible: boolean;
  show: () => void;
  hide: () => void;
}

export interface GradientButtonProps {
  onPress: () => void;
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export interface SelectorProps {
  status: TaskStatus;
  setStatus: (s: TaskStatus) => void;
}

export type Screens = "TaskList" | "TaskDetail";

export enum TaskStatus {
  InProgress = "In Progress",
  Completed = "Completed",
  Cancelled = "Cancelled",
}
