import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { pokemon } from '@/data/pokemonData';  
import ParallaxScrollView from '@/components/ParallaxScrollView';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';




export default function PokemonDetails() {
  const { id } = useLocalSearchParams(); 
  const currentPokemon = pokemon.find((poke) => poke.id.toString() === id);

  if (!currentPokemon) {
    return <Text>Pokemon non trouvé</Text>;
  }
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Retour"
          onPress={() => navigation.goBack()}
          
        />
      ),
    });
  }, [navigation]);
  return (
    <ParallaxScrollView>
    <ThemedView style={styles.container}>
        <Text style={styles.title}>{currentPokemon.name}</Text>
      <Image source={currentPokemon.image} style={styles.image} resizeMode='contain'/>
      
      <Text style={styles.text}>{currentPokemon.description}</Text>
    </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    color: "#fff",
    flexDirection:"column",
    gap:30,
   
  },
  image: {
    width: 350,
    height: 350,
  },
  text:{
    color:"#fff",
    fontSize:20
  },
  title: {
    fontSize:50,
    color:"#fff",
  }

});