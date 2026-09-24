import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
      <Pressable style={styles.accountsButton}>
        <Text style={styles.text}>Accounts</Text>
        <Feather name="chevron-down" size={14} color="#aaaaaa" />
      </Pressable>
      <View style={{ flex: 1 }}></View>
      <View style={styles.headerIcons}>
        <Feather name="bell" size={20} color="#ffffff" />
        <Feather name="search" size={20} color="#ffffff" />
        <Feather name="settings" size={20} color="#ffffff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f0f0f",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#0f0f0f",
    padding: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 12,
  },
  accountsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: "#3f3f3f",
    backgroundColor: "#090909",
    borderRadius: 50,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 10,
    paddingLeft: 12,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
});
