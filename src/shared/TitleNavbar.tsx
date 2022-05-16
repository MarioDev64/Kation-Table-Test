import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { MdModeEditOutline } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";

const TitleNavbar = (): JSX.Element => {
	return (
		<Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#"><span className="BrandIcon"><BiUser /></span> NOMBRE CLIENTE</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Button variant="outline"><MdModeEditOutline /> Editar</Button>
                    <Button variant="outline"><IoCloseOutline /></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
	);
};

export default TitleNavbar;