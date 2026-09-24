import UserSection from "@/components/userSection";
<<<<<<< HEAD
import MainSection from "@/components/mainSection";
=======
import React from "react";
>>>>>>> 4a352e48a65638b251dfe3cb8a822fc3c163d7df
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <UserSection />
      <MainSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0f0f0f",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
