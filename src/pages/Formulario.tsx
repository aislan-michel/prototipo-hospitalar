import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';

export default function Formulario() {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.titulo}>Por favor, entre com os dados abaixo:</Text>

            <TextInput style={styles.input} value='' placeholder='Nome do paciente' />

            <TextInput keyboardType='number-pad' style={styles.input} value='' placeholder='Data de nascimento' />

            <TextInput style={[styles.input, { marginTop: 40 }]} value='' placeholder='Nome do acompanhante' />

            <TextInput keyboardType='number-pad' style={styles.input} value='' placeholder='Contato do acompanhante' />

            <TouchableOpacity style={styles.botaoEntrar}>
                <Text style={styles.textoEntrar}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#59A5A8',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
    },
    botaoEntrar: {
        position: 'absolute',
        top: '80%'
    },
    textoEntrar: {
        backgroundColor: '#396B6D',
        padding: 15,
        borderRadius: 50,
        color: '#fff'        
    }
  });