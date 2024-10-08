import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Text } from "@chakra-ui/react";

function Course({course}) {
  return (
    <Card maxW='sm' >
      <CardBody>
        <img
          src="https://cdn.pixabay.com/photo/2023/01/10/03/57/digits-7708860_1280.jpg"
          alt="Foto"
          height="150px"
          />
        <Heading>
          {course.title}
        </Heading>
        <Text>
          {course.description}
        </Text>
      </CardBody>

      <CardFooter>
        <ButtonGroup>
          <Button>
            Editar
          </Button>

          <Button>
            Deletar
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Course;