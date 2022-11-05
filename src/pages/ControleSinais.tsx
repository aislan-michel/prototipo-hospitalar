import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';
import { useRoute } from '@react-navigation/native';

import { RoundedButton } from '../components/RoundedButton'
import { SafeAreaView } from 'react-native-safe-area-context';

type controleSinaisProp = StackNavigationProp<RootStackParamList, 'ControleSinais'>;

export default function ControleSinais() {
    const route = useRoute();

    const { paciente, numero } = route.params;

    const navigation = useNavigation<controleSinaisProp>();

    function voltar(): void {
        navigation.navigate('Cama', { paciente, numero });
    }

    function dadosColetados(): void {
        navigation.navigate("DadosColetados", { paciente, numero });
    }

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>controle de sinais</Text>
                        <Text style={styles.subtitulo}>{paciente}</Text>
                        <Text style={styles.subtitulo}>Cama {numero}</Text>
                    </View>

                    <View style={styles.funcionalidades}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.iconeContainer}>
                                <Image
                                    source={require("../../assets/images/frequencia-cardiaca.png")}
                                    resizeMode="cover" style={styles.icone}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.iconeContainer}>
                                <Image
                                    source={require("../../assets/images/controle-da-respiracao.png")}
                                    resizeMode="cover" style={{ width: 140, height: 110 }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.funcionalidades}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.iconeContainer}>
                                <Image
                                    source={require("../../assets/images/temperatura.png")}
                                    resizeMode="cover" style={styles.icone}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.iconeContainer}>
                                <Image
                                    source={require("../../assets/images/balanca.png")}
                                    resizeMode="cover" style={{ width: 150, height: 150 }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.funcionalidades}>
                        <View style={styles.funcionalidade}>
                            <View style={styles.iconeContainer}>
                                <Image
                                    source={require("../../assets/images/pressao-arterial.png")}
                                    resizeMode="cover" style={styles.icone}
                                />
                            </View>
                        </View>

                        <View style={styles.funcionalidade}>
                            <View style={styles.iconeContainer}>
                                <TouchableOpacity onPress={() => dadosColetados()}>
                                    <Image
                                        source={require("../../assets/images/calendario.png")}
                                        resizeMode="cover" style={styles.icone}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
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

