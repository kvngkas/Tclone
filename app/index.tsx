// import { Stack } from 'expo-router';
// import TaskBoard from '../components/TaskBoard';

// export default function HomeScreen() {
//   return (
//     <>
//       <Stack.Screen options={{ title: 'Project Board' }} />
//       <TaskBoard />
//     </>
//   );
// }









import { Colors } from '@/constants/Colors';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';

export default function Index() {
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  const openLink = async () => {
    WebBrowser.openBrowserAsync('https://galaxies.dev');
  };

  return (
    
    <View style={[styles.container, { paddingTop: top + 30 }]}>
      <Image source={require('@/assets/images/login/trello.png')} style={styles.image} />
      <Text style={styles.introText}>Move teamwork forward - even on the go</Text>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: 'white' }]}
          onPress={() => router.push('/sign-in')}>
          <Text style={[styles.btnText, { color: Colors.primary }]}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => router.push('/sign-up')}>
          <Text style={[styles.btnText, { color: '#fff' }]}>Sign-up</Text>
        </TouchableOpacity>

        <Text style={styles.description}>
          By signing up, you agree to the{' '}
          <Text style={styles.link} onPress={openLink}>
            User Notice
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={openLink}>
            Privacy Policy
          </Text>
          
        </Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.primary, alignItems: 'center' },
  image: { height: 450, paddingHorizontal: 40, resizeMode: 'contain' },
  introText: { fontWeight: '600', color: 'white', fontSize: 17, padding: 30 },
  bottomContainer: { width: '100%', paddingHorizontal: 40, gap: 10 },
  btn: { padding: 10, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#fff' },
  btnText: { fontSize: 18 },
  description: { fontSize: 12, textAlign: 'center', color: '#fff' },
  link: { color: '#fff', fontSize: 12, textDecorationLine: 'underline' },
});