import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        id: Math.random().toString(),
        value: goalTitle,
      },
    ])
    setIsAddMode(false)
  }

  const onDeleteListItem = (idToDelete) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== idToDelete)
    })
  }

  const onCancelAddGoal = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.container}>
      <Button
        title="Add new goal"
        onPress={() => {
          setIsAddMode(true)
        }}
      />
      <GoalInput
        style={styles.goalInput}
        isVisible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelAddGoal={onCancelAddGoal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            value={itemData.item.value}
            id={itemData.item.id}
            onDelete={onDeleteListItem}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  goalInput: {},
})
