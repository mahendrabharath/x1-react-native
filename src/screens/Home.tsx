import {Box, Button, Heading, Image, Input, VStack} from 'native-base';

const Home = () => {
  return (
    <Box
      bg={'#1679AB'}
      p="12"
      flex={1}
      _text={{fontSize: 'md', fontWeight: 'bold', color: 'white'}}>
      <Heading color={'#5DEBD7'} textAlign={'center'}>
        Welcome, Abc
      </Heading>
    </Box>
  );
};

export default Home;
