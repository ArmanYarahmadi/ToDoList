import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddGoal, setIsAddGoal] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currnetGoals) => [
      ...currnetGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddGoal(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currnetGoals) => {
      return currnetGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancleGoalAdditionHandler = () => {
    setIsAddGoal(false);
  };

  return (
    <View style={styles.screen}>
      <Button onPress={() => setIsAddGoal(true)} title={"Add a new goal"} />
      <GoalInput
        visible={isAddGoal}
        onAddGoal={addGoalHandler}
        onCancle={cancleGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
