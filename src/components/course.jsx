import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Text } from "@chakra-ui/react";

const handleDeleteCourse = (id) => {
  fetch(`http://localhost:3000/course/${id}`, {
    method: "DELETE",
  })
    .then(() => window.location.reload())
    .catch(erro => console.log(erro))
}

function Course({courseData}) {
  return (
    <Card maxW='sm' >
      <CardBody>
        <img
          src="https://cdn.pixabay.com/photo/2023/01/10/03/57/digits-7708860_1280.jpg"
          alt="Foto"
          height="150px"
          />
        <Heading>
          {courseData.attributes.title}
        </Heading>
        <Text>
          {courseData.attributes.description}
        </Text>
      </CardBody>

      <CardFooter>
        <ButtonGroup>
          <Button>
            Editar
          </Button>

          <Button onClick={() => handleDeleteCourse(courseData.id)}>
            Deletar
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Course;