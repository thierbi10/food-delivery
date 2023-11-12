import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import ShoppingCArd from './src/screens/ShoppingCArd'
import ItemNotFound from './src/screens/ItemNotFound';
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainContainer from './src/compenants/MainContainer';
import COLORS from './src/const/Colors';
import Welcome from './src/screens/Welcome';

const Stack = createStackNavigator();


export default function App() {
  return (
    
    
    
    <NavigationContainer>
    <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcom" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={MainContainer} />
      {/* <St ack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  

    
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
