import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomDrawerHeader = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.iconButton}
        >
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Learning Hub</Text>
        <View style={styles.iconRightContainer}>
          <TouchableOpacity
            onPress={() => {
              null;
            }}
            style={styles.iconButton}
          >
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              null;
            }}
            style={styles.iconButton}
          >
            <Ionicons name="person-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#1C1B2E",
  },
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  iconButton: {
    padding: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconRightContainer: {
    flexDirection: "row",
  },
});

export default CustomDrawerHeader;
