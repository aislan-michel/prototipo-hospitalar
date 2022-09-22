import { StyleSheet, Text, View, TextInput, Platform, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';
import React, {useState} from 'react';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

import { RoundedButton } from '../components/RoundedButton'
import { SafeAreaView } from 'react-native-safe-area-context';

type formularioProp = StackNavigationProp<RootStackParamList, 'Formulario'>;

export default function Formulario() {
  const [idade, setIdade] = useState('');
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [open, setOpen] = useState(false)

  const navigation = useNavigation<formularioProp>();

  function conectar(): void {
    navigation.navigate('Camas');
  }

  function calcularIdade(dataNascimento: string): void{
    const idade = moment(new Date()).diff(dataNascimento, 'years');
    setIdade(idade.toString());
  }
/*
  function completarDataNascimento(value: string): void{
    console.log(value)
    if(value.length === 2){
      /*const ultimoCaractere = obterUltimoCaractere(value);

      if(ultimoCaractere !== "/"){
        setDataNascimento(value)
        return;
      }


      value += "/";
    }

    if(value.length === 5){
      const ultimoCaractere = obterUltimoCaractere(value);
      console.log(ultimoCaractere)

      if(ultimoCaractere !== "/"){
        setDataNascimento(value)
        return;
      }
      value += "/";
    }

    setDataNascimento(value)
  }*/

  //https://github.com/react-native-datetimepicker/datetimepicker

  function obterUltimoCaractere(value: string): string{
    return value.slice(-1)
  }

  return (
    <>
<Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={dataNascimento}
        onConfirm={(date) => {
          setOpen(false)
          setDataNascimento(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

      <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <Text style={styles.titulo}>Por favor, entre com os dados abaixo:</Text>

          <TextInput style={styles.input} placeholder='Nome do paciente' />

          <TextInput keyboardType='numeric' style={styles.input} 
            placeholder='Data de nascimento (dd/mm/aaaa)' 
            value={dataNascimento.toString()}
            onChangeText={value => calcularIdade(value)} 
          />

          <TextInput style={styles.input} placeholder='Idade' editable={false} value={idade} />

          <TextInput style={styles.input} placeholder='Nome do acompanhante' />

          <TextInput keyboardType='phone-pad' style={styles.input} placeholder='Contato do acompanhante' />

          <RoundedButton title='ENTRAR' onPress={conectar} />
        </SafeAreaView>
      </View>
    </>
  );
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
  input: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: '5%',
    textAlign: 'center'
  },
  titulo: {
    flex: 4,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
    top: '5%',
    textAlign: 'center',
    padding: '2%',
  },
});

/*<View style={globalStyles.container}>
            <Text style={globalStyles.titulo}>Por favor, entre com os dados abaixo:</Text>

            <TextInput style={styles.input} placeholder='Nome do paciente' />

            <TextInput keyboardType='numbers-and-punctuation' style={[styles.input]} placeholder='Data de nascimento (yyyy-mm-dd)' 
                  onChangeText={value => calcularIdade(value)} />

            <TextInput style={styles.input} placeholder='Idade' editable={false} value={idade} />

            <TextInput style={[styles.input, { marginTop: 40 }]} placeholder='Nome do acompanhante' />

            <TextInput keyboardType='phone-pad' style={styles.input} placeholder='Contato do acompanhante' />

            <RoundedButton title='ENTRAR' onPress={conectar} />
        </View>*/