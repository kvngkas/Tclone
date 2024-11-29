import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TaskListItem({ task }) {
  function deleteTask(_event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Link href={'/${task.id}'} asChild>
    <Pressable style={styles.container}>
       
        <Text style={styles.text}>{task.description}</Text>
      <AntDesign onPress={deleteTask} name="close" size={16} color="gray" />
    </Pressable>
     </Link>     
  )
}

const styles = StyleSheet.create({
    root: {
        
      },
      container: {
        backgroundColor: '#1D2125',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
      },
      text: {
        color: 'white',
        fontSize: 16,
      },
})