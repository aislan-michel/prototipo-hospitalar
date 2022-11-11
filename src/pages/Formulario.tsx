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
        var from: any = dataNascimento.split("/");
        var birthdateTimeStamp: any = new Date(from[2], from[1] - 1, from[0]);
        var cur: any = new Date();
        var diff = cur - birthdateTimeStamp;
        // This is the difference in milliseconds
        var currentAge = Math.floor(diff / 31557600000);
        // Divide by 1000*60*60*24*365.25
        setIdade(currentAge.toString());

    }

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.titulo}>Conecte-se com a cama:</Text>
                    </View>

                    <TextInput style={styles.input} placeholder='Nome do paciente'
                        value={nomePaciente} onChangeText={value => setNomePaciente(value)} />

                    <TextInput keyboardType='numbers-and-punctuation' style={styles.input}
                        placeholder='Data de nascimento (dd/mm/aaaa)'
                        onChangeText={value => {
                            if (value.length !== 10) {
                                return;
                            }

                            calcularIdade(value);
                        }}
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