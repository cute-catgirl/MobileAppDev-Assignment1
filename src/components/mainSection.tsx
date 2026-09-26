import { Feather } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Video {
  title: string;
  channel: string;
  thumbnail: ImageSourcePropType | null;
}

const historyItems: Video[] = [
  {
    title: "Portal 3 - Official Trailer",
    channel: "Valve",
    thumbnail: require("@/assets/images/thumb_portal.jpeg"),
  },
  {
    title: "moistcritikal situation is insane",
    channel: "penguinz0",
    thumbnail: require("@/assets/images/thumb_moistcritikalcrazy.jpg"),
  },
  {
    title: "Your craziest lion stories",
    channel: "Matt Rose",
    thumbnail: require("@/assets/images/thumb_crazylionstories.jpg"),
  },
  {
    title: "Introducing the new iPhone Twist",
    channel: "Apple",
    thumbnail: require("@/assets/images/thumb_newiphone.jpg"),
  },
  {
    title: "Kongrats Motivate Me",
    channel: "Lessons in Meme Culture",
    thumbnail: require("@/assets/images/thumb_limcrats.jpg"),
  },
];

const libraryItems: Video[] = [
  {
    title: "Watch Later",
    channel: "Private",
    thumbnail: require("@/assets/images/how-to-play-snake-thumbnail.png"), // image made with MS paint
  },
  {
    title: "Liked Videos",
    channel: "Private",
    thumbnail: require("@/assets/images/graphic-design-thumbnail.png"), // image made with MS paint
  },
  {
    title: "expo app devleopment tutorials",
    channel: "Public • Playlist",
    thumbnail: require("@/assets/images/thumb_expo.jpg"),
  },
  {
    title: "silly and whimsical wonders",
    channel: "Private",
    thumbnail: require("@/assets/images/thumb_spheres.png"),
  },
];

export default function MainSection() {
  return (
    <View style={styles.container}>
      <View style={styles.actionRow}>
        <Pressable style={styles.filledButton}>
          <Text style={styles.filledButtonText} maxFontSizeMultiplier={1.1}>
            View channel
          </Text>
        </Pressable>
        <Pressable style={styles.outlinedButton}>
          <Text style={styles.text} maxFontSizeMultiplier={1.1}>
            Upgrade to Premium
          </Text>
        </Pressable>
      </View>

      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>History</Text>
        <Feather name="chevron-right" size={20} color="#ffffff" />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.historyScroll}
        contentContainerStyle={{ gap: 14 }}
      >
        {historyItems.map((item, i) => (
          <View key={i} style={styles.historyCard}>
            <Image
              source={item.thumbnail ?? undefined}
              style={styles.thumbnailPlaceholder}
            />
            <Text style={styles.cardTitle} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.cardSubtitle}>{item.channel}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Library</Text>
      <View style={styles.filterRow}>
        <Pressable style={styles.pill}>
          <Text style={styles.text}>Recents</Text>
          <Feather name="chevron-down" size={16} color="#ffffff" />
        </Pressable>
        <Pressable style={styles.pill}>
          <Text style={styles.text}>Playlists</Text>
        </Pressable>
        <Pressable style={styles.pill}>
          <Text style={styles.text}>Music</Text>
        </Pressable>
      </View>

      {libraryItems.map((item, i) => (
        <View key={i} style={styles.libraryRow}>
          <Image
            source={item.thumbnail ?? undefined}
            style={styles.libraryThumbnail}
          />
          {/* <View style={styles.libraryThumbnail} /> */}
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.channel}</Text>
          </View>
          <Feather name="more-vertical" size={18} color="#aaaaaa" />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 24,
  },

  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },

  filledButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: "center",
  },

  filledButtonText: {
    color: "#0f0f0f",
    fontFamily: "Roboto",
    fontWeight: "600",
  },

  outlinedButton: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#3f3f3f",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: "center",
  },

  text: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 13,
  },

  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
  },

  historyScroll: {
    marginBottom: 8,
  },

  historyCard: {
    width: 150,
  },

  thumbnailPlaceholder: {
    width: 150,
    height: 84,
    borderRadius: 8,
    backgroundColor: "#2a2a2a",
    marginBottom: 6,
  },

  cardTitle: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "600",
  },

  cardSubtitle: {
    color: "#bbbbbb",
    fontFamily: "Roboto",
    fontSize: 12,
    marginTop: 2,
  },

  filterRow: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 14,
  },

  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  libraryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 10,
  },

  libraryThumbnail: {
    width: 100,
    height: 60,
    borderRadius: 6,
    backgroundColor: "#2a2a2a",
  },
});
