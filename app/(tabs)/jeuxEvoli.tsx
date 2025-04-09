import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";

type RootStackParamList = {
	JeuxEvoli: undefined;
	Pokedex: { evoliForms: { name: string; image: string }[] };
};

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export default function jeuxEvoli() {
	const [text, setText] = useState("");
	const [imageSource, setImageSource] = useState(
		require("@/assets/images/EVOLI.jpg"),
	);
	const [displayText, setDisplayText] = useState("Evoli");
	const navigation = useNavigation();

	const evoliForms = [
		{ name: "Evoli", image: require("@/assets/images/EVOLI.jpg") },
		{ name: "Aquali", image: require("@/assets/images/AQUALI.jpg") },
		{ name: "Pyroli", image: require("@/assets/images/PYROLI.jpg") },
		{ name: "Voltali", image: require("@/assets/images/VOLTALI.jpg") },
		{ name: "Mentali", image: require("@/assets/images/MENTALI.jpg") },
		{ name: "Noctali", image: require("@/assets/images/NOCTALI.jpg") },
		{ name: "Phyllali", image: require("@/assets/images/PHYLLALI.jpg") },
		{ name: "Givrali", image: require("@/assets/images/GIVRALI.jpg") },
		{ name: "Nymphali", image: require("@/assets/images/NYMPHALI.jpg") },
	];

	const handleValidate = () => {
		if (text.toLowerCase() === "normal" && displayText === "Evoli") {
			setImageSource(require("@/assets/images/AQUALI.jpg"));
			setDisplayText("Aquali");
		} else if (text.toLowerCase() === "eau" && displayText === "Aquali") {
			setImageSource(require("@/assets/images/PYROLI.jpg"));
			setDisplayText("Pyroli");
		} else if (text.toLowerCase() === "feu" && displayText === "Pyroli") {
			setImageSource(require("@/assets/images/VOLTALI.jpg"));
			setDisplayText("Voltali");
		} else if (
			text.toLowerCase() === "electrique" &&
			displayText === "Voltali"
		) {
			setImageSource(require("@/assets/images/MENTALI.jpg"));
			setDisplayText("Mentali");
		} else if (text.toLowerCase() === "psy" && displayText === "Mentali") {
			setImageSource(require("@/assets/images/NOCTALI.jpg"));
			setDisplayText("Noctali");
		} else if (text.toLowerCase() === "tenebre" && displayText === "Noctali") {
			setImageSource(require("@/assets/images/PHYLLALI.jpg"));
			setDisplayText("Phyllali");
		} else if (text.toLowerCase() === "plante" && displayText === "Phyllali") {
			setImageSource(require("@/assets/images/GIVRALI.jpg"));
			setDisplayText("Givrali");
		} else if (text.toLowerCase() === "glace" && displayText === "Givrali") {
			setImageSource(require("@/assets/images/NYMPHALI.jpg"));
			setDisplayText("Nymphali");
		} else if (text.toLowerCase() === "fee" && displayText === "Nymphali") {
			setImageSource(require("@/assets/images/POKEBALL.jpg"));
			setDisplayText("Bien joué !");
		} else {
			setImageSource(require("@/assets/images/EVOLI.jpg"));
			setDisplayText("Evoli");
		}
	};

	return (
		<ParallaxScrollView>
			<Text style={styles.displayText}>{displayText}</Text>
			<Image source={imageSource} style={styles.image} />

			{displayText !== "Bien joué !" ? (
				<>
					<TextInput
						style={styles.textInput}
						placeholder="Pokeman type?"
						onChangeText={(newText) => setText(newText)}
						defaultValue={text}
					/>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.customButton}
							onPress={handleValidate}
						>
							<Text style={styles.buttonText}>Validate</Text>
						</TouchableOpacity>
					</View>
				</>
			) : (
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.customButton}
						onPress={() => navigation.navigate("Pokedex", { evoliForms })}
					>
						<Text style={styles.buttonText}>Regarde ton Pokedex 😉</Text>
					</TouchableOpacity>
				</View>
			)}
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	displayText: {
		alignSelf: "center",
		fontWeight: "bold",
		marginVertical: 10,
		fontSize: 24,
	},
	image: {
		alignSelf: "center",
		width: 300,
		height: 300,
		marginVertical: 10,
		resizeMode: "contain",
	},
	textInput: {
		height: 40,
		padding: 5,
		alignSelf: "center",
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		marginBottom: 10,
	},
	buttonContainer: {
		alignSelf: "center",
		marginVertical: 10,
	},
	customButton: {
		backgroundColor: "#007BFF",
		padding: 10,
		borderRadius: 5,
		width: 150,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
	},
});
