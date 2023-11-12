import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const ItemNotFound = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        
        <View style={styles.header}>
          <View style={styles.headerBtn}>
            <View styles={{ flexDirection: "row" }}>
              <Icon name="arrow-back-ios" size={20} color={COLORS.dark} />
              {/* <Text> back</Text> */}
            </View>
          </View>
          <View style={styles.headerBtnSearch}>
            <Icon name="search" size={20} color={COLORS.dark} />
          </View>
        </View>
        <ImageBackground
          source={require("../../assets/images/bg.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
         
          <View style={{ marginTop: "50%" }}>
            <Text
              style={{ textAlign: "center", fontSize: 24, fontWeight: 700 }}
            >
              Item not found
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: 300,
                paddingHorizontal: 50,
              }}
            >
             Try searching the item with
a different keyword.
            </Text>
          </View>
          
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
  headerBtnSearch: {
    height: 40,
    width: 250,
    // borderRadius:40,
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 40,
    padding:5,
    justifyContent: "center",
    alignItems: "flex-end",
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
});
export default ItemNotFound;
