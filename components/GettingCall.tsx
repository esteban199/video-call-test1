import React from 'react';
import { View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Button from './Button';

interface Props {
  hangup: () => void;
  join: () => void;
}

export default function GettingCall(props: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../img/elon.jpeg')} />
      <View style={styles.bgContainer}>
        <Button
          iconName="phone"
          backgroundColor="green"
          onPress={props.join}
          style={{ marginRight: 30 }}
        />
        <Button
          iconName="phone"
          backgroundColor="red"
          onPress={props.hangup}
          // style={{ marginRight: 30 }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  bgContainer: {
     flexDirection: 'row',
     bottom: 30
  }
})