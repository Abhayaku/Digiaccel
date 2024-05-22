import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { heightsize, widthsize } from "../../constant/Dimensions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* top */}
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <Image source={require("../../../assets/img.png")} style={styles.image} />

      {/* bottom */}
      <View style={styles.bottom}>
        <Text style={styles.title}>Sign-in</Text>

        {/* email */}
        <TextInput
          style={styles.input}
          placeholder="Enter email or user name"
          placeholderTextColor={"#c9c7c7"}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* password */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor={"#c9c7c7"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Text>{isPasswordVisible ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        {/* forgot password */}
        <TouchableOpacity style={{ marginTop: (heightsize * 2) / 100 }}>
          <Text style={styles.forgotPassword}>Forgot password ?</Text>
        </TouchableOpacity>

        {/* t&c and sign-in */}
        <View style={styles.tcView}>
          <View style={styles.termsContainer}>
            <Checkbox
              color={"#007BFF"}
              style={{
                width: (widthsize * 3) / 100,
                height: (widthsize * 3) / 100,
              }}
              disabled={false}
              value={isChecked}
              onValueChange={(newValue) => setIsChecked(newValue)}
            />
            <Text style={styles.termsText}>
              By signing up, you agree to our{" "}
              <Text style={styles.link}>terms of service</Text> and{" "}
              <Text style={styles.link}>privacy policy</Text>.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate("Drawer")}
          >
            <Text style={styles.signInButtonText}>Sign-in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: (widthsize * 18) / 100,
    height: (widthsize * 18) / 100,
    resizeMode: "contain",
    alignSelf: "left",
    marginLeft: (widthsize * 3) / 100,
  },
  image: {
    width: (widthsize * 55) / 100,
    height: (widthsize * 55) / 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: (heightsize * 2) / 100,
    marginBottom: (heightsize * 2) / 100,
  },
  bottom: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: (widthsize * 7) / 100,
    borderTopLeftRadius: (widthsize * 7) / 100,
    borderTopRightRadius: (widthsize * 7) / 100,
  },
  title: {
    fontSize: (widthsize * 7) / 100,
    fontWeight: "bold",
    marginBottom: (heightsize * 5) / 100,
  },
  input: {
    height: (heightsize * 5) / 100,
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: (heightsize * 4) / 100,
    height: (heightsize * 5) / 100,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  passwordInput: {
    flex: 1,
    height: (heightsize * 5) / 100,
    paddingHorizontal: 15,
  },
  eyeIcon: {
    padding: 12,
  },
  forgotPassword: {
    color: "#007BFF",
    textAlign: "right",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: (heightsize * 2) / 100,
  },
  termsText: {
    flex: 1,
    marginLeft: 8,
  },
  link: {
    color: "#007BFF",
  },
  signInButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  signInButtonText: {
    color: "#fff",
    fontSize: (widthsize * 4) / 100,
    fontWeight: "bold",
  },
  tcView: {
    marginTop: (heightsize * 5) / 100,
    justifyContent: "flex-end",
  },
});

export default Login;
