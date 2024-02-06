import { Box, Flex } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import CardNew from '../components/CardNew'
import MyProfile from '../components/MyProfile'
import CreatePost from '../components/CreatePost'

export default function Home() {
  return (
    <Flex w='full'>
      <Box w='20%' display={{base: 'none', md: 'block'}}>
        <Sidebar/>
      </Box>
      <Box w={{base: '100%', md:'50%' }}
      px={{base: '10px', md:'0px'}}
      py={2}>
        <CreatePost />
        <CardNew/>
      </Box>
      <Box w={'30%'} display={{base: 'none', md:'block'}}>
        <MyProfile />
      </Box>
    </Flex>
  )
}
