import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Shoes from "../../Component/Shoes";

export default function Details() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image source={require("../../assets/banner.png")} 
        style={styles.Image} />
        

    <View style={styles.textContainer}>
        <Text style={styles.text}>Tenis</Text>
        <Text style={[styles.text, {color: '#CECECF'} ]}>*</Text>
        <Text style={[styles.text, {color: '#CECECF'}]}>Masculino</Text>
        <TouchableOpacity style= {{position: "absolute", right: 0, alignSelf: "center"}}>
            <MaterialIcons name="filter-list" 
            size={24} 
            color="black" />
        </TouchableOpacity>
        </View>
       </View>


          <View style={styles.line}/>

          <ScrollView>
            <Text style={styles.text}>LANÇAMENTOS</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             <Shoes img={require('../../assets/1.png')} cost="R$140,90"  onClick={()=> navigation.navigate('Details')}>
              Nike Air max Dia
             </Shoes>
             <Shoes img={require('../../assets/2.png')} cost="R$280,90"  onClick={()=> navigation.navigate('Details')}>
              Nike Donwshifter 10
             </Shoes>
            </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             <Shoes img={require('../../assets/3.png')} cost="R$560,90"  onClick={()=> alert('Clicou')}>
              Nike Squirdward Tentacles
             </Shoes>
             <Shoes img={require('../../assets/4.png')} cost="R$220"  onClick={()=> alert('Clicou')}>
              Nike Epic React Flyknit 2
             </Shoes>
            </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             <Shoes img={require('../../assets/5.png')} cost="R$120,90" onClick={()=> alert('Clicou')}>
              Nike Joyride Run Flyknit
             </Shoes>
             <Shoes img={require('../../assets/6.png')} cost="R$920"  onClick={()=> alert('Clicou')}>
              Nike Air max Dia Sujeito programador
             </Shoes>
            </View>


          </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingBottom: 100,
  },
  header: {
   marginBottom: 8,
  },
  Image: {
    width: "100%",
    paddingBottom: 30,
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
   fontFamily: "Anton_400Regular",
   fontSize: 26,
   marginHorizontal: '1%',
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
   
  }
});
