import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackPrams';

import globalStyles from '../styles/global';


//TODO: arrumar nome da imagem

type homePageProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<homePageProp>();

  function iniciar(): void{
      navigation.navigate('Formulario');
  }

  return (
    <>
      <View style={globalStyles.container}>
        <Text style={styles.bemVindo}>Bem Vindo!</Text>

        <Image style={styles.icone} source={require("../../assets/images/icone-diferente.png")} />

        <Text style={styles.iniciar}>
            <TouchableOpacity onPress={iniciar}>
                <Text>Clique na tela para iniciar</Text>
            </TouchableOpacity>
        </Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bemVindo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 50,
    position: 'absolute',
    top: '10%'
  },
  icone: {
    position: 'absolute', 
    top: '35%', 
    width: 180, 
    height: 180
  },
  iniciar: {
    position: 'absolute', 
    top: '75%', 
    color: '#fff',
    fontSize: 20,
  }
});
  
  