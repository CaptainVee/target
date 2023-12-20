import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import colors from "./utils/colors";
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading'

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsover] = useState(false)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  

  let screen = (
    <StartGameScreen
      onSubmitNumber={(inputedNumber) => setUserNumber(inputedNumber)}
    />
  );
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={(value) => {setGameIsover(value)}}/>;
  }

  if (gameIsOver && userNumber) {
    return <GameOver />
  }

  return (
    <LinearGradient colors={[colors.secondary500, colors.primary500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView  style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
