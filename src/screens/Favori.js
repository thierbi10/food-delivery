import React, {useState} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
// import { useState } from "react/cjs/react.production.min";



const dataCard = [
  require("../../assets/images/Rectangle.jpg"),
  require("../../assets/images/image.jpg"),

  require("../../assets/images/Rectangle.jpg"),
  require("../../assets/images/image.jpg"),

  require("../../assets/images/Rectangle.jpg"),
  require("../../assets/images/image.jpg"),

  require("../../assets/images/Rectangle.jpg"),
  require("../../assets/images/image.jpg"),

  require("../../assets/images/Rectangle.jpg"),
  require("../../assets/images/image.jpg"),

  require("../../assets/images/Rectangle.jpg"),
  require("../../assets/images/image.jpg"),
];

const CardItems = () => {
  return (
    <View style={styles.cardItems}>
      <View style={styles.header}>
        <View style={{ width: 130 }}>
          <View>
            <Text
              style={{ marginHorizontal: 10, fontSize: 20, fontWeight: 700 }}
            >
              {" "}
              Bound Salad{" "}
            </Text>
            <Text
              style={{ marginHorizontal: 10, fontSize: 8, fontWeight: 400 }}
            >
              Avocado, corn, pepperjack, crispy shallots, romaine
            </Text>
            <Text
              style={{ marginHorizontal: 10, fontSize: 8, fontWeight: 700 }}
            >
              245 CALS
            </Text>
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 23,
                fontWeight: 700,
                color: COLORS.vert,
              }}
            >
              $28
            </Text>
          </View>
        </View>

        <View style={{ width: 200 }}>
          <Image
            source={require("../../assets/images/imageplat.jpg")}
            style={{ width: 200, height: 150, padding: 10, marginTop: -30 }}
          />
        </View>
      </View>
    </View>
  );
};

// const [isSearchExpanded, setIsSearchExpanded] = useState(false);

// const toggleSearch = () => {
//   setIsSearchExpanded(!isSearchExpanded);
// };

const FavoriScreen = () => {
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
          <View>
            {/* <TouchableOpacity
              style={{
                height: 40,
                // width: isSearchExpanded ? "100%" : 40,
                width:40,
                backgroundColor: COLORS.white,
                elevation: 5,
                // borderRadius: isSearchExpanded ? 0 : 40,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={toggleSearch}
            >
              {isSearchExpanded ? (
                <TextInput
                  style={{ flex: 1, padding: 0 }}
                  placeholder="Rechercher..."
                  // Autres propriétés TextInput
                />
              ) : (
                <Icon name="search" size={20} color={COLORS.dark} />
              )}
            </TouchableOpacity> */}
          </View>
        </View>
        <ImageBackground
          source={require("../../assets/images/bg.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={{ marginHorizontal: 10, fontSize: 25, fontWeight: 900 }}>
            Salads
          </Text>
          <FlatList
            data={dataCard}
            renderItem={({ item }) => <CardItems house={item} />}
          />
          {/* <MainContainer/> */}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
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
    width: "94%",
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    // height: 100,
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
export default FavoriScreen;
