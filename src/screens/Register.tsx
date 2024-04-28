import {Box, Button, Heading, Input, VStack, useToast} from 'native-base';
import {useState} from 'react';
import {TUsePayload} from '../types';
import {register} from '../service/user';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParameterList} from '../types/routes';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootParameterList,
  'Register'
>;
const Register = ({navigation}: {navigation: RegisterScreenNavigationProp}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmailName] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleRegister = async () => {
    const payload: TUsePayload = {
      firstName,
      lastName,
      email,
      password,
    };
    const res = await register(payload);
    if (res.status == 'SUCCESS') {
      toast.show({description: 'Saved Successfully'});
      setTimeout(() => navigation.navigate('Login'), 500);
    } else {
      console.log('---->> ', res);
      toast.show({description: 'Error Saving User'});
    }
  };

  return (
    <Box
      bg={'#1679AB'}
      p="12"
      flex={1}
      _text={{fontSize: 'md', fontWeight: 'bold', color: 'white'}}>
      <Heading color={'#5DEBD7'} textAlign={'center'}>
        Register
      </Heading>
      <VStack space={4} alignItems="center">
        <Input
          value={firstName}
          onChangeText={text => setFirstName(text)}
          size="xl"
          variant="underlined"
          placeholder="First Name"
        />
        <Input
          value={lastName}
          onChangeText={text => setLastName(text)}
          size="xl"
          variant="underlined"
          placeholder="Last Name"
        />
        <Input
          value={email}
          onChangeText={text => setEmailName(text)}
          size="xl"
          variant="underlined"
          placeholder="E-Mail"
        />
        <Input
          value={password}
          size="xl"
          variant="underlined"
          placeholder="Password"
          type="password"
          onChangeText={text => setPassword(text)}
        />
        <Button
          size="lg"
          _text={{fontWeight: 'extrabold', color: 'black'}}
          variant="outline"
          onPress={() => handleRegister()}>
          Register
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

export default Register;
