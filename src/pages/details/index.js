import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import Dot from "../../Component/Dot";
import SizeButtom from "../../Component/SizeButton";
import Button from "../../Component/Button";
import Footer from "../../Component/Footer";

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: "Nike Donwshifter 10"
  });

  return (
    <ScrollView style={styles.container}>

      <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>

        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>
            R$ 280,90
          </Text>
        </View>

        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Nike Donwshifter 10
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#dddddd" />
          <Dot color="#000000" />
        </View>

        <View
          style={{
            width: '100%',
            marginBottom: 15,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              paddingHorizontal: 5,
            }}
          >
            <SizeButtom bgcolor="#17181A" color="#FFFFFF">
              40
            </SizeButtom>

            <SizeButtom>
              42
            </SizeButtom>

            <SizeButtom>
              39
            </SizeButtom>

            <SizeButtom>
              38
            </SizeButtom>

          </ScrollView>
        </View>

        <View style={styles.textContainer}>

          <Text style={styles.textTitle}>
            Nike Donwshifter 10
          </Text>

          <Text style={styles.textContent}>
            O Tênis Nike Downshifter 10 é um modelo de entrada voltado para corrida leve, caminhadas e uso no dia a dia, reconhecido por oferecer bom custo-benefício, leveza e suporte na região do mediopé.
          </Text>

          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>

          <Text style={styles.textList}>
            - Material: Mash
          </Text>

        </View>

        <View style={styles.buttonContainer}>
          <Button />
        </View>

        <View style={styles.line}/>

        <Footer/>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },

  image: {
    width: '100%',
  },

  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
  },

  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
    paddingHorizontal: '2%',
    gap: 15,
  },

  textContainer: {
    paddingHorizontal: '2%',
    marginTop: 5,
  },

  textTitle: {
    fontSize: 22,
    marginBottom: 8,
  },

  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 10,
  },

  textList: {
    fontSize: 16,
    lineHeight: 25,
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDDDDD',
    marginVertical: '2%'
  }
});
