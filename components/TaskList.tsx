import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "first task" },
    { id: 2, description: "second task" },
  ]);

  const [newTask, setNewTask] = useState("Hello");
  const [textInput, setTextInput] = useState("Hello");

  const createTask = () => {
    setTasks([
      ...tasks,
      {
        description: newTask,
        id: tasks.length,
      },
    ]);

    setNewTask("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <TextInput
        value={textInput || ""}
        onChangeText={(text) => {
          console.log(text);

          setTextInput(text);
        }}
        placeholder="New task"
        placeholderTextColor="gray"
        style={styles.input}
      />
      {/* <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskListItem task={item} />}
      /> */}
      <Pressable style={styles.button} onPress={createTask}>
        <Text style={styles.text}>Add Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
    gap: 5,
    flex: 1,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: "red",
    padding: 20,
    textAlign: "left",
    backgroundColor: "white",

    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "red",
  },
  text: {
    // fontSize: 16,
    // lineHeight: 21,
    // fontWeight: "bold",
    // letterSpacing: 0.25,
    // color: "black",
  },
});
