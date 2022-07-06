import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SiderBar } from "../components/SideBar";

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' maxWidth={1400} my='6' mx='auto' px='6'>
        <SiderBar />
      </Flex>
    </Flex>
  )
}