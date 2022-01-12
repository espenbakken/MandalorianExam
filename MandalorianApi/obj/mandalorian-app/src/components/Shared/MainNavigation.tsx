import { FC } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './MainNavigation.css';
import './font.css';


const MainNavigation:FC = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container className="justify-content-center">
                
                <Nav className="justify-content-center">
                    <Navbar.Brand></Navbar.Brand>
                    <Nav.Link className="Nav-Links" id="Nav-Home" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="Nav-Links" id="Nav-Characters" as={Link} to="/characters">Characters</Nav.Link>
                    <Navbar.Brand id="Nav-Title" as={Link} to="/"> The Mandalorian</Navbar.Brand>
                    <NavDropdown className="Nav-Links" id="Nav-DropDown" title="Seasons">
                        <NavDropdown.Item  id="Nav-S1"  as={Link} to="/season1">Season 1</NavDropdown.Item>
                        <NavDropdown.Item id="Nav-S2" as={Link} to="/season2">Season 2</NavDropdown.Item>
                        <NavDropdown.Item id="Nav-S2" as={Link} to="/allEpisodes">All Episodes</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="Nav-Links" id="Nav-Actors" as={Link} to="/actors">Actors</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNavigation;