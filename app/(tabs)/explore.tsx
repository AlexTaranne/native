import React, { useState } from "react";
import {
	StyleSheet,
	Image,
	View,
	Button,
	type ImageSourcePropType,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";

type EvolutionLevel = "level1" | "level2" | "level3";

type Pokemon = {
	name: string;
	description: string;
	images: Record<EvolutionLevel, ImageSourcePropType>;
};

const pokemons: Pokemon[] = [
	{
		name: "Grodoudou",
		description: "Évolution de Rondoudou, de type Normal et Fée.",
		images: {
			level1: require("@/assets/images/Rondoudou.png"),
			level2: require("@/assets/images/Rondoudou2.png"),
			level3: require("@/assets/images/Rondoudou3.png"),
		},
	},
	{
		name: "Rafflesia",
		description: "Évolution de Mystherbe via Ortide, de type Plante et Poison.",
		images: {
			level1: require("@/assets/images/Mystherbe.png"),
			level2: require("@/assets/images/Mystherbe2.png"),
			level3: require("@/assets/images/Mystherbe3.png"),
		},
	},
];

function usePokemonEvolution() {
	const [count, setCount] = useState(0);
	const [level, setLevel] = useState<EvolutionLevel>("level1");
	const handleClick = () => {
		let nextCount = count;

		if (count < 20) nextCount += 1;
		else if (count >= 20 && count <= 200) {
			setLevel("level2");
			nextCount += 5;
		} else {
			setLevel("level3");
			nextCount += 10;
		}

		setCount(nextCount);
	};

	return { count, level, handleClick };
}

export default function TabTwoScreen() {
	return (
		<ParallaxScrollView>
			<ThemedText type="title">Pokémons</ThemedText>
			<ThemedText>Faites-les évoluer !</ThemedText>

			{pokemons.map((pokemon) => {
				const { count, level, handleClick } = usePokemonEvolution();

				return (
					<Collapsible title={pokemon.name} key={pokemon.name}>
						<Image source={pokemon.images[level]} style={styles.image} />
						<View style={styles.container}>
							<ThemedText>Énergie : {count}</ThemedText>
							<Button onPress={handleClick} title="Cliquez-moi !" />
						</View>
						<ThemedText>{pokemon.description}</ThemedText>
					</Collapsible>
				);
			})}
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 160,
		height: 150,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 12,
	},
});
