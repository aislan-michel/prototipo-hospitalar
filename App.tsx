import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { RootStackParamList } from './src/types/RootStackPrams';

import Home from './src/pages/Home';
import Formulario from './src/pages/Formulario';
import Camas from './src/pages/Camas';
import FuncionalidadesDaCama from './src/pages/FuncionalidadesDaCama';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Camas" component={Camas} />
        <Stack.Screen name="FuncionalidadesDaCama" component={FuncionalidadesDaCama} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

