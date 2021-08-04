import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setEnteredGoal('')
    props.onAddGoal(enteredGoal)
  }

  const cancelAddGoalHandler = () => {
    setEnteredGoal('')
    props.onCancelAddGoal()
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    alignContent: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '80%',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    width: '25%',
  },
})

export default GoalInput
