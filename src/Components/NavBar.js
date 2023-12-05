import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import instacartLogo from '../Images/Instacart.png'

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" style={{display: "flex", justifyContent: "space-between"}} >
                <Navbar.Brand style={{margin: "0px 0 0 10px"}} href="#home">
                    <img src={instacartLogo} alt="instacart-logo"
                        style={{ width: '100px', height: 'auto' }}
                    /> 
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder" }}>
                        <Nav.Link  style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
                        <Button style={{fontSize: "18px"}} variant="success">Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar