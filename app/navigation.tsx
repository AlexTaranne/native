import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import JeuxEvoli from "@/app/(tabs)/jeuxEvoli";
import Pokedex from "@/app/(tabs)/Pokedex";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="JeuxEvoli" component={JeuxEvoli} />
				<Tab.Screen name="Pokedex" component={Pokedex} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
