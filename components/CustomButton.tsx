import { ActivityIndicator, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles = {},
  textStyles = {},
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        containerStyles,
        isLoading && styles.disabledButton,
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.loadingIndicator}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF", // Replace with your "secondary" color
    borderRadius: 16, // Corresponds to "rounded-xl"
    minHeight: 62,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#1465de", // Replace with your "primary" color
    fontFamily: "Poppins-SemiBold", // Replace with your font
    fontSize: 18, // Corresponds to "text-lg"
  },
  loadingIndicator: {
    marginLeft: 8, // Corresponds to "ml-2"
  },
});

export default CustomButton;
