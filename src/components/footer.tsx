import { Feather } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={[styles.footer]}>
      <View style={[styles.container]}>
        <Feather name="home" size={24} color="#ffffff"></Feather>
        <Text style={[styles.text]}>Home</Text>
      </View>
      <View style={[styles.container]}>
        <Feather name="zap" size={24} color="#ffffff"></Feather>
        <Text style={[styles.text]}>Shorts</Text>
      </View>
      <Pressable style={[styles.createButton]}>
        <Feather name="plus" size={24} color="#ffffff"></Feather>
      </Pressable>
      {/* Make this the alert I guess */}
      <View style={[styles.container]}>
        <Feather name="youtube" size={24} color="#ffffff"></Feather>
        <Text style={[styles.text]}>Subscriptions</Text>
      </View>
      <View style={[styles.container]}>
        <View style={[styles.profileFrame]}>
          <Image
            source={require("@/assets/images/pfp.jpg")}
            style={[styles.youIcon]}
          ></Image>
          <Text style={[styles.text]}>You</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backdropFilter: "blur(10px)",
  },
  createButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#272727",
    height: 40,
    width: 40,
    paddingHorizontal: 8,
  },
  profileFrame: {
    alignItems: "center",
    justifyContent: "center",
    height: 24,
    width: 24,
    borderRadius: 15,
    backgroundColor: "#ffffff",
  },
  youIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 9,
    fontFamily: "Roboto",
    color: "#ffffff",
  },
  container: {
    alignItems: "center",
    width: 56,
  },
});
