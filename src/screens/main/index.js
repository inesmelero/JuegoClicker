import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function Main() {
  const [nToques, setNToques] = useState(1);
  const [multi, setMultiplicador] = useState(1);


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Fotografía.jpg')}
        style={styles.background}
      >
        <Text style={styles.text_puntos}>Puntos: {nToques}</Text>

        <TouchableOpacity onPress={() => setNToques(nToques+multi)}>

          {nToques>=10?(
            <Image style={styles.image2} source={require('../../../assets/beso.png')} />
          ):(
          <Image style={styles.image} source={require('../../../assets/Spiderman.png')} />
        )}
        </TouchableOpacity>

        <View style={styles.contenedorLetras}>


          {/*Reiniciar */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setNToques(0);
              setMultiplicador(1);

            }}
          >
            <Text style={styles.buttonText}>Reiniciar</Text>
          </TouchableOpacity>

          {/* Contenedor para los botones de multiplicador */}
          <View style={styles.rowContainer}>
            {/* Duplicar x2 */}
            <TouchableOpacity
              style={styles.buttonMulti}
              onPress={() => setMultiplicador(multi *2)}
            >
              <Text style={styles.buttonText_multi}>MULTIPLICAR X2</Text>
            </TouchableOpacity>

            {/* Duplicar x4 */}
            <TouchableOpacity
              style={styles.buttonMulti}
              onPress={() => setMultiplicador(multi * 4)}
            >
              <Text style={styles.buttonText_multi}>MULTIPLICAR X4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text_puntos: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    marginLeft: 125,
  },

  image: {
    width: 290,
    height: 300,
    marginLeft: 80,
  },

  image2: {
    width: 290,
    height: 300,
    marginLeft: 80,
    borderRadius:100,
    marginBottom:30,
  },

  background: {
    flex: 1, // Hace que la imagen de fondo ocupe todo el espacio
    justifyContent: 'center',
    alignContent: 'center',
    resizeMode: 'cover',
  },

  buttonText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    borderRadius: 15,
    backgroundColor: '#162B4E',
    padding: 15,
    textAlign: 'center',
  },

  contenedorLetras: {
    alignItems: 'center',
  },

  rowContainer: {
    flexDirection: 'row', // Coloca los botones en una fila
    justifyContent: 'space-between', // Espacio entre los botones
    marginTop: 40,
    paddingHorizontal: 20,
    width: '100%',
  },

  buttonMulti: {
    flex: 1, // Los botones ocuparán el mismo espacio
    marginHorizontal: 10, // Separación entre los botones
  },

  buttonText_multi: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 15,
    backgroundColor: '#162B4E',
    padding: 15,
    textAlign: 'center',
  },
});
