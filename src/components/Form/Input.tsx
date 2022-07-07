import { FormControl, FormLabel, forwardRef, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
       { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>} {/*apenas se label existir */}

      <ChakraInput 
        name={name} 
        id={name} 
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{
          bgColor:'gray.900'
        }}
        size='lg'
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
}

export const Input = forwardRef(InputBase)