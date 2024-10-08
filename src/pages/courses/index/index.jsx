import { useEffect, useState } from "react";
import Course from "../../../components/course";
import { Heading } from "@chakra-ui/react";

function IndexPage() {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/course", {
			method: "GET",
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				setCourses(data)
			}) 
			.catch(erro => console.log(erro))
	}, [])

	return (
		<>
			<Heading>
				Cursos disponiveis
			</Heading>
			
			{courses?.data?.map((course) => (
				<Course courseData={course}/>					
			))}
		</>
	);
}

export default IndexPage;