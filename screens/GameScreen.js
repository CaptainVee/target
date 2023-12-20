import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import {Ionicons} from '@expo/vector-icons'

function generateRandomNumber(min, max, exclude) {
  const randNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randNumber;
  }
}

let minNumber = 1;
let maxNumber = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber){
      onGameOver(true)
    }
  }, [currentGuess, userNumber, onGameOver])

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert(
        'Sorry', // Alert title
        'No lie abeg 🌚', // Alert message
        [{ text: 'Close!', style: 'cancel' }] // Buttons configuration
      );
      return;
    }
    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    console.log(minNumber, maxNumber);
    const newRandNumber = generateRandomNumber(
      minNumber,
      maxNumber,
      currentGuess
    );
    setCurrentGuess(newRandNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText customStyle={styles.InstructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton pressHandler={() => nextGuessHandler("higher")}>
            <Ionicons name="md-add" size={24} color="white"/>
          </PrimaryButton>
          <PrimaryButton pressHandler={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} color="white"/>
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  InstructionText: {
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
