import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TaskListItem = ({ task, onPress, onDelete }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.taskTextContainer}>
        <Text style={styles.text}>{task.description}</Text>
      </Pressable>
      <Pressable onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
};

export default TaskListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  taskTextContainer: {
    flex: 1, // Takes up the remaining space
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  deleteButton: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
});
