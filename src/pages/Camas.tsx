import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';
import {useState} from 'react';
import moment from 'moment';

import globalStyles from '../styles/global';
import { RoundedButton } from '../components/RoundedButton'
import { HorizontalButton } from '../components/HorizontalButton';

type camasProp = StackNavigationProp<RootStackParamList, 'Camas'>;

export default function Camas() {
    const navigation = useNavigation<camasProp>();

    function voltar(): void {
        navigation.navigate('Formulario');
      }

    return(
        <>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titulo}>Conecte-se com a cama:</Text>

                <HorizontalButton title='CAMA HOSPITALAR 01' />

                <HorizontalButton title='CAMA HOSPITALAR 02' />

                <HorizontalButton title='CAMA HOSPITALAR 03' />

                <HorizontalButton title='CAMA HOSPITALAR 04' />

                <HorizontalButton title='CAMA HOSPITALAR 05' />

                <RoundedButton title='VOLTAR' onPress={() => voltar()} />
            </View>
        </>
    );
}