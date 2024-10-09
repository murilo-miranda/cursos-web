import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Breadcrumb separator='-'>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='course/create'>Criar curso</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Navbar;