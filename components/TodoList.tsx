import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Todo } from '../types/Todo'

interface TodoListProps {
  items: Todo[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export default function TodoList({ items, onToggle, onRemove }: TodoListProps) {
  return (
    <View style={styles.list}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={item.done ? styles.doneRow : styles.row}>
            <TouchableOpacity onPress={() => onToggle(item.id)}>
              <Text style={item.done ? styles.done : styles.text}>
                {item.name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onRemove(item.id)}>
              <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 8,
  },
  row: {
    marginBottom: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
  },
  doneRow: {
    marginBottom: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    backgroundColor: '#ccc'
  },
  text: {
    fontSize: 15,
  },
  done: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    opacity: 0.5,
  },
  delete: {
    color: '#c70303ff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})