import { StyleSheet, View } from "react-native"
import Colors from "../../utils/colors"

const Card = ({children}) => {
  return (
    <View style={styles.card}>
     {children}   
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      marginTop: 36,
      marginHorizontal: 24,
      borderRadius: 8,
      backgroundColor: Colors.primary500,
      // box shadow for android
      elevation: 5,
      // box shadow for iphone
      shadowColor: "black",
      shadowOffset: { height: 2, width: 0 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
    },
  });
  