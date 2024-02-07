import { Box, Button, Card, 
  CardHeader, Flex,
   Text, CardBody, FormControl,
    Input, Center, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/AC.svg";

export default function Login() {
       

  return (
      <Center alignItems={'center'} bg={'black'}>
      <Card variant={'outline'} boxShadow={'lg'} rounded={'lg'} bg={'black'} color={'white'} margin={'150'} padding={4} mb={'250px'} alignItems={'center'}>
        <Flex justify={'space-between'} >
          <Image w="50px" src={logo} width={'50px'}/>
          <Button 
          bg={'transparent'}
          p={2}
          rounded={'full'}>
          </Button >
        </Flex>
        <CardHeader textAlign={'center'}>
          <Text fontSize={'2xl'} fontWeight={'bold'}>Sign in to your account </Text>
          <Text fontSize={'sm'} color={'gray'}>Enter your details below</Text>
        </CardHeader>
        <CardBody>
          <FormControl isRequired>
            <Input placeholder="Email"
            name="email"
            id="email"
            mb={2}
            type="email"/>
            <Input 
            placeholder="password"
            name="password"
            id="password"
            mb={2}
            type="password"/>
            <Box display='flex' justifyContent={'flex-end'}>
              <Text>Forgot password?</Text>
            </Box>
            <NavLink to='/'>
              <Button w={'full'}
              mt={4}
              colorScheme="purple"
              >Login</Button>
              </NavLink>
          </FormControl>
        </CardBody>
        <NavLink to={'/register'}>
      <Text
      _hover={{cursor: 'pointer', textDecoration: 'underline'}}
      mt={2}
      fontSize={'small'}
      color={'white'}
      textAlign={'end'} mr={4}>Don't have an account yet? Sign up!</Text>
      </NavLink>
      </Card>
      </Center>
  )
}
