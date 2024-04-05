import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable} from 'react-native';
import batSinal from '../../assets/bat-img.png'
import {styles} from './homeStyles'
import {} from '../Form/form'


type RootStackParmLsit ={
  Home: undefined,
  Form: undefined
}

type NavigationProp = StackNavigationProp<RootStackParmLsit>;

export default function Home(){
  const navigation = useNavigation <NavigationProp>();

  function buttonForm(){
    navigation.navigate('Form')
  }

  return(
  <View style={styles.container}>
    <Text style={styles.batText}>Bat Sinal</Text>
    <Image style={styles.batImg} source={batSinal}/>
    <Pressable onPress={buttonForm} style ={styles.batActivate} >
      <Text style ={styles.batActivateText}>Activate Bat Sinal</Text>
    </Pressable>
    <StatusBar style="auto" />
  </View>
    )
}


