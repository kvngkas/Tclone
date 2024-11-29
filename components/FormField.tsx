import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather'; // Import Feather from @expo/vector-icons

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye-off" : "eye"} // Use Feather icons
              size={20}
              color="#FFFFFF"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: "#FFFFFF", // White text color
    fontWeight: "500", // Medium weight
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF", // Dark background
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000", // White text color
    fontWeight: "600", // Semi-bold
  },
  icon: {
    marginLeft: 10,
    color:"black",
  },
});

export default FormField;


