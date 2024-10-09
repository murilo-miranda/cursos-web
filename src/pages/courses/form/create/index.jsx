import React, { useState } from "react";
import { 
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button
} from "@chakra-ui/react";

function CreateForm() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [endDate, setEndDate] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Title: ${title} & Description: ${description} & Data: ${endDate}`);
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Criar curso</Heading>
        </Box>

        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired >
              <FormLabel>Titulo</FormLabel>
              <Input type="text" placeholder="Titulo do curso" onChange={event => setTitle(event.currentTarget.value)}/>
            </FormControl>
            <FormControl isRequired >
              <FormLabel>Descricao do curso</FormLabel>
              <Textarea placeholder="Titulo do curso" onChange={event => setDescription(event.currentTarget.value)}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Data de termino</FormLabel>
              <Input type="date" onChange={event => setEndDate(event.currentTarget.value)}></Input>
            </FormControl>
          </form>
          <Button type="submit" width="full" mt={4} onClick={handleSubmit}>
            Criar
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default CreateForm;