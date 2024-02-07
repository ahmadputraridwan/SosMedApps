import {
    Avatar,
    Card,
    Flex,
    Heading,
    Text,
    Button
  } from "@chakra-ui/react";
  import React from "react";
  
  const Follow: React.FC = () => {
    return (
      <Card m={4} gap={'5'}>
         <Flex
        borderRadius="20px"
        px="20px"
        pt="10px"
        direction="column"
        h="fit-content"
      >
        <Text my={1} fontSize={18} fontWeight="bold">
          Suggested for you
        </Text>
        <Flex alignItems={'center'} gap={3} justifyContent={'space-between'}>
            <Flex gap={2}>
            <Avatar src="/img/AC.jpeg"/>
            
            <Flex flexDirection='column' gap={1}>
                <Heading size={'m'}>Akademi Crypto</Heading>
                <Text mt={'-2'}>Akademi Crypto</Text>
            </Flex>
            </Flex>
            <Button
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px"
            my="3px"
            h="30px"
            rounded="16px"
          >
            Follow
          </Button>
        </Flex>
        <Flex alignItems={'center'} gap={3} justifyContent={'space-between'}>
            <Flex gap={2}>
            <Avatar src="https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg?auto=compress&cs=tinysrgb&w=800"/>
            
            <Flex flexDirection='column' gap={1}>
                <Heading size={'m'}>Etherium</Heading>
                <Text mt={'-2'}>Etherium Network</Text>
            </Flex>
            </Flex>
            <Button
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px"
            my="3px"
            h="30px"
            rounded="16px"
          >
            Follow
          </Button>
        </Flex>
        <Flex alignItems={'center'} gap={3} justifyContent={'space-between'}>
            <Flex gap={2}>
            <Avatar src="https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            
            <Flex flexDirection='column' gap={1}>
                <Heading size={'m'}>Manta</Heading>
                <Text mt={'-2'}>Manta Network</Text>
            </Flex>
            </Flex>
            <Button
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px"
            my="3px"
            h="30px"
            rounded="16px"
          >
            Follow
          </Button>
        </Flex>
        <Flex alignItems={'center'} gap={3} justifyContent={'space-between'}>
            <Flex gap={2}>
            <Avatar src="https://images.pexels.com/photos/5980585/pexels-photo-5980585.jpeg?auto=compress&cs=tinysrgb&w=800"/>
            
            <Flex flexDirection='column' gap={1}>
                <Heading size={'m'}>Bitcoin</Heading>
                <Text mt={'-2'}>Bitcoin Halving</Text>
            </Flex>
            </Flex>
            <Button
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px"
            my="3px"
            h="30px"
            rounded="16px"
          >
            Follow
          </Button>
        </Flex>
       
      </Flex>
          
      </Card>
    );
  };
  
  export default Follow;
  