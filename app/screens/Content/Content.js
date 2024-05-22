import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  FontAwesome6,
  Feather,
  Fontisto,
  Foundation,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightsize, widthsize } from "../../constant/Dimensions";
import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "../../components/ViedoPlayer";
import Collapsible from "react-native-collapsible";
import VerticalProgressSteps from "../../components/VerticalProgressSteps";
import { TextInput } from "react-native-gesture-handler";
import Queries from "../../components/Queries";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Content = () => {
  const navigation = useNavigation();
  const [collapsed, setCollapsed] = useState(true);
  const items = [
    {
      title: "Digital Journeys Explainer",
      isActive: true,
      isLocked: false,
    },
    {
      title: "eCommerce Shopping Missions",
      isActive: true,
      isLocked: false,
    },
    {
      title: "Additional Reading",
      isActive: false,
      isLocked: true,
    },
    {
      title: "Shopping Missions Quiz",
      isActive: false,
      isLocked: true,
    },
    {
      title: "Swiggy Case Study",
      isActive: false,
      isLocked: true,
    },
  ];
  const tabs = [
    {
      title: "Queries",
      icon: () => (
        <Fontisto name="hipchat" size={(widthsize * 4) / 100} color="#424242" />
      ),
    },
    {
      title: "Notes",
      icon: () => (
        <Foundation
          name="clipboard-notes"
          size={(widthsize * 4) / 100}
          color="#424242"
        />
      ),
    },
  ];
  const [tabScreenIndex, setTabScreenIndex] = useState(0);
  const questions = [
    {
      q: "Wanted to initiate discussion on the book which was an optional reading in this module.",
      time: "7 Days ago",
      by: "Harshit Omar",
      ans: [
        {
          text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          time: "6 Days ago",
          by: "John Smith",
        },
      ],
    },
    {
      q: "What are your thoughts on the latest chapter we covered in class?",
      time: "13 Days ago",
      by: "Sara Johnson",
      ans: [
        {
          text: "The latest chapter was quite informative. I particularly enjoyed the discussion on...",
          time: "2 Days ago",
          by: "Chris Lee",
        },
      ],
    },
    {
      q: "Does anyone have any recommendations for additional reading materials related to this topic?",
      time: "15 Day ago",
      by: "Alex Chen",
      ans: [
        {
          text: "You may find 'Advanced Topics in Discovery' by Emily Jones useful. It delves deeper into some of the concepts we've discussed.",
          time: "12 Hours ago",
          by: "Emily Jones",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign
          name="arrowleft"
          size={(widthsize * 4) / 100}
          color="#434343"
        />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* title  */}
      <View style={styles.header}>
        {/* text */}
        <Text style={styles.headerText}>Digital Shopper Journey</Text>

        {/* button */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => setCollapsed(true)}
          >
            <FontAwesome6
              name="less-than"
              size={(widthsize * 2.2) / 100}
              color="#1E88E5"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.headerLinkText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <Text style={styles.headerLinkText}>Next</Text>
            <FontAwesome6
              name="greater-than"
              size={(widthsize * 2.2) / 100}
              color="#1E88E5"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* video view */}
        <View style={styles.videoView}>
          <VideoPlayer source={videoSource} />
        </View>

        {/* accordion */}
        <>
          <TouchableOpacity
            style={styles.contentList}
            onPress={() => setCollapsed(!collapsed)}
          >
            {/* left */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather
                name="list"
                size={(widthsize * 7) / 100}
                color="#288AE0"
              />
              <Text style={styles.contentListText}>Content List</Text>
            </View>

            {/* right */}
            <AntDesign
              name={!collapsed ? "up" : "down"}
              size={(widthsize * 4) / 100}
              color="#288AE0"
            />
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View
              style={{
                backgroundColor: "#D3E6F7",
                height: (heightsize * 50) / 100,
              }}
            >
              <VerticalProgressSteps steps={items} />
            </View>
          </Collapsible>
        </>

        {/* hide other view */}
        {collapsed ? (
          <View style={styles.restContainer}>
            {/* tab view */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {tabs.map((items, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.tabView(
                      index == tabScreenIndex ? true : false
                    )}
                    onPress={() => setTabScreenIndex(index)}
                  >
                    {items.icon()}
                    <Text style={styles.tabText}>{items.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* rest view */}
            <View>
              {tabScreenIndex == 1 ? (
                <View
                  style={{
                    marginTop: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Notes</Text>
                </View>
              ) : (
                <>
                  <View>
                    <TextInput
                      style={styles.input}
                      multiline={true}
                      underlineColorAndroid="transparent"
                      placeholder={`Ask your queries here..\nA mentor will respond to it in 24 Hrs.`}
                    />
                    <TouchableOpacity style={styles.buttonView}>
                      <Text style={styles.buttonText}>Submit Query</Text>
                    </TouchableOpacity>
                  </View>

                  {/* asked question */}
                  <Queries query={questions} />
                </>
              )}
            </View>
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
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
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: (heightsize * 2) / 100,
    paddingLeft: (widthsize * 4) / 100,
    paddingRight: (widthsize * 4) / 100,
  },
  headerText: {
    color: "#434343",
    fontSize: (widthsize * 4) / 100,
    fontWeight: "700",
  },
  headerLinkText: {
    color: "#1E88E5",
    fontSize: (widthsize * 3.2) / 100,
    fontWeight: "700",
  },
  videoView: {
    width: widthsize,
    height: (heightsize * 25) / 100,
  },
  contentList: {
    width: widthsize,
    height: (heightsize * 7) / 100,
    backgroundColor: "#D3E6F7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: (widthsize * 8) / 100,
    paddingRight: (widthsize * 8) / 100,
  },
  contentListText: {
    color: "#288AE0",
    fontSize: (widthsize * 4.3) / 100,
    marginLeft: (widthsize * 3) / 100,
    fontWeight: "700",
  },
  restContainer: {
    padding: (widthsize * 4) / 100,
    paddingLeft: (widthsize * 6) / 100,
    paddingRight: (widthsize * 6) / 100,
    paddingBottom: 0,
  },
  tabView: (isActive) => ({
    opacity: isActive ? 1 : 0.4,
    borderBottomWidth: 5,
    borderBottomColor: isActive ? "#3A86FF" : "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: (widthsize * 4) / 100,
    padding: (widthsize * 3) / 100,
    width: (widthsize * 30) / 100,
  }),
  tabText: {
    fontSize: (widthsize * 3.6) / 100,
    marginLeft: (widthsize * 1.3) / 100,
  },
  input: {
    marginTop: (heightsize * 2) / 100,
    height: (heightsize * 10) / 100,
    padding: (widthsize * 3) / 100,
    textAlignVertical: "top",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#DFDFDF",
  },
  buttonView: {
    padding: (widthsize * 2) / 100,
    width: (widthsize * 26) / 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A86FF",
    borderRadius: 8,
    alignSelf: "flex-end",
    marginTop: (heightsize * 2) / 100,
  },
  buttonText: {
    fontSize: (widthsize * 3) / 100,
    color: "#fff",
    fontWeight: "700",
  },
});

export default Content;
