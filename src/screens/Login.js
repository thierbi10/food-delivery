import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import  COLORS from '../const/Colors'
import { useNavigation } from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation()
  return (
    // <ScrollView>
    <View style={styles.container}>
        
       <ImageBackground source={require('../../assets/images/bg.jpg')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Logo in</Text>
      <View style={styles.imageLog}>
  <Image style={{height:"80%", width:"40%"}}  source={require('../../assets/images/vert.jpg')}/>
      </View>
      <View style={{ marginHorizontal: 10}}>
        <Text style={styles.textInput}>Email adress</Text>
        <TextInput style={styles.styleInput}
          elevation={5}
        />
      </View>
      <View style={{ marginHorizontal: 10}}>
        <Text style={styles.textInput}>password</Text>
        <TextInput style={styles.styleInput}
          elevation={5}
        />
        <Text style={{ color:COLORS.vert  , fontSize:12}}>Forget password </Text>
      </View>
      <View style={{marginHorizontal:10 ,marginTop:30}}>
         <TouchableOpacity
      // onPress={handleSignUp}
      
      onPress={()=>{navigation.navigate('home')}}
    
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
      login
    </Text>
    </TouchableOpacity>
    <Text style={{textAlign:'center'}}>Skip now</Text>
    </View>
    </ImageBackground>
    </View>
    // </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
  
          marginVertical: 5,
  },image:{
    width: '100%',
    height: '90%',
    marginTop:100
  },text:{
    textAlign:'center',
    marginTop:-40,
    fontSize:25,

    
},imageLog:{
  marginLeft:130,
  height:150
}
  ,styleInput:{
    borderRadius: 10,
          // borderWidth: 1,
          // borderColor: '#000',
          marginVertical: 5,
          padding:5,
          backgroundColor: 'white',
  }
});