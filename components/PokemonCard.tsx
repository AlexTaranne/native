import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import type { ImageSourcePropType } from "react-native";

type PokemonType = {
	pokemon: {
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
};

export default function PokemonCard({ pokemon }: PokemonType) {
	console.log("Pokemon data in PokemonCard", pokemon.sprites.regular);
	if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
		return (
			<View style={styles.card}>
				<Text style={styles.name}>Données manquantes</Text>
			</View>
		);
	}
	return (
		<View style={styles.card}>
			<Image source={pokemon.sprites.regular} style={styles.image} />
			<Text style={styles.name}>{pokemon.name.fr}</Text>

			{pokemon.types.map((type, index) => (
				<Text key={type.name} style={{ color: "#666" }}>
					{type.name}
				</Text>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: 150,
		height: 200,
		backgroundColor: "#f8f8f8",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5,
		margin: 10,
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: "contain",
		marginBottom: 10,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
		textAlign: "center",
	},
});
