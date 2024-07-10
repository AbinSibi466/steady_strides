import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import {firebase} from '../firebaseConfig';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('tasks')
      .onSnapshot(querySnapshot => {
        console.log("====")
        const list = [];
        querySnapshot.forEach(doc => {
          const { title, completed } = doc.data();
          list.push({
            id: doc.id,
            title,
            completed,
          });
        });
        setTasks(list);
      });

    return () => unsubscribe();
  }, []);

  const handleAddTask = () => {
    if (task.length > 0) {

        firebase.firestore()
        .collection('tasks')
        .add({
          title: task,
          completed: false,
        })
        .then(() => {
          console.log('Task added!');
        });
      setTask('');
    }
  };

  const toggleTaskCompletion = id => {
    const taskRef = firebase.firestore().collection('tasks').doc(id);
    console.log("====")
    taskRef.update({
      completed: !tasks.find(task => task.id === id).completed
    });
  };

  const handleDeleteTask = id => {
    firebase.firestore()
      .collection('tasks')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Task deleted!');
      });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => toggleTaskCompletion(item.id)}
      onLongPress={() => handleDeleteTask(item.id)}
    >
      <Text style={[styles.taskText, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        onChangeText={text => setTask(text)}
        value={task}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderWidth:1,
        borderColor:'red'
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
});
