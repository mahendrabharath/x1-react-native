import {Box, Button, Heading, Input, VStack, useToast} from 'native-base';
import {RootParameterList} from '../types/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {login} from '../service/user';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootParameterList,
  'Register'
>;
const Login = ({navigation}: {navigation: LoginScreenNavigationProp}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handlerLogin = async () => {
    const result = await login({email, password});
    console.log(result)
    if (result.status == 'SUCCESS') {
      toast.show({description: 'Logged in Successfully'});
      // setTimeout(() => navigation.navigate('Home'), 500);
    } else {
      console.log('---->> ', result);
      toast.show({description: 'Error with Login'});
    }
  };

  return (
    <Box
      bg={'#1679AB'}
      p="12"
      flex={1}
      _text={{fontSize: 'md', fontWeight: 'bold', color: 'white'}}>
      <Heading color={'#5DEBD7'} textAlign={'center'}>
        Login
      </Heading>
      <VStack space={4} alignItems="center">
        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          size="xl"
          variant="underlined"
          placeholder="E-Mail"
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          size="xl"
          variant="underlined"
          placeholder="Password"
          type="password"
        />
        <Button
          onPress={() => handlerLogin()}
          size="lg"
          _text={{fontWeight: 'extrabold', color: 'black'}}
          variant="outline">
          Login
        </Button>
        <Button
          size="lg"
          _text={{fontWeight: 'extrabold'}}
          onPress={() => navigation.navigate('Landing')}
          variant="outline">
          Back
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
