
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
    {pokemon.map((poke) =>(
    <View key={poke.id} style={{flexDirection: "row", justifyContent:"center"}}>
      <Image   source={require('@/assets/images/pokeball.png')} style={{ width: 24, height: 24, marginRight: 8 }}/>
<Link href={`/pokemonDetails/${poke.id}`}>
      <ThemedText>{poke.name}</ThemedText>
</Link>
     </View>
    ))}
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
