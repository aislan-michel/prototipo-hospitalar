import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';

import { RoundedButton } from '../components/RoundedButton'
import { HorizontalButton } from '../components/HorizontalButton';
import { SafeAreaView } from 'react-native-safe-area-context';

type camasProp = StackNavigationProp<RootStackParamList, 'Camas'>;

export default function Camas() {
    const route = useRoute();

    const { paciente } = route.params;

    const navigation = useNavigation<camasProp>();

    function voltar(): void {
        navigation.navigate('Formulario');
    }

    function cama(numero: number): void {
        navigation.navigate('Cama', { paciente, numero })
    }

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.titulo}>Conecte-se com a cama:</Text>
                    </View>

                    <HorizontalButton title='CAMA HOSPITALAR 01' onPress={() => cama(1)} />

                    <HorizontalButton title='CAMA HOSPITALAR 02' onPress={() => cama(2)} />

                    <HorizontalButton title='CAMA HOSPITALAR 03' onPress={() => cama(3)} />

                    <HorizontalButton title='CAMA HOSPITALAR 04' onPress={() => cama(4)} />

                    <HorizontalButton title='CAMA HOSPITALAR 05' onPress={() => cama(5)} />

                    <RoundedButton title='VOLTAR' onPress={() => voltar()} />
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
        flex: 2,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        margin: 15,
        flexWrap: 'wrap'
    },
});

