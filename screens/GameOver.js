import { View, Image, StyleSheet } from "react-native"
import Title from "../components/ui/Title"
import Colors from "../utils/colors"

const GameOver = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
    </View>
  )
}

export default GameOver

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 10,
    width: 450,
    height: 400,
    // borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: 'hidden',
    margin: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
