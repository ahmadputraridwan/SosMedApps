import {
  Button,
  Card,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const MyProfile: React.FC = () => {
  const boxBg = useColorModeValue("white !important", "#111c44 !important");
  const mainText = useColorModeValue("gray.800", "white");
  const secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Card m={4}>
      <Flex
        borderRadius="20px"
        bg={boxBg}
        px="20px"
        pt="10px"
        direction="column"
        h="fit-content"
      >
        <Text my={1} fontSize={18} fontWeight="bold">
          My Profile
        </Text>
        <Image
          src="https://i.ibb.co/xmP2pS6/Profile.png"
          maxW="100%"
          borderRadius="20px"
        />
        <Flex w="full">
          <Flex flexDirection="column" mb="30px" w="full" px={4}>
            <Image
              src="/img/mario.png"
              border="5px solid red"
              borderColor={boxBg}
              width="68px"
              height="68px"
              mt="-38px"
              borderRadius="50%"
            />
            <Text fontWeight="600" color={mainText} fontSize="xl">
              ✨APutraRidwan✨
            </Text>
            <Text color={secondaryText} fontSize="sm" fontWeight="500">
              @insomniatic
            </Text>
            <Text fontSize="13px">live in the now, not the pas was or will be</Text>
            <Flex gap={4}>
              <Flex alignItems="center" gap="2px">
                <Text fontWeight="bold">2</Text>
                <Text fontSize="14px">Following</Text>
              </Flex>

              <Flex alignItems="center" gap="2px">
                <Text fontWeight="bold">23.445.555</Text>
                <Text fontSize="14px" color={mainText}>
                  Followers
                </Text>
              </Flex>
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
            Edit Profile
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default MyProfile;
