import { Button, Card, 
  CardHeader, Flex,
   Text, CardBody, FormControl,
    Input, Center, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/AC.svg";

export default function Register() {
       

  return (
    // <Box m={0} p={0}>
      <Center alignItems={'center'} bg={'black'}>
      <Card variant={'outline'} p={4} boxShadow={'lg'} rounded={'lg'} bg={'black'} color={'white'} margin={'150'} padding={4} mb={'250px'} alignItems={'center'}>
        <Flex justify={'space-between'} >
          <Image w="50px" src={logo} width={'50px'}/>
          <Button 
          bg={'transparent'}
          p={2}
          rounded={'full'}>
          </Button >
        </Flex>
        <CardHeader textAlign={'center'}>
          <Text fontSize={'2xl'} fontWeight={'bold'}>Create your account </Text>
          <Text fontSize={'sm'} color={'gray'}>Enter your details below</Text>
        </CardHeader>
        <CardBody>
          <FormControl isRequired>
          <Input placeholder="Username"
            name="username"
            id="username"
            mb={2}
            type="email"/>
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
            <NavLink to={'/login'}>
              <Button w={'full'}
              mt={4}
              colorScheme="purple"
              >Create</Button>
              </NavLink>
          </FormControl>
        </CardBody>
        <NavLink to={'/login'}>
      <Text
      _hover={{cursor: 'pointer', textDecoration: 'underline'}}
      mt={2}
      fontSize={'small'}
      color={'white'}
      textAlign={'end'} mr={4}>Already have account? Login!</Text>
      </NavLink>
      </Card>
      </Center>
    // </Box>
  )
}
