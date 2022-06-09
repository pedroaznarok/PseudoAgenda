import { Container, Nav, Navbar } from "react-bootstrap";
function Navigation() {
return(
    <>
    <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/agenda">Agenda</Nav.Link>
                    <Nav.Link href="/formulario">Formulario</Nav.Link>
                    <Nav.Link href="/tabla">Tabla</Nav.Link>
                </Nav>
            </Container>
        </Navbar><br />
    </>
  );
}
export default Navigation;