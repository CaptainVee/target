import { Text, StyleSheet } from "react-native"
import colors from "../../utils/colors.js"

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        // fontWeight: "bold",
        color: colors.secondary500,
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: colors.primary500,
        padding: 10,
        marginTop: 50
    }
})