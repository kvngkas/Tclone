import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Taskboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "first task" },
    { id: 2, description: "second task" },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), description: newTask },
      ]);
      setNewTask("");
    } else {
      alert("Task cannot be empty.");
    }
  };

  const handleDelete = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
     
        <Text style={styles.header}>Add Task</Text>
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          placeholder="New task"
          placeholderTextColor="gray"
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={handleAddTask}>
          <Text style={styles.btnText}>Add Task</Text>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Link href={`/${item.id}`} style={styles.taskText}>
                {item.description}
              </Link>
              <Pressable
                onPress={() => handleDelete(item)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </Pressable>
            </View>
          )}
        />
      
      </View>
    </SafeAreaView>
  );
};

export default Taskboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1465de",
  },
  headerContainer: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  input: {
    color: "#000",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: "white",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1465de",
  },
  listContainer: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  taskText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1465de",
    textDecorationLine: "none",
  },
  deleteButton: {
    padding: 10,
    backgroundColor: "#1465de",
    borderRadius: 5,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
});
