import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/AddTodo';
import { useState } from 'react';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

const STORAGE_KEY = 'TODO_LIST_ITEMS'

export default function App() {
  const { state, addTodo, toggleTodo, removeTodo } = useTodos()
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input.trim())
      setInput('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <AddTodo 
        value={input}
        onChange={setInput}
        onSave={handleAdd}
      />
      <TodoList 
        items={state.todos} 
        onToggle={toggleTodo}
        onRemove={removeTodo} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
