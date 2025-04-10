import React, { useEffect, useState, useCallback } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import PokemonCard from "@/components/PokemonCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import type { ImageSourcePropType } from "react-native";

type ApiPokemonType = {
	id: number;
	pokedexId: number;
	name: {
		fr: string;
	};
	types: {
		name: string;
	}[];
	sprites: {
		regular: ImageSourcePropType;
	};
};

export default function PokemonsScreen() {
	const [pokemons, setPokemons] = useState<ApiPokemonType[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchPokemons = useCallback(async () => {
		try {
			const response = await fetch("https://tyradex.vercel.app/api/v1/pokemon");
			const data: ApiPokemonType[] = await response.json();

			console.log("Raw API data:", data);

			const formattedData = data.map((pokemon, index) => ({
				id: pokemon.id || index,
				pokedexId: pokemon.pokedexId || 0,
				name: pokemon.name?.fr ? { fr: pokemon.name.fr } : { fr: "Unknown" },
				types:
					pokemon.types && pokemon.types.length > 0
						? pokemon.types
						: [{ name: "Unknown", image: "" }], // Assurez-vous que `types` est un tableau
				sprites: {
					regular: pokemon.sprites?.regular
						? { uri: pokemon.sprites.regular }
						: require("@/assets/images/default.png"),
				},
			}));

			console.log("Formatted Pokemons:", formattedData);

			setPokemons(formattedData);
		} catch (error) {
			console.error("Erreur lors de la récupération des données :", error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchPokemons();
	}, [fetchPokemons]);

	if (loading) {
		return (
			<View style={styles.loadingContainer}>
				<Text style={styles.loadingText}>Chargement...</Text>
			</View>
		);
	}

	return (
		<ParallaxScrollView>
			<ThemedText type="title">Pokemons</ThemedText>
			<View style={styles.container}>
				<FlatList
					data={pokemons}
					keyExtractor={(item, index) =>
						item.id ? item.id.toString() : index.toString()
					}
					renderItem={({ item }) => <PokemonCard pokemon={item} />}
					numColumns={2}
					contentContainerStyle={styles.listContent}
				/>
			</View>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#fff",
	},
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	loadingText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
	},
	listContent: {
		alignItems: "center",
	},
});
