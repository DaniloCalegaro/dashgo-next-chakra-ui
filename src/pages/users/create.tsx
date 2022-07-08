import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SiderBar } from "../../components/SideBar";

type CreateNewUserData = {
  name: string; 
  email: string;
  password: string;
  password_confirmation: string;
}

const createNewUserSchema = yup.object().shape({
  name:  yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(5, 'Deve ser maior que 5 caracteres'),
  password_confirmation: yup.string().required('Senha obrigatória').oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState, formState: { errors }} = useForm<CreateNewUserData>({
    resolver: yupResolver(createNewUserSchema)
  })

  const handleCreateNewUser: SubmitHandler<CreateNewUserData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve,2000));

    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w='100%' maxWidth={1400} my='6' mx='auto' px='6'>
        <SiderBar />

        <Box 
          as='form' 
          onSubmit={handleSubmit(handleCreateNewUser)} 
          flex='1' 
          borderRadius={8}
          bg='gray.800' 
          p={['6', '8']}
        >
          <Heading size='lg'>Criar Usuário</Heading>

          <Divider my='6' borderColor='gray.700'/>

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input label='Nome Completo' error= {errors.name} {...register('name')}/>
              <Input type='email' label='E-mail' error= {errors.email} {...register('email')}/>
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input type='password' label='Senha' error= {errors.password} {...register('password')}/>
              <Input type='password' label='Confirmação da senha' error= {errors.password_confirmation} {...register('password_confirmation')}/>
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
            <Link href='/users' passHref>
              <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
            </Link>
              <Button type='submit' colorScheme='pink' isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}