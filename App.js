import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Stats from './components/Stats';
import Anamnesis from './components/Anamnesis';
import Summary from './components/Summary';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Stats">
        <Stack.Screen options={{headerLeft: ()=> <View style={{padding: 10, display: "flex", justifyContent: "center", alignItems: 'center',flexDirection: "row"}}>
          <Image style={{width: 80, height: 80}} source={{uri: "https://res.cloudinary.com/cockbook/image/upload/v1673523213/single/band-6_vqza6j.png"}} />
          <Image style={{width: 20, height: 30}} source={{uri: "https://res.cloudinary.com/cockbook/image/upload/v1673523475/single/800px-Bluetooth.svg_lso1do.png"}} />
        </View>, headerTitle: ""}} name="Stats" component={Stats} />
        <Stack.Screen options={{headerTitle: "Thông tin bệnh nhân"}} name={"Anamnesis"} component={Anamnesis} />
        <Stack.Screen options={{headerTitle: "Chuẩn đoán"}} name={"Summary"} component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
