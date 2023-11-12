import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";


const dataCard = [
  require("../../assets/images/burger.jpg"),
  require("../../assets/images/image.jpg"),
  require("../../assets/images/image.jpg"),
];
const CardItems = () => {
  return (
    <View style={styles.cardItems}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ height: 130, width: 130 }}
          source={require("../../assets/images/burger.jpg")}
        />
      </View>
      {/* <Image source={require('../../assets/images/Rectangle.jpg')}/>abdoul */}
    </View>
  );
};
// export default function HomeScreen({ navigation }) {
export default function CartScreen() {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30, backgroundColor: COLORS.white }}>
        <View style={styles.header}>
          <View style={styles.headerBtn}>
            <View styles={{ flexDirection: "row" }}>
              <Icon name="arrow-back-ios" size={20} color={COLORS.dark} />
              {/* <Text> back</Text> */}
            </View>
          </View>
          <View style={styles.headerBtn}>
            <Icon name="search" size={20} color={COLORS.dark} />
          </View>
        </View>

        <View style={{ height: 230 }}>
          <FlatList
            data={dataCard}
            renderItem={({ item }) => <CardItems house={item} />}
            horizontal={true}
          />
        </View>
        <View style={{ width: 150, height: 70, marginTop: -100 }}>
          <Image
            style={{ width: "70%", height: "100%" }}
            source={require("../../assets/images/Rectanglerv.jpg")}
          />
        </View>
        <ImageBackground
          source={require("../../assets/images/bg.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View>
            <Text
              style={{ marginHorizontal: 10, fontSize: 25, fontWeight: 900 }}
            >
              Jack burger
            </Text>
            <Text
              style={{ marginHorizontal: 10, fontSize: 12, fontWeight: 300 }}
            >
              Total price
            </Text>
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 15,
                color: COLORS.vert,
                fontWeight: 500,
              }}
            >
              10$
            </Text>
          </View>
          <View style={{ marginHorizontal: 10, marginTop: -18 }}>
            <TouchableOpacity
              // onPress={handleSignUp}
              style={{
                // flex:1,
                padding: 5,
                backgroundColor: COLORS.yellow,
                // marginRight: 40,
                width: "70%",
                borderRadius: 10,
                marginLeft: 90,
                justifyContent: "flex-end", // Utilisez "alignItems" pour centrer horizontalement
                shadowColor: COLORS.yellow,
                // elevation={5},
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  textAlign: "center",
                  fontSize: 21,
                }}
              >
                Buy now
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginHorizontal: 10,
              marginVertical: 20,
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            Our regular two-patty burger, layered with four pieces of crispy,
            sweet applewood-smoked bacon.
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ marginHorizontal: 0 }}>
              <Text
                style={{ marginHorizontal: 5, fontSize: 25, fontWeight: 900 }}
              >
                910
              </Text>
              <Text
                style={{ marginHorizontal: 5, fontSize: 10, fontWeight: 600 }}
              >
                CALORIESC
              </Text>
            </View>
            <View style={{ marginHorizontal: 0 }}>
              <Text
                style={{ marginHorizontal: 5, fontSize: 25, fontWeight: 900 }}
              >
                41
              </Text>
              <Text
                style={{ marginHorizontal: 5, fontSize: 10, fontWeight: 600 }}
              >
                CARBS (G)
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{ marginHorizontal: 5, fontSize: 25, fontWeight: 900 }}
              >
                45
              </Text>
              <Text
                style={{ marginHorizontal: 5, fontSize: 10, fontWeight: 600 }}
              >
                TOTAL FAT (G)
              </Text>
            </View>
            <View style={{ marginHorizontal: 5 }}>
              <Text
                style={{ marginHorizontal: 5, fontSize: 25, fontWeight: 900 }}
              >
                698
              </Text>
              <Text
                style={{ marginHorizontal: 5, fontSize: 10, fontWeight: 600 }}
              >
                SODIUM (MG)
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  map: {
    borderRadius: 10,
    height: 120,
    marginTop: -100,
  },
  map: {
    width: "100%",
    height: 250,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
  image: {
    width: "100%",
    height: "100%",
    // marginTop:100
  },
  headerBtn: {
    height: 40,
    width: 40,
    // borderRadius:40,
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  cardItems: {
    width: 300,
    marginTop: 10,
    // marginBottom:20,
    marginHorizontal: 10,
    height: 180,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: "rgba(0, 129, 50, 0.97)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.37,
    shadowRadius: 16,
    elevation: 16, // L'élévation est utilisée pour l'ombre sur Android
  },
});

