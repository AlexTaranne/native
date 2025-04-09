import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';
import { pokemon } from '@/data/pokemonData';  // Importer le tableau depuis pokemonData.ts
import ParallaxScrollView from '@/components/ParallaxScrollView';

export const options = ({ params }: { params: { id: string; name?: string } }) => ({
    headerTitle:  '',
  });

export default function PokemonDetails() {
  const { id } = useLocalSearchParams(); // Récupère l'ID de l'URL
  const currentPokemon = pokemon.find((poke) => poke.id.toString() === id);

  if (!currentPokemon) {
    return <Text>Pokemon non trouvé</Text>;
  }

  return (
    <ParallaxScrollView>
    <View style={styles.container}>
        <Text style={styles.text}>{currentPokemon.name}</Text>
      <Image source={currentPokemon.image} style={styles.image} />
      
      <Text style={styles.text}>{currentPokemon.description}</Text>
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    color: "#fff"
    
  },
  image: {
    width: 300,
    height: 300,
  },
  text:{
    color:"#fff",
    fontSize:20
  }
});