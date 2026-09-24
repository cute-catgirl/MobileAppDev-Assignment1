import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function UserSection() {
  return (
    <View style={styles.userContainer}>
      <Image
        source={require("@/assets/images/pfp.jpg")}
        style={styles.profileImage}
      ></Image>
      <View style={[styles.vContainer, { justifyContent: "center", gap: 4 }]}>
        <Text style={[styles.text, styles.displayName]}>Display Name</Text>
        <Text style={[styles.text, styles.username]}>@username</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    width: "100%",
    maxHeight: 70,
    alignItems: "flex-start",
    gap: 16,
  },
  vContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  text: {
    color: "#ffffff",
    fontFamily: "Roboto",
  },
  displayName: {
    fontSize: 22,
    fontWeight: 600,
  },
  username: {
    fontSize: 12,
    color: "#bbbbbb",
  },
});
