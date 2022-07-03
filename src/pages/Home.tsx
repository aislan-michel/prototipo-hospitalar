import { StyleSheet, Text, View, Image } from 'react-native';

//TODO: arrumar nome da imagem

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.bemVindo}>Bem Vindo!</Text>

        <Image style={styles.icone} source={require("../../assets/images/icone-diferente.png")} />

        <Text style={styles.iniciar}>Clique na tela para iniciar</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59A5A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  
  