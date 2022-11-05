import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';
import { useRoute } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

type camaProp = StackNavigationProp<RootStackParamList, 'Cama'>;

export default function Cama() {
    const route = useRoute();

    const { paciente, numero } = route.params;

    const navigation = useNavigation<camaProp>();

    function posicoes() {
        navigation.navigate('Posicoes', { paciente, numero });
    }

    function controleSinais() {
        navigation.navigate('ControleSinais', { paciente, numero });
    }

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>{paciente}</Text>
                        <Text style={styles.titulo}>Cama {numero}</Text>
                    </View>

                    <View style={styles.funcionalidade}>
                        <TouchableOpacity onPress={() => posicoes()}>
                            <Image
                                source={require("../../assets/images/icone-posicoes.png")}
                                resizeMode="cover" style={styles.icone}
                            />
                        </TouchableOpacity>

                        <Text style={styles.texto}>posições</Text>
                    </View>

                    <View style={styles.funcionalidade}>
                        <TouchableOpacity onPress={() => controleSinais()}>
                            <Image
                                source={require("../../assets/images/icone-controle-sinais.png")}
                                resizeMode="cover" style={styles.icone}
                            />
                        </TouchableOpacity>

                        <Text style={styles.texto}>{`controle 
de sinais
                        `}</Text>
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
    cabecalho: {
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '20%'
    },
    titulo: {
        color: 'white',
        fontSize: 30,
        textTransform: 'uppercase'
    },
    funcionalidade: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '10%'
    },
    icone: {
        width: 150,
        height: 150,
    },
    texto: {
        marginTop: '18%',
        marginLeft: '7%',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});

