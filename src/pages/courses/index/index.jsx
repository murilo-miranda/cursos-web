import { useEffect, useState } from "react";

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
			<h1>Cursos disponiveis</h1>
			{courses?.data?.map((course) => (
				<>
						<img
						src="https://cdn.pixabay.com/photo/2023/01/10/03/57/digits-7708860_1280.jpg"
						alt="Foto"
						height="150px"
					/>
					<p> {course.attributes.title} </p>
					<p> {course.attributes.description} </p>
				</>
			))}
		</>
	);
}

export default IndexPage;