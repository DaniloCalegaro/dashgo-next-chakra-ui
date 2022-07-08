
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Input } from '../components/Form/Input'
import { useRouter } from 'next/router';

type SignInFormData = { 
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState, formState: { errors }} = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const router = useRouter()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve,2000));
    
    console.log(values)
    router.push({
      pathname:'/dashboard',
      //query: { returnUrl: router.asPath }
    })
  }

  return (
    <Flex 
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
      flexDir='column'
    >
      <Box>
        <Text
          fontSize='4xl'
          fontWeight='bold'
          letterSpacing='tight'
          mb='5'
        >
          dashgo
          <Text 
            as='span' 
            ml='1' 
            color='pink.500'
          >
            .
          </Text>
        </Text>
      </Box>
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input 
            type='email' 
            label='E-mail' 
            error= {errors.email}
            {...register('email')}
          />
          <Input 
            type='password' 
            label='Senha' 
            error= {errors.password}
            {...register('password')}
          />
        </Stack>
        
        <Button 
          type='submit' 
          mt='6' 
          colorScheme='pink' 
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
