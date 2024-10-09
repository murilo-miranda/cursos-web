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
import { useLocation } from "react-router-dom";

function EditForm() {
  let { state } = useLocation();
  const [newTitle, setTitle] = useState(state.title);
  const [newDescription, setDescription] = useState(state.description);
  const [newEndDate, setEndDate] = useState(state.endDate);

  const handleSubmit = event => {
    event.preventDefault();

    fetch(`http://localhost:3000/course/${state.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        title: newTitle,
        description: newDescription,
        end_date: newEndDate
      })
    })
      .then(() => alert('Editado com sucesso'))
      .then(() => window.location.href = "/")
      .catch(error => alert(error))
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2,'0');
    const month = (date.getMonth() + 1).toString().padStart(2,'0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`
  }

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Editar curso: {state.title} </Heading>
        </Box>

        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired >
              <FormLabel>Titulo</FormLabel>
              <Input type="text" placeholder={state.title} onChange={event => setTitle(event.currentTarget.value)}/>
            </FormControl>
            <FormControl isRequired >
              <FormLabel>Descricao do curso</FormLabel>
              <Textarea placeholder={state.description} onChange={event => setDescription(event.currentTarget.value)}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Data de termino</FormLabel>
              <Input type="text" placeholder={formatDate(state.endDate)} onFocus={(event) => event.target.type="date"} onChange={event => setEndDate(event.currentTarget.value)}></Input>
            </FormControl>
          </form>
          <Button type="submit" width="full" mt={4} onClick={handleSubmit}>
            Editar
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default EditForm;