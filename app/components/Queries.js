import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { heightsize, widthsize } from "../constant/Dimensions";

const Queries = ({ query }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Asked Queries</Text>
      {query.map((item, index) => (
        <View key={index}>
          {/* qus */}
          <TouchableOpacity
            style={styles.queryContainer(index == openIndex ? true : false)}
            onPress={() => {
              if (item.ans.length > 0) {
                if (index == openIndex) {
                  setOpenIndex(-1);
                } else {
                  setOpenIndex(index);
                }
              } else {
                setOpenIndex(-1);
              }
            }}
          >
            <Text style={styles.queryTitle}>{item.q}</Text>
            <View style={styles.queryRowContainer}>
              <Text style={styles.querySubTitle}>{item.time}</Text>
              <Text style={styles.querySubTitle}>{item.by}</Text>
            </View>
          </TouchableOpacity>

          {/* ans */}
          <>
            {index == openIndex ? (
              item.ans.map((e, i) => {
                return (
                  <View key={i} style={styles.qusAndContainerView}>
                    <Image
                      source={require("../../assets/arrow.png")}
                      style={styles.arrow}
                    />
                    <View key={i} style={styles.qusAndContainer}>
                      <Feather
                        name="user"
                        size={(widthsize * 4) / 100}
                        color="#3A86FF"
                      />
                      <Text style={styles.queryAns}>{e.text}</Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <></>
            )}
          </>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthsize,
    alignSelf: "center",
    backgroundColor: "#FFF",
    padding: (widthsize * 3) / 100,
    paddingLeft: (widthsize * 7) / 100,
    paddingRight: (widthsize * 7) / 100,
    marginTop: (heightsize * 3) / 100,
  },
  title: {
    fontSize: (widthsize * 5) / 100,
    color: "#424242",
    fontWeight: "bold",
    marginBottom: (heightsize * 5) / 100,
  },
  queryContainer: (isOpen) => ({
    marginBottom: isOpen ? 0 : (heightsize * 3) / 100,
    backgroundColor: "#f2f2f2",
    padding: (widthsize * 3) / 100,
    borderRadius: 8,
  }),
  queryRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: (heightsize * 2) / 100,
  },
  queryTitle: {
    fontSize: (widthsize * 3.5) / 100,
  },
  querySubTitle: {
    fontSize: (widthsize * 2.8) / 100,
    opacity: 0.6,
  },
  qusAndContainerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: (heightsize * 3) / 100,
  },
  qusAndContainer: {
    backgroundColor: "#F7F7F7",
    marginTop: (heightsize * 2) / 100,
    padding: (widthsize * 3) / 100,
    width: (widthsize * 70) / 100,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: (widthsize * 4) / 100,
    paddingRight: (widthsize * 7) / 100,
  },
  queryAns: {
    fontSize: (widthsize * 3.5) / 100,
    opacity: 0.6,
    marginLeft: (widthsize * 3) / 100,
  },
  arrow: {
    width: 30,
    height: 80,
    resizeMode: "stretch",
    alignSelf: "flex-start",
    top: 0,
  },
});

export default Queries;
