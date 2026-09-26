import Footer from "@/components/footer";
import MainSection from "@/components/mainSection";
import UserSection from "@/components/userSection";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <UserSection />
        <MainSection />
        {/* <View style={{ flex: 1 }} /> */}
      </ScrollView>
      <Footer />
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
