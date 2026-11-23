import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import Shoes from '../Shoes';

export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>
        VOCE TAMBEM PODE GOSTAR
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingBottom: 110,
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/1.png")}
              cost="110,90"
            >
              Nike Air max Dia
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/5.png")}
              cost="360,90"
            >
              Nike Joyride Run Flyknit
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assets/3.png")}
              cost="890"
            >
              Nike Squirdward Tentacles
            </Shoes>
          </View>

          <View style={{ width: 20 }} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
});