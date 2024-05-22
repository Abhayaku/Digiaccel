import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { heightsize, widthsize } from "../constant/Dimensions";

const VerticalProgressSteps = ({ steps }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <View style={styles.stepIndicator}>
            {step.isLocked ? (
              <FontAwesome name="lock" size={20} color="#999" />
            ) : step.isActive ? (
              <FontAwesome name="check-circle" size={20} color="green" />
            ) : (
              <FontAwesome name="circle-thin" size={20} color="#4a90e2" />
            )}
            {index !== steps.length - 1 && (
              <View
                style={styles.verticalLine(
                  steps[index + 1].isActive ? true : false
                )}
              />
            )}
          </View>
          <Text style={[styles.stepText, step.isLocked && styles.lockedText]}>
            {step.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3E6F7",
    paddingTop: (widthsize * 3) / 100,
    paddingLeft: (widthsize * 8) / 100,
    paddingRight: (widthsize * 8) / 1100,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: (heightsize * 3) / 100,
  },
  stepIndicator: {
    alignItems: "center",
    marginRight: (widthsize * 5) / 100,
    position: "relative",
  },
  verticalLine: (isActive) => ({
    width: 2,
    height: 30,
    backgroundColor: isActive ? "green" : "#A9ABAC",
    position: "absolute",
    top: (heightsize * 2.3) / 100,
  }),
  stepText: {
    fontSize: (widthsize * 4.4) / 100,
    color: "#424242",
  },
  lockedText: {
    opacity: 0.4,
  },
});

export default VerticalProgressSteps;
