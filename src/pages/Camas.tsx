import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';

import { RoundedButton } from '../components/RoundedButton'
import { HorizontalButton } from '../components/HorizontalButton';
import { SafeAreaView } from 'react-native-safe-area-context';

type camasProp = StackNavigationProp<RootStackParamList, 'Camas'>;

export default function Camas() {
    const navigation = useNavigation<camasProp>();

    function voltar(): void {
      navigation.navigate('Formulario');
    }

    function funcionalidadesDaCama(){
        navigation.navigate('FuncionalidadesDaCama');
    }

    return(
        <>
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flexDirection:'row'}}> 
                        <Text style={styles.titulo}>Conecte-se com a cama:</Text>
                    </View>                    

                    <HorizontalButton title='CAMA HOSPITALAR 01' onPress={() => funcionalidadesDaCama()} />

                    <HorizontalButton title='CAMA HOSPITALAR 02' onPress={() => funcionalidadesDaCama()} />

                    <HorizontalButton title='CAMA HOSPITALAR 03' onPress={() => funcionalidadesDaCama()} />

                    <HorizontalButton title='CAMA HOSPITALAR 04' onPress={() => funcionalidadesDaCama()} />

                    <HorizontalButton title='CAMA HOSPITALAR 05' onPress={() => funcionalidadesDaCama()} />

                    <RoundedButton title='VOLTAR' onPress={() => voltar()} />
                </SafeAreaView>
            </View>
           
        </>
    );
}

/*
 <View style={globalStyles.container}>
                <Text style={globalStyles.titulo}>Conecte-se com a cama:</Text>

                <HorizontalButton title='CAMA HOSPITALAR 01' />

                <HorizontalButton title='CAMA HOSPITALAR 02' />

                <HorizontalButton title='CAMA HOSPITALAR 03' />

                <HorizontalButton title='CAMA HOSPITALAR 04' />

                <HorizontalButton title='CAMA HOSPITALAR 05' />

                <RoundedButton title='VOLTAR' onPress={() => voltar()} />
            </View>





*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: Platform.OS === 'ios' ? 20 : 0,
      backgroundColor: '#59A5A8',
      alignItems: 'center',
      justifyContent: 'center',
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

