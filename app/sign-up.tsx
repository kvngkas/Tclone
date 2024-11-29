import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {

    if (!form.username || !form.email || !form.password){
        Alert.alert('Error','please fill in all the Fields')
    }
    setIsSubmitting(true);

    try {
        const result = await createUser(form.email, form.password,form.username)
        // set it to global state...
         router.replace('/TaskBoard')

    }catch(error){
        Alert.alert('Error', error.messsage)
    }finally{
        setIsSubmitting(false)
    }
    
    
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={[styles.container, { minHeight: Dimensions.get("window").height - 100 }]}>
          {/* <Image
            source={Image.logo}
            resizeMode="contain"
            style={styles.logo}
          /> */}

          <Text style={styles.headerText}>Sign up to Trello</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
            otherStyles={styles.formField} placeholder={undefined}          />


          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            otherStyles={styles.formField} placeholder={undefined}          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles={styles.formField} placeholder={undefined}          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={styles.button}
            isLoading={isSubmitting} textStyles={undefined}          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Have an account already ?
            </Text>
            <Link href="/sign-in" style={styles.signupLink}>
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1465de", // Replace with the equivalent of 'bg-primary'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  logo: {
    width: 115,
    height: 34,
    alignSelf: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 40,
    alignSelf: "center",
  },
  formField: {
    marginTop: 28,
  },
  button: {
    marginTop: 28,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#FFFFFF", // Replace with the equivalent of 'text-gray-100'
  },
  signupLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF", // Replace with the equivalent of 'text-secondary'
    marginLeft: 8,
  },
});

export default SignUp;