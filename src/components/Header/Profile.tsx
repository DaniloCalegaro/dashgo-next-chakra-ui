import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile({ showProfileData = true }) {
  return (
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Danilo Calegaro</Text>
          <Text color='gray.300' fontSize='small'>danilo.calegaro@hotmail.com</Text>
        </Box>
      )}

      <Avatar size='md' name='Danilo Calegaro' src='https://github.com/DaniloCalegaro.png' />
    </Flex>
  );
}