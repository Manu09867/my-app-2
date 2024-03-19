import { Center, ButtonGroup, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, Heading, ThreeDotsIcon, Input, InputField } from '@gluestack-ui/themed';
import { EditIcon, ArrowLeftIcon, Navigation, ArrowDownLeftSquare } from 'lucide-react-native';
import { HStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { config } from '@gluestack-ui/config';
import { Box,View, GluestackUIProvider, Text, Button, ButtonText, ButtonIcon, VStack, Image, Icon, Progress, ProgressFilledTrack, Spinner } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import { Camera } from 'lucide-react-native';
import Logo from './assets/Icons/Logo';
import RowCard from './components/RowCard';
import { Defs } from 'react-native-svg';
import Valid_Form from './components/Valid_Form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawerapp from './components/Drawerapp';
import Toast_c from './components/Toast_c';
import Navigation_tab from './components/Navigation_tab';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function HomeScreen() {
  const navigation = useNavigation();
    return <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Home Screen</Text>
      <Button action={"primary"} variant={"solid"} size={"lg"} isDisabled={false} onPress={() => navigation.navigate("Navigation")}>
        <ButtonText>
          Formulario
        </ButtonText>
      </Button>
    </View>;
  }

interface IList {
  data: {
    description: string;
    image: string;
    count: number;
  }[];
}



const Stack = createNativeStackNavigator();
export default function App() {
  const data = [{
    description: 'keyboard',
    image: require("./assets/1.jpg"),
    count: 200
  }, {
    description: 'headphones',
    image: require('./assets/2.jpg'),
    count: 300
  }, {
    description: 'mouse',
    image: require('./assets/3.jpg'),
    count: 100
  }];



  return <NavigationContainer>
    <GluestackUIProvider config={config}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Navigation" component={Navigation_tab} />
      </Drawer.Navigator>
    </GluestackUIProvider>;
  </NavigationContainer>;
}

{/*<Container data={data} />*/ }
<Valid_Form></Valid_Form>;
const Container: React.FC<IList> = ({
  data
}) => {
  const [count, setCount] = useState(0);
  return <VStack space={"lg"} sx={{
    justifyContent: 'center',
    alignItems: 'center'
  }} reversed={false} space={"lg"}>
    <Box sx={{
      w: 100,
      h: 100,
      rounded: '$sm',
      bg: '$blue300'
    }} />
    <Box sx={{
      w: 100,
      h: 100,
      rounded: '$sm',
      bg: '$blue400'
    }} />
    <Box sx={{
      w: 100,
      h: 100,
      rounded: '$sm',
      bg: '$blue500'
    }} />

    <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false}>
      <ButtonText>Add </ButtonText>
      <ButtonIcon as={Rocket} />
    </Button>

    {data.map(item => {
      return <RowCard item={item} />;
    })}

    <Button variant='solid' onPress={() => setCount(count + 10)}>
      <ButtonText>
        Suma
      </ButtonText>
    </Button>


    <Button variant='solid' onPress={() => setCount(count - 10)}>
      <ButtonText>
        Resta
      </ButtonText>
    </Button>

    <Progress value={count} w={300} size="2xl">
      <ProgressFilledTrack />
    </Progress>

    {count >= 30 ? <Spinner size="small" /> : ''}

  </VStack>;
};

