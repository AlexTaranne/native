import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { ImageSourcePropType } from "react-native";

type RouteParams = {
	evoliForms: { name: string; image: ImageSourcePropType }[];
};

export default function Pokedex() {
	const route = useRoute();
	const evoliForms = (route.params as RouteParams)?.evoliForms ?? [];

	console.info(evoliForms);

	return (
		<View style={styles.container}>
			{evoliForms.length > 0 || evoliForms ? (
				<>
					<Text style={styles.title}>Pokedex</Text>
					<FlatList
						data={evoliForms}
						keyExtractor={(item) => item.name}
						renderItem={({ item }) => (
							<View style={styles.itemContainer}>
								<Image source={item.image} style={styles.image} />
								<Text style={styles.text}>{item.name}</Text>
							</View>
						)}
					/>
				</>
			) : (
				<View style={styles.container}>
					<Text style={styles.title}>Aucun pokemon</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 16,
	},
	itemContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 16,
		marginBottom: 16,
		marginTop: 16,
		padding: 16,
	},
	image: {
		width: 50,
		height: 50,
		marginRight: 16,
		resizeMode: "contain",
	},
	text: {
		fontSize: 18,
	},
});
