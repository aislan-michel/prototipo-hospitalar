import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';
import {useState} from 'react';
import moment from 'moment';

import globalStyles from '../styles/global';
import { RoundedButton } from '../components/RoundedButton'

type formularioProp = StackNavigationProp<RootStackParamList, 'Formulario'>;

export default function Formulario() {
  const [idade, setIdade] = useState('');

  const navigation = useNavigation<formularioProp>();

  function conectar(): void {
    navigation.navigate('Camas');
  }

  function calcularIdade(dataNascimento: string): void{
    const idade = moment(new Date()).diff(dataNascimento, 'years');
    setIdade(idade.toString());
  }

  return (
    <>
        <View style={globalStyles.container}>
            <Text style={globalStyles.titulo}>Por favor, entre com os dados abaixo:</Text>

            <TextInput style={styles.input} placeholder='Nome do paciente' />

            <TextInput keyboardType='numbers-and-punctuation' style={[styles.input]} placeholder='Data de nascimento (yyyy-mm-dd)' 
                  onChangeText={value => calcularIdade(value)} />

            <TextInput style={styles.input} placeholder='Idade' editable={false} value={idade} />

            <TextInput style={[styles.input, { marginTop: 40 }]} placeholder='Nome do acompanhante' />

            <TextInput keyboardType='phone-pad' style={styles.input} placeholder='Contato do acompanhante' />

            <RoundedButton title='ENTRAR' onPress={conectar} />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    margin: 10
  }
});