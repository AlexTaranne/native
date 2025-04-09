import { StyleSheet, Image, Platform, View , TouchableOpacity} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Link, useRouter } from 'expo-router';
import { pokemon } from '@/data/pokemonData';

interface PokemonTypes {
  id:number,
  name: string,
  image: any,
  description: string
}


export default function TabTwoScreen() {

  const router = useRouter();


  return (
    <ParallaxScrollView >
        <ThemedText type="title">Pokemons</ThemedText>
      <ThemedText>Liste des pokemons:</ThemedText>
      <Collapsible title="Dracaufeu">
      <Image source={pokemon[0].image}  style={styles.view}/>
        <ThemedText>
          Dracaufeu est un pokemon de type feu et vol.
        </ThemedText>
        <ThemedText>
          Autres formes:
        </ThemedText>
         <View style={styles.container}>
        <View style={styles.container1} >
          <Link
            href={`/pokemonDetails/${pokemon[1].id}`} 
          >
            <Image source={pokemon[1].image} style={styles.image} />
              </Link>
            <ThemedText>{pokemon[1].name}</ThemedText>
              </View>
              <View style={styles.container1} >
          <Link
            href={`/pokemonDetails/${pokemon[2].id}`} 
          >
            <Image source={pokemon[2].image} style={styles.image} />
              </Link>
            <ThemedText>{pokemon[2].name}</ThemedText>
              </View>
       
         <View style={styles.container1}>
         </View>
         </View>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  view: {
    
    width:200,
    height:200,
    justifyContent: "center"
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap:40
  },
  image:{
    height:100,
    width:100
  },
  container1:{
    alignItems:"center",
    
  }
});
