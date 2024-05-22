import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { Video } from "expo-av";
import { heightsize } from "../constant/Dimensions";

const VideoPlayer = (props) => {
  const video = useRef(null);

  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: props.source,
      }}
      useNativeControls
      resizeMode="contain"
      isLooping
      shouldPlay
    />
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: (heightsize * 25) / 100,
  },
});

export default VideoPlayer;
