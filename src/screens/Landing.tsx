import {
  Box,
  Button,
  HStack,
  Heading,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootParameterList} from '../types/routes';

type LandingScreenNavigationProp = NativeStackNavigationProp<
  RootParameterList,
  'Landing'
>;

const Landing = ({navigation}: {navigation: LandingScreenNavigationProp}) => {
  // console.log('--->> ',navigation)
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['rgb(186, 230, 253)', 'rgb(96, 165, 250)'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      flex={1}
      justifyContent={'center'}
      _text={{fontSize: 'md', fontWeight: 'bold', color: 'white'}}>
      <Heading color={'trueGray.600'} fontSize={'9xl'} textAlign={'center'}>
        X1
      </Heading>
      <HStack justifyContent={'space-around'}>
        <Button size="lg" variant="solid" onPress={() => navigation.navigate('Register')}>
          Register
        </Button>
        <Button size="lg" _text={{fontWeight: 'extrabold'}} onPress={() => navigation.navigate('Login')} variant="outline">
          Login
        </Button>
      </HStack>
    </Box>
  );
};

export default Landing;
