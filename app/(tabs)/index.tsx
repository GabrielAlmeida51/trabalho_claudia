import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [contador, setContador] = useState(0);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      {/* Título */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">CONTADOR INTELIGENTE</ThemedText>
      </ThemedView>

      {/* Contador */}
      <View style={styles.contadorContainer}>
        <Text style={styles.contadorTitulo}>Contador:</Text>
        <Text style={styles.contadorNumero}>{contador}</Text>

        {/* Mensagem de paz e harmonia */}
        {contador !== 0 && contador % 10 === 0 && (
          <Text style={styles.mensagem}>
            🌿 Que a paz e a harmonia estejam com você a cada 10 passos! 🌿
          </Text>
        )}

        {/* Botões com cores personalizadas */}
        <View style={styles.botoesContainer}>
          <TouchableOpacity style={[styles.botao, styles.botaoVerde]} onPress={() => setContador(contador + 1)}>
            <Text style={styles.textoBotao}>Incrementar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaoVermelho]} onPress={() => setContador(contador - 1)}>
            <Text style={styles.textoBotao}>Decrementar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaoAzul]} onPress={() => setContador(0)}>
            <Text style={styles.textoBotao}>Resetar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conteúdo existente */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ola meu nome é gabriel</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            Aqui cada número tem significado! Use o contador para marcar seus avanços, registrar seus cliques ou simplesmente se divertir vendo os números subirem (ou descerem). Cada toque é um passo — então continue contando, porque cada passo importa!
          </ThemedText>
        </ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  contadorContainer: {
    margin: 20,
    alignItems: 'center',
  },
  contadorTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contadorNumero: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#006400',
  },
  mensagem: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#2E8B57',
    textAlign: 'center',
  },
  botoesContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoVerde: {
    backgroundColor: 'green',
  },
  botaoVermelho: {
    backgroundColor: 'red',
  },
  botaoAzul: {
    backgroundColor: 'blue',
  },
});
 