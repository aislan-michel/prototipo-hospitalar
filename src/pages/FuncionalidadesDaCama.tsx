import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';
import { RoundedButton } from "../components/RoundedButton";

type funcionalidadesProp = StackNavigationProp<RootStackParamList, 'FuncionalidadesDaCama'>;

export default function FuncionalidadesDaCama() {
  const navigation = useNavigation<funcionalidadesProp>();

  function posicoes() {

  }

  function controleDeSinais() {

  }

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Text style={styles.titulo}>Nome do paciente</Text>
          <Text style={styles.titulo}>Cama x</Text>

          
        </SafeAreaView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#59A5A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    flex: 2,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    margin: 15,
    flexWrap: 'wrap'
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
    textAlign: 'center'
  }
});