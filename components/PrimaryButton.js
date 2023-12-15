import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, pressHandler }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#7ebac4" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    borderRadius: 28,
    backgroundColor: "#202c59",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    width: 150,
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  // For iosripple effect
  pressed: {
    opacity: 0.75,
  },
});
