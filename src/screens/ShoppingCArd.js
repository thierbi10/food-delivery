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
import MainContainer from "../compenants/MainContainer";
const ShoppingCArd = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        {/* <View
          style={{
            paddingVertical: 20,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
        <View>
          <Text>BACK</Text>
        </View>
        <View>
          <Text>12045</Text>
        </View>
      </View> */}
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
        <ImageBackground
          source={require("../../assets/images/bg.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={{ marginHorizontal: 10, fontSize: 25, fontWeight: 900 }}>
            Shopping card
          </Text>
          <View style={{ marginTop: "50%" }}>
            <Text
              style={{ textAlign: "center", fontSize: 24, fontWeight: 700 }}
            >
              Nothing here yet
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: 300,
                paddingHorizontal: 50,
              }}
            >
              Try searching the item with a different keyword.
            </Text>
          </View>
          <View style={{marginHorizontal:10 ,marginTop:70}}>
         <TouchableOpacity
      // onPress={handleSignUp}
      style={{
        padding: 5,
        backgroundColor: COLORS.yellow,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: "center", // Utilisez "alignItems" pour centrer horizontalement
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
      Start odering
    </Text>
    </TouchableOpacity>
    </View>
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
});
export default ShoppingCArd;
