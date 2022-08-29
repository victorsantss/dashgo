import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Santos</Text>
          <Text color="gray.300" fontSize="small"
          >
            victords895@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Victor Santos" src="https://github.com/victorsantss.png" />
    </Flex>
  )
}