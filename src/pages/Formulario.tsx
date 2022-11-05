import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';
import React, { useState } from 'react';
import moment from 'moment';

import { RoundedButton } from '../components/RoundedButton'
import { SafeAreaView } from 'react-native-safe-area-context';

type formularioProp = StackNavigationProp<RootStackParamList, 'Formulario'>;
moment().format();

export default function Formulario() {
    const [nomePaciente, setNomePaciente] = useState('');
    const [idade, setIdade] = useState('');

    const navigation = useNavigation<formularioProp>();

    function conectar(): void {
        if (nomePaciente === null || nomePaciente === "") {
            alert('nome do paciente é obrigatório');
            return;
        }

        navigation.navigate('Camas', { paciente: nomePaciente });
    }

    function calcularIdade(dataNascimento: string): void {
        if (dataNascimento.length !== 10) {
            return;
        }

        const idade = moment(new Date()).diff(dataNascimento, 'years');
        console.log(idade);
        setIdade(idade.toString() ?? "");
    }

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.titulo}>Conecte-se com a cama:</Text>
                    </View>

                    <TextInput style={styles.input} placeholder='Nome do paciente' value={nomePaciente} onChangeText={value => setNomePaciente(value)} />

                    <TextInput keyboardType='numbers-and-punctuation' style={styles.input}
                        placeholder='Data de nascimento (dd/mm/aaaa)'
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
        backgroundColor: '#59A5A8',
    },
    safeAreaView: {
        flex: 1
    },
    titulo: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        margin: 15,
        flexWrap: 'wrap'
    },
    input: {
        flex: 0.8,
        backgroundColor: '#fff',
        margin: 10,
        textAlign: 'center'
    }
});