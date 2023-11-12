import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function UserScreen()  {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 ,backgroundColor:COLORS.white }}>
       
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
          <Text style={{ marginLeft:10, marginRight: 100, fontSize: 25, fontWeight: 900 }}>
          Special offer on your first order - 50% off 
          </Text>
       <ScrollView> 
        
   <View style={{flex:1,
    alignItems:'center',
    justifyContent:'center',}}>
           <View style={styles.cardItems}>
        <View style={styles.header}>
          <View style={{width:
            130}}>
          <Image
                   source={ require("../../assets/images/Rectangle.jpg")}
                   style={{width:100, height:80 , marginTop:20,  marginLeft:-30} }   
          />
         </View>  
         
          <View   style={{ width:200}} >
           <Image source={ require("../../assets/images/pidza.jpg")} style={{width:100, height:98, padding:10,marginTop:0 } }/>
         </View> 
         
         </View> 
         <View style={styles.header1}>
          <View >
            <Text  style={{fontSize:20,fontWeight:500}} >Favourite pizza</Text>
          </View>
          <View style={{}}>
            <Text    style={{color:COLORS.vert}}  > 10$</Text>
          </View>
        </View>
   </View>
           </View>
           <View style={styles.cardItems1}>
        <View style={styles.header}>
          <View style={{width:
            130}}>
          <Image
                   source={ require("../../assets/images/Rectangle.jpg")}
                   style={{width:150, height:100, padding:10 ,   marginLeft:-20} }   
          />
         </View>  
         
          <View   style={{ width:200}} >
           <Image source={ require("../../assets/images/burger.jpg")} style={{width:150, height:150, padding:10,marginTop:-30 } }/>
         </View> 
         </View> 
         <View style={styles.header1}>
          <View >
            <Text  style={{fontSize:20,fontWeight:500}} >Jack burger</Text>
          </View>
          <View style={{}}>
            <Text    style={{color:COLORS.vert}}  > 22$</Text>
          </View>
        </View>
   </View>
   <View style={{flex:1,
    alignItems:'center',
    justifyContent:'center',}}>
           <View style={styles.cardItems}>
        <View style={styles.header}>
          <View style={{width:
            130}}>
          <Image
                   source={ require("../../assets/images/Rectangle.jpg")}
                   style={{width:100, height:80 , marginTop:20,  marginLeft:-30} }   
          />
         </View>  
         
          <View   style={{ width:200}} >
           <Image source={ require("../../assets/images/pidza.jpg")} style={{width:100, height:98, padding:10,marginTop:0 } }/>
         </View> 
         
         </View> 
         <View style={styles.header1}>
          <View >
            <Text  style={{fontSize:20,fontWeight:500}} >Favourite pizza</Text>
          </View>
          <View style={{}}>
            <Text    style={{color:COLORS.vert}}  > 10$</Text>
          </View>
        </View>
   </View>
           </View>
       </ScrollView>

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
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  header1: {
    // paddingVertical: 10,
    // flexDirection: "row",
    // justifyContent: "space-between",
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
  },cardItems:{
    width: '78%',
    marginTop:10,
    marginBottom:20,
    marginHorizontal:10,
    // flexDirection:'row',
    

    // height: 100,
    backgroundColor:COLORS.white,
    borderRadius:10,
    shadowColor: 'rgba(0, 129, 50, 0.97)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.37,
    shadowRadius: 16,
    elevation: 16, // L'élévation est utilisée pour l'ombre sur Android
  
    
  },cardItems1:{
    width: '95%',
    marginTop:10,
    marginBottom:20,
    marginHorizontal:10,
    // flexDirection:'row',
    

    // height: 100,
    backgroundColor:COLORS.white,
    borderRadius:10,
    shadowColor: 'rgba(0, 129, 50, 0.97)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.37,
    shadowRadius: 16,
    elevation: 16, // L'élévation est utilisée pour l'ombre sur Android
  
    
  }
});
// export default UserScreen;
