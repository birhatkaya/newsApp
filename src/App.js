import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";
import news_banner_data from "./news_banner_data.json";

export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.news}>NEWS</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: 10 }}
          >
            {news_banner_data.map((bannerNews) => (
              <Image
                style={styles.bannerImage}
                source={{ uri: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#eceff1 ",
  },
  bannerImage: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").height / 2,
  },
  news:{
    fontWeight:'bold',
    fontSize:50,
    paddingLeft:10
  }
});
