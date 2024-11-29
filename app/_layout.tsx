import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'


export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
    <Stack>
    <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
         
    </Stack>
    {/* <Slot/> */}
    <StatusBar style='light'/>
    </ThemeProvider>
  )
}






// import { Link, Slot, Stack } from 'expo-router';
// import { Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { ThemeProvider, DarkTheme } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// export default function RootLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <ThemeProvider value={DarkTheme}>
//         <Stack
//           screenOptions={{
//             headerRight: () => (
//               <View style={{ gap: 10, flexDirection: 'row' }}>
//                 <Link href="/login">
//                   <FontAwesome name="sign-in" size={24} color="lightgray" />
//                 </Link>
//                 <Link href="/profile">
//                   <FontAwesome
//                     name="user-circle-o"
//                     size={24}
//                     color="lightgray"
//                   />
//                 </Link>
//               </View>
//             ),
//           }}
//         >
//           <Slot />
//         </Stack>
//       </ThemeProvider>
//       <StatusBar style="light" />
//     </GestureHandlerRootView>
//   );
// }
