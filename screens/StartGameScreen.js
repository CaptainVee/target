import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import colors from "../utils/colors";

const StartGameScreen = ({onSubmitNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 98) {
      Alert.alert("Invalid number!", "Please pass a number between 0 and 99", [
        {
          text: "okay",
          style: "destructive",
          onPress: () => setEnteredNumber(""),
        },
      ]);
      return;
    }
    onSubmitNumber(chosenNumber)
    console.log("Valid")
  }
  return (
    <View>
      <Title>Guess My Number</Title>
    <Card style={styles.inputContainer}>
      <InstructionText>Enter a Number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={() => setEnteredNumber("")}>
          Reset
        </PrimaryButton>
        <PrimaryButton pressHandler={confirmInputHandler}>
          Confirm
        </PrimaryButton>
      </View>
    </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderColor: colors.secondary500,
    borderBottomWidth: 2,
    color: colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
