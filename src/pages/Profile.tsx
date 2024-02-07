import { Box, Button, Image, Input, Stack } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Profile() {
  return (
    <Stack w={"full"} alignItems={"center"}>
      <Box
        w="400px"
        display={"flex"}
        flexDirection="column"
        bgColor="gray.700"
        rounded="xl"
        px="5"
        py="9"
      >
        <Box display="flex" justifyContent="center">
          <Image
            h="140px"
            w="auto"
            objectFit="cover"
            rounded="full"
            border="4px"
            borderColor="green.400"
          />
        </Box>
        <form>
          <Form
          >
            <Input
              type="text"
          
              id="fullname"
             
            />
          </Form>
          <Form
          
          >
            <Input
              type="text"
              id="username"
            />
          </Form>
            <Input
              type="text"
              id="bio"
            />
         
          <Box
            mt="20px"
            display="flex"
            justifyContent="space-between"
            maxW="11rem"
          >
            <Button type="reset">
              Cancel
            </Button>
            <Button type="submit"  colorScheme="green">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Stack>
  )
}
