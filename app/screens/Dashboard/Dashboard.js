import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ProgressBarAndroid,
  FlatList,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightsize, widthsize } from "../../constant/Dimensions";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* back button */}
      <TouchableOpacity style={styles.backButton}>
        <AntDesign
          name="arrowleft"
          size={(widthsize * 4) / 100}
          color="#434343"
        />
        <Text style={styles.backButtonText}>Back to Dashboard</Text>
      </TouchableOpacity>

      {/* in-progress  */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.statusButtonActive} disabled>
          <Text style={styles.statusButtonText}>In Progress</Text>
        </TouchableOpacity>
      </View>

      {/* top view */}
      <View style={{ paddingLeft: (widthsize * 4) / 100 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({}) => {
            return (
              <TouchableOpacity
                style={styles.topModule}
                onPress={() => navigation.navigate("Content")}
              >
                {/* image */}
                <View style={styles.topModuleImageView}>
                  <Image
                    source={{
                      uri: "https://cdn.elearningindustry.com/wp-content/uploads/2015/07/top-online-resources-for-efficient-elearning-process.jpg",
                    }}
                    style={styles.topModuleImage}
                  />
                </View>

                {/* progress */}
                <View style={styles.topModuleProgressView}>
                  <Text style={styles.topModuleTitle}>
                    Digital Shopper Journey
                  </Text>
                  <Text style={styles.topModuleSubtitle}>
                    4 Learning hours left
                  </Text>
                  <View style={styles.topModuleProgressBarContainer}>
                    <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={0.9}
                      color="#007BFF"
                      style={styles.topModuleProgressBar}
                    />
                    <Text style={styles.topModuleProgressText}>90%</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(index) => index.toString()}
        />
      </View>

      {/* middle view */}
      <View style={{ paddingLeft: (widthsize * 4) / 100 }}>
        <Text style={styles.sectionTitle}>Recently Completed</Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1, 2]}
            renderItem={({}) => {
              return (
                <TouchableOpacity
                  style={styles.middleModuleContainer}
                  onPress={() => navigation.navigate("Content")}
                >
                  <Image
                    source={{
                      uri: "https://cdn.elearningindustry.com/wp-content/uploads/2015/07/top-online-resources-for-efficient-elearning-process.jpg",
                    }}
                    style={styles.middleModuleImage}
                  />
                  <View style={styles.middleModuleInfo}>
                    <Text style={styles.middleModuleTitle}>
                      Digital Shopper Journey
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: (heightsize * 1) / 100,
                      }}
                    >
                      <Text style={styles.middleModuleSubtitleCompleted}>
                        4 hours Completed
                      </Text>
                      <AntDesign
                        name="checkcircle"
                        size={(widthsize * 2.6) / 100}
                        style={{ marginLeft: (widthsize * 2) / 100 }}
                        color="#8DCA8F"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(index) => index.toString()}
          />
        </View>
      </View>

      {/* bottom view */}
      <View style={styles.bottomView}>
        <Text style={styles.sectionTitle}>Upcoming Modules</Text>
        <ScrollView>
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.bottomModuleContainer,
                  {
                    opacity: index == 0 ? 1 : 0.5,
                  },
                ]}
                disabled={index == 0 ? false : true}
                key={index}
                onPress={() => navigation.navigate("Content")}
              >
                <Image
                  source={{
                    uri: "https://cdn.elearningindustry.com/wp-content/uploads/2015/07/top-online-resources-for-efficient-elearning-process.jpg",
                  }}
                  style={styles.bottomModuleImage}
                />
                <View style={styles.bottomModuleInfo}>
                  <Text style={styles.bottomModuleTitle}>
                    Digital Shopper Journey
                  </Text>

                  {index == 0 ? (
                    <>
                      <Text style={styles.bottomModuleSubtitle}>
                        4 Learning hours left
                      </Text>
                      <View style={styles.bottomProgressBarContainer}>
                        <ProgressBarAndroid
                          styleAttr="Horizontal"
                          indeterminate={false}
                          progress={0.1}
                          color="#007BFF"
                          style={styles.bottomProgressBar}
                        />
                      </View>
                    </>
                  ) : (
                    <View style={styles.lockedView}>
                      <Entypo
                        name="lock"
                        size={(widthsize * 3.5) / 100}
                        color="#434343"
                      />
                      <Text style={styles.lockedText}>Locked</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  backButton: {
    marginTop: (-widthsize * 3) / 100,
    marginBottom: (heightsize * 2) / 100,
    flexDirection: "row",
    paddingLeft: (widthsize * 4) / 100,
  },
  backButtonText: {
    color: "#434343",
    marginLeft: (widthsize * 2) / 100,
    fontSize: (widthsize * 3.5) / 100,
  },
  header: {
    flexDirection: "row",
    marginBottom: (heightsize * 2) / 100,
    paddingLeft: (widthsize * 4) / 100,
  },
  statusButtonActive: {
    backgroundColor: "#E0EFFF",
    padding: (widthsize * 2) / 100,
    borderRadius: 8,
  },
  statusButtonText: {
    color: "#007BFF",
    fontSize: (widthsize * 3) / 100,
  },
  topModule: {
    flexDirection: "row",
    width: (widthsize * 75) / 100,
    backgroundColor: "#FFF",
    marginRight: (widthsize * 4) / 100,
    borderRadius: 8,
    overflow: "hidden",
  },
  topModuleImageView: {
    width: "20%",
    height: (widthsize * 25) / 100,
    borderRadius: 8,
    overflow: "hidden",
    margin: "3%",
    marginRight: "0%",
    backgroundColor: "red",
  },
  topModuleImage: {
    flex: 1,
  },
  topModuleProgressView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "70%",
    margin: "3%",
    flexWrap: "wrap",
  },
  topModuleTitle: {
    fontSize: (widthsize * 5.3) / 100,
    fontWeight: "bold",
  },
  topModuleSubtitle: {
    marginTop: (heightsize * 1.5) / 100,
    color: "#007BFF",
    fontSize: (widthsize * 3.3) / 100,
  },
  topModuleProgressBarContainer: {
    marginTop: (heightsize * 1.5) / 100,
    flexDirection: "column",
  },
  topModuleProgressBar: {
    width: (widthsize * 40) / 100,
  },
  topModuleProgressText: {
    fontSize: (widthsize * 2.8) / 100,
    color: "#333",
  },
  sectionTitle: {
    fontSize: (widthsize * 5) / 100,
    fontWeight: "bold",
    marginVertical: 16,
  },
  middleModuleContainer: {
    flexDirection: "row",
    width: (widthsize * 75) / 100,
    padding: (widthsize * 3) / 100,
    backgroundColor: "#EDF2ED",
    marginRight: (widthsize * 4) / 100,
    borderRadius: 8,
    overflow: "hidden",
  },
  middleModuleImage: {
    width: (widthsize * 13) / 100,
    height: (widthsize * 13) / 100,
    borderRadius: 8,
    marginRight: 16,
  },
  middleModuleInfo: {
    flex: 1,
  },
  middleModuleTitle: {
    fontSize: (widthsize * 4) / 100,
    fontWeight: "bold",
  },
  middleModuleSubtitleCompleted: {
    color: "#4CAF50",
    fontSize: (widthsize * 3) / 100,
  },
  bottomView: {
    flex: 1,
    backgroundColor: "#fafafa",
    marginTop: (heightsize * 3) / 100,
    padding: (widthsize * 4) / 100,
    paddingBottom: (widthsize * 1) / 100,
  },
  bottomModuleContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: (widthsize * 3) / 100,
    marginBottom: (heightsize * 1.5) / 100,
    elevation: 2,
  },
  bottomModuleImage: {
    width: (widthsize * 15) / 100,
    height: (widthsize * 15) / 100,
    borderRadius: 8,
    marginRight: (widthsize * 3) / 100,
  },
  bottomModuleInfo: {
    flex: 1,
  },
  bottomModuleTitle: {
    fontSize: (widthsize * 4) / 100,
    fontWeight: "bold",
  },
  bottomModuleSubtitle: {
    marginTop: (heightsize * 0.5) / 100,
    color: "#007BFF",
    fontSize: (widthsize * 3) / 100,
    marginBottom: (heightsize * 1) / 100,
  },
  bottomProgressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomProgressBar: {
    flex: 1,
  },
  lockedView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C2C2C2",
    width: (widthsize * 18) / 100,
    justifyContent: "center",
    marginTop: (heightsize * 1) / 100,
    padding: (widthsize * 1) / 100,
    borderRadius: 8,
  },
  lockedText: {
    color: "#434343",
    fontSize: (widthsize * 2.2) / 100,
    marginLeft: (widthsize * 1.5) / 100,
  },
});

export default Dashboard;
