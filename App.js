import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function calcular() {
    let imc = peso / Math.pow(altura, 2)
    let situacao = ''

    if(imc < 18.5) {
      situacao = 'Abaixo do Peso'
    } else if(imc >= 18.5 && imc < 25) {
      situacao = 'Normal'
    } else if(imc >= 25 && imc < 30) {
      situacao = 'Sobrepeso'
    } else if(imc >= 30 && imc < 35) {
      situacao = 'Obesidade grau I'
    } else if(imc >= 35 && imc <= 40) {
      situacao = 'Obesidade grau II'  
    } else {
      situacao = 'Obesidade grau III'
    }

    alert(`Seu IMC: ${imc.toFixed(1)}\nSituação: ${situacao}`)
  }

  return (
    <ImageBackground 
    source={require('./images/medical.png')} 
    style={styles.background}>
      <View style={styles.container}>
        <Image 
        source={require('./images/saude.png')} 
        style={styles.image}/>
        <Text style={styles.texto} >Peso: </Text>
        <TextInput 
        keyboardType='numeric' 
        style={styles.input}
        value={peso}
        onChangeText={setPeso} />
        <Text style={styles.texto} >Altura: </Text>
        <TextInput keyboardType='numeric' style={styles.input}
        value={altura}
        onChangeText={setAltura}/>
        <Button
        title='Calcular IMC' 
        onPress={calcular}/>
      </View>
    </ImageBackground>  
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },

  container: {
    width: 300,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },

  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  image: {
    width: 50,
    height: 50,
    alignContent: 'flex-start',
  },

  input: {
    width: 200,
    height: 30,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },

});
