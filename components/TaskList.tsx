import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import TaskListItem from './TaskListItem'
import { useState } from 'react'

export default function TaskList() {
    const [tasks, setTasks] = useState([
        {id:'123',description: 'first task'},
        {id:'67',description: 'second task'}
    ]);


    const [newTask, setNewTask] = useState('');

    const createTask = () => {
        setTasks([...tasks, {
          description: newTask,
          id: ''
        }]);


        setNewTask('');
        
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <FlatList
      data={tasks}
      renderItem={({ item}) => (
        <TaskListItem task={item}/>
      )}
      />
     <TextInput
     value={newTask}
     onChangeText={setNewTask}
     placeholder="New task"
     placeholderTextColor="gray"
     style={styles.input}
     />
      <Button title="Add task" onPress={createTask} />;
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101112',
        padding: 10,
        borderRadius: 5,
        gap: 5,
        flex: 1,
      },
      title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
      },
      input: {
        color: 'white',
        padding: 15,
        backgroundColor: '#1D2125',
        borderRadius: 5,
    },   
})