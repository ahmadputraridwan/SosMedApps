import {
    Card,
    Flex,
    Text,
    Image
  } from "@chakra-ui/react";
  import { FaGithubAlt } from "react-icons/fa6";
  import { FaLinkedin, FaFacebook } from "react-icons/fa";
  import React from "react";
  import logo from '../assets/AC.svg'
  
  const Develop: React.FC = () => {
    return (
      <Card m={4} bg={'black'} color={'white'}>
        <Flex
          borderRadius="20px"
          px="20px"
          pt="10px"
          h="fit-content"
          gap={2}
          alignItems='center'
        >
          <Text my={1} fontSize={18} fontWeight="bold">
            Develop by A Putra Ridwan . 
          </Text>
        <Flex mt={'1'} gap={2}>
          <FaGithubAlt />
          <FaLinkedin />
          <FaFacebook />
          </Flex>
        </Flex>
        <Flex flexDirection='row' gap={1}>
            <Text fontSize={'10px'} textColor='WhiteText' ml={'25px'}> Powered 
                </Text>
                <Image width={'20px'}
                height='20px'
                src={logo}
                alt="logo"/>
                <Text fontSize='10px' textColor='WhiteText'>Crypto Indonesia . #1Akademi Crypto</Text>
        </Flex>
      </Card>
    );
  };
  
  export default Develop;
  