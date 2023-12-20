import { Text, StyleSheet } from "react-native"
import Colors from "../../utils/colors"
const InstructionText = ({children, customStyle}) => {
  return (
    <Text style={[styles.instructionText, customStyle]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
      color: Colors.secondary500,
      fontSize: 20,
    },
  });
  