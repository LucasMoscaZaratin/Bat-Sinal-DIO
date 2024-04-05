import React from 'react';
import { View, Image } from 'react-native';
import batSinal from '../../assets/bat-img.png'



import { styles } from './headerStyles';

export function Header() {
  return (
    <View style={styles.container}>
        <Image style={styles.batImg} source={batSinal}/>
    </View>
  );
}
