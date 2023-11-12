
import React from 'react';
import {ImageBackground, StyleSheet, Text,Image, View, TouchableOpacity} from 'react-native';
import COLORS from '../const/Colors';
import { useNavigation } from '@react-navigation/native';

const image = require('../../assets/images/_efCc8CPwhM.jpg');




export default function welcom() {
const navigation = useNavigation();

    return (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{ backgroundColor: 'rgba(97, 224, 148, 0.5)' , height:'100%', width:'100%' , flex: 1, justifyContent: 'center',}}>
          
          <TouchableOpacity
            onPress={()=>{navigation.navigate('login')}}
          >

           <View   style={{flexDirection:'row',marginHorizontal:70  ,justifyContent:'center', alignItems:"center" }} > 
           <View style={{height:100,  width:90 ,}} >

            <Image  style={styles.image1} resizeMode="cover"  source={require('../../assets/images/green-salad.jpg')} />
           </View>
            <Text style={styles.text}>HappyFood</Text>
            </View> 
          </TouchableOpacity>
                 
        </View>
    </ImageBackground>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },image1:{
    width:80,
    height:90
  },
  text: {
    color: 'white',
    fontSize: 22,
    // lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
});
