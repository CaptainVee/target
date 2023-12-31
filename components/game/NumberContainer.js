import { View, Text, StyleSheet } from "react-native"
import Colors from "../../utils/colors"

const NumberContainer = ({children}) => {
  return (
    <View style= {styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
      borderWidth: 4,
      borderColor: Colors.primary500,
      padding: 24,
      margin: 24,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberText: {
      fontSize: 36,
      fontWeight: 'bold',
      color: Colors.primary500,

    },
  });