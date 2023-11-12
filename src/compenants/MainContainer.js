
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Ionicons from 'react-native-vector-icons/Ionicons';


 //import screen
 import HomeScreen from '../screens/Home';
 import  FavoriScreen from '../screens/Favori';
 import CartScreen from '../screens/CartScreen'
 import UserScreen from '../screens/UserScreen'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }










// function UserScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// function FavoriScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
const homeName = "Home";
const fovoriName = "favori";
const cartName = "cart";
const UserName = "User";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;
  
        if (rn === UserName) {
          iconName = focused ? 'person' : 'person-outline';
        } else if (rn === fovoriName) {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (rn === homeName) {
          iconName = focused ? 'home' : 'home-outline';
        } else if (rn === cartName) {
          iconName = focused ? 'cart' : 'cart-outline';
        }
  
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#36E27ABA',
      inactiveTintColor: 'grey',
      labelStyle: { paddingBottom: 10, fontSize: 10 },
      style: { padding: 10, height: 70 },
    }}
  >
  
  

        <Tab.Screen name="Home" component={HomeScreen} />
      
        <Tab.Screen name="favori" component={ FavoriScreen} />
        <Tab.Screen name="cart" component={ CartScreen } />
        <Tab.Screen name="User" component={ UserScreen } /> 
      </Tab.Navigator>
    // </NavigationContainer>
  );
}















// import { NavigationContainer } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { StyleSheet, Text, View } from 'react-native';

// // Screens
// import HomeScreen from '../screens/Home';
// //Screen names
// const homeName = "Home";
// // const detailsName = "Details";
// // const settingsName = "Settings";

// const Tab = createBottomTabNavigator();

// function MainContainer() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName={homeName}
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             let rn = route.name;

//             if (rn === homeName) {
//               iconName = focused ? 'home' : 'home-outline';

//             } else if (rn === homeName) {
//               iconName = focused ? 'list' : 'list-outline';

//             } else if (rn === homeName) {
//               iconName = focused ? 'settings' : 'settings-outline';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'grey',
//           labelStyle: { paddingBottom: 10, fontSize: 10 },
//           style: { padding: 10, height: 70}
//         }}>

//         <Tab.Screen name={homeName} component={HomeScreen} />
//         <Tab.Screen name={homeName} component={HomeScreen} />
//         <Tab.Screen name={homeName} component={HomeScreen} />

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MainContainer;