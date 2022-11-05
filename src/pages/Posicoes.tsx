import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';
import { useRoute } from '@react-navigation/native';

import { RoundedButton } from '../components/RoundedButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

type posicoesProp = StackNavigationProp<RootStackParamList, 'Posicoes'>;

export default function Posicoes() {
    const route = useRoute();

    const { paciente, numero } = route.params;

    const navigation = useNavigation<posicoesProp>();

    function voltar(): void {
        navigation.navigate('Cama', { paciente, numero });
    }


    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>posições</Text>
                        <Text style={styles.subtitulo}>{paciente}</Text>
                        <Text style={styles.subtitulo}>Cama {numero}</Text>
                    </View>

                    <ScrollView style={styles.scrollView}>
                        <View style={styles.funcionalidades}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.texto}>abaixar</Text>
                                <View style={styles.iconeContainer}>
                                    <Image
                                        source={require("../../assets/images/abaixar.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.texto}>elevar</Text>
                                <View style={styles.iconeContainer}>
                                    <Image
                                        source={require("../../assets/images/elevar.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.funcionalidades}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.texto}>semi-fowler</Text>
                                <View style={styles.iconeContainer}>
                                    <Image
                                        source={require("../../assets/images/semi-flower.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.texto}>cardio</Text>
                                <View style={styles.iconeContainer}>
                                    <Image
                                        source={require("../../assets/images/cardio.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.funcionalidades}>
                            <View style={styles.funcionalidade}>
                                <Text style={styles.texto}>flexão</Text>
                                <View style={styles.iconeContainer}>
                                    <Image
                                        source={require("../../assets/images/flexao.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </View>
                            </View>

                            <View style={styles.funcionalidade}>
                                <Text style={styles.texto}>fowler</Text>
                                <View style={styles.iconeContainer}>
                                    <Image
                                        source={require("../../assets/images/fowler.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </View>

                            </View>
                        </View>

                        <View style={styles.funcionalidades}>
                            <View style={styles.funcionalidade}>
                                <Text style={styles.texto}>sentado</Text>
                                <View style={styles.iconeContainer}>
                                    <Image
                                        source={require("../../assets/images/sentado.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </View>
                            </View>

                            <View style={styles.funcionalidade}>
                                <Text style={styles.texto}>padrao</Text>
                                <View style={styles.iconeContainer}>
                                    <Image
                                        source={require("../../assets/images/padrao.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </View>

                            </View>
                        </View>

                        <View style={styles.funcionalidades}>
                            <View style={styles.funcionalidade}>
                                <Text style={styles.texto}>proclive</Text>
                                <View style={styles.iconeContainer}>
                                    <Image
                                        source={require("../../assets/images/proclive.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flex: 0.3 }}>
                        <RoundedButton title='VOLTAR' onPress={() => voltar()} />
                    </View>
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
    scrollView: {
        flex: 1
    },
    cabecalho: {
        alignItems: 'center',
    },
    titulo: {
        color: 'white',
        fontSize: 30,
        textTransform: 'uppercase',
        margin: '5%'
    },
    subtitulo: {
        color: 'white',
        fontSize: 22,
        textTransform: 'uppercase'
    },
    funcionalidades: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",

    },
    funcionalidade: {
        flexDirection: 'column',
    },
    icone: {


    },
    iconeContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: '2%',
        backgroundColor: 'white',
        width: 140,
        height: 110
    },
    texto: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

