import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';

import globalStyles from '../styles/global';

import {Button} from '../components/Button'

type formularioProp = StackNavigationProp<RootStackParamList, 'Formulario'>;

export default function Formulario() {
  const navigation = useNavigation<formularioProp>();

  function conectar(): void {
    navigation.navigate('Camas');
  }

  return (
    <>
        <View style={globalStyles.container}>
            <Text style={styles.titulo}>Por favor, entre com os dados abaixo:</Text>

            <TextInput style={styles.input} placeholder='Nome do paciente' />

            <TextInput keyboardType='numbers-and-punctuation' style={styles.input} placeholder='Data de nascimento' />

            <TextInput style={[styles.input, { marginTop: 40 }]} placeholder='Nome do acompanhante' />

            <TextInput keyboardType='phone-pad' style={styles.input} placeholder='Contato do acompanhante' />

            <Button title='ENTRAR' onPress={conectar} />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
    position: 'absolute',
    top: '5%',
    textAlign: 'center',
    padding: '2%'
  },
  input: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    margin: 10
  }
});