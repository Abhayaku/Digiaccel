import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Content, Dashboard, Login } from "./app/screens";
import CustomDrawerHeader from "./app/components/CustomDrawerHeader";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const stackOption = {
  headerShown: false,
  cardOverlayEnabled: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const drawerOption = {
  headerShown: false,
};

function StackNavDrawer() {
  return (
    <Stack.Navigator
      initialRouteName="MainDashboard"
      screenOptions={({ navigation }) => ({
        cardOverlayEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        header: () => <CustomDrawerHeader navigation={navigation} />,
      })}
    >
      <Stack.Screen name="MainDashboard" component={Dashboard} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
}

function DrawerNavigatorComponent() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" screenOptions={drawerOption}>
      <Drawer.Screen name="Dashboard" component={StackNavDrawer} />
    </Drawer.Navigator>
  );
}

function StackNavigatorComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={stackOption}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={DrawerNavigatorComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#fff" />
      <StackNavigatorComponent />
    </SafeAreaProvider>
  );
}
