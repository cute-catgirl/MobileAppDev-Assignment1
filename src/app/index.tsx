import UserSection from "@/components/userSection";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <UserSection />
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
