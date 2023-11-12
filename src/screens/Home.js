import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const categoryList = [
  require("../../assets/images/menu.jpg"),
  require("../../assets/images/noto_green-salad.jpg"),
  require("../../assets/images/fa-solid_hamburger.jpg"),
  require("../../assets/images/emojione-monotone_pizza.jpg"),
];

const dataCard=[
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
]
 
const CardItems = () => {
  return (
   <View style={styles.cardItems}>
        <View style={styles.header}>
          <View style={{width:
            130}}>
          <Image
                   source={ require("../../assets/images/Rectangle.jpg")}
                   style={{width:150, height:100, padding:10 ,   marginLeft:-20} }   
          />
         </View>  
         
          <View   style={{ width:200}} >
           <Image source={ require("../../assets/images/imageplat.jpg")} style={{width:200, height:150, padding:10,marginTop:-30 } }/>
         </View> 
         </View> 
         <View style={styles.header}>
          <View >
            <Text  style={{fontSize:20,fontWeight:500}} >Nicoise Salad </Text>
          </View>
          <View style={{}}>
            <Text    style={{color:COLORS.vert}}  > 10$</Text>
          </View>
        </View>
   </View>
  )}

 

const InteriorCard = ({ interior }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        margin: 10,
        height: 55,
        width: 55,
        borderRadius: 55,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={interior} style={styles.interiorImage} />
    </View>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    // <StatusBar>
    <SafeAreaView>
      {/* <ScrollView> */}
      <View style={{ marginTop: 25, marginHorizontal: 0 }}>
        <View style={{}}>
          <TextInput style={styles.headerBtnSearch}>
            <Icon name="search" size={20} color={COLORS.dark} />
            </TextInput>
        </View>
        <FlatList
        
          // style={{ height: 200 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoryList}
          renderItem={({ item }) => <InteriorCard interior={item} />}
        />

        <View style={styles.header}>
          <View >
            <Text  style={{fontSize:22,fontWeight:700}} >Special offer </Text>
          </View>
          <View style={{}}>
            <Icon name="navigate-next" size={35} color={COLORS.vert} />
          </View>
        </View>
        <FlatList
            data={dataCard}
            renderItem={({ item }) => <CardItems house={item} />}
          />
          
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerBtnSearch: {
    // height: 40,
    width: "95%",
    marginTop: 10,
    marginHorizontal:10,
    // borderRadius:40,
    backgroundColor: COLORS.lightVert,
    elevation: 5,
    // maginTop:130,
    borderRadius: 40,
    padding: 10,
    justifyContent: "center",   
    alignItems: "flex-end",
  },
  interiorImage: {
    width: 34,
    height: 30,
    
    borderRadius: 10,
  },
  header: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },cardItems:{
    width: '94%',
    marginTop:10,
    marginBottom:20,
    marginHorizontal:10,
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
