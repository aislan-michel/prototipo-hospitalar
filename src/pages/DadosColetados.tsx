import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';
import React from 'react';
import { useRoute } from '@react-navigation/native';

import { RoundedButton } from '../components/RoundedButton'
import { SafeAreaView } from 'react-native-safe-area-context';

type dadosColetadosProp = StackNavigationProp<RootStackParamList, 'DadosColetados'>;

export default function DadosColetados() {
    const route = useRoute();

    const { paciente, numero } = route.params;

    const navigation = useNavigation<dadosColetadosProp>();

    function voltar(): void {
        navigation.navigate('ControleSinais', { paciente, numero });
    }

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>dados coletados</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.texto}>
                            dia 01:
                        </Text>

                        <Text style={styles.texto}>
                            frequência cardiaca:
                        </Text>

                        <Text style={styles.texto}>
                            frequência respiratória:
                        </Text>

                        <Text style={styles.texto}>
                            temperatura:
                        </Text>

                        <Text style={styles.texto}>
                            pressão:
                        </Text>

                        <Text style={styles.texto}>
                            peso:
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.texto}>
                            dia 02:
                        </Text>

                        <Text style={styles.texto}>
                            frequência cardiaca:
                        </Text>

                        <Text style={styles.texto}>
                            frequência respiratória:
                        </Text>

                        <Text style={styles.texto}>
                            temperatura:
                        </Text>

                        <Text style={styles.texto}>
                            pressão:
                        </Text>

                        <Text style={styles.texto}>
                            peso:
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.texto}>
                            dia 03:
                        </Text>

                        <Text style={styles.texto}>
                            frequência cardiaca:
                        </Text>

                        <Text style={styles.texto}>
                            frequência respiratória:
                        </Text>

                        <Text style={styles.texto}>
                            temperatura:
                        </Text>

                        <Text style={styles.texto}>
                            pressão:
                        </Text>

                        <Text style={styles.texto}>
                            peso:
                        </Text>
                    </View>

                    <RoundedButton title='VOLTAR' onPress={() => voltar()} />
                </SafeAreaView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#59A5A8'
    },
    safeAreaView: {
        flex: 1
    },
    cabecalho: {
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 30,
        textTransform: 'uppercase',
        margin: '5%',
        fontWeight: 'bold',
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        margin: '5%',
        maxHeight: 150
    },
    texto: {
        color: 'black',
        fontSize: 10,
        textTransform: 'uppercase',
        margin: 2,
        fontWeight: 'bold',
    }
});