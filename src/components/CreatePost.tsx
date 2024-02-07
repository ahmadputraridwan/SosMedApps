import { Heading,
    Card,
    Box,
    Flex,
    Avatar,
    Input,
    Button,
 } from '@chakra-ui/react'
import { LuImagePlus } from 'react-icons/lu'

export default function CreatePost() {
  return (
   <Card p={4}>
    <Box mt={2} mb={6}>
        <Heading>Home</Heading>
    </Box>
    <Flex gap={4} alignItems='center'>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo"/>
        <Input border={'none'} placeholder='What is happening?!'/>
        <Button bg='white'>
            <LuImagePlus color='purple' size={35}/>
        </Button>
        <Button bg='purple' textColor='white' rounded={15}>
            Tweet
        </Button>
    </Flex>
   </Card>
  )
}
