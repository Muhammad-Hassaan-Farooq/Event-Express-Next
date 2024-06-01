import { Navbar, Nav, NavItem, Dropdown } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import logo from "../assets/logo.png";
import { jwtDecode } from "jwt-decode";
import "./navbar.css";

function NavbarComponent() {
  const router = useRouter();

  const handleRedirect = () => {
    const token = Cookies.get("token");
    const decodetoken = jwtDecode(token);
    if (decodetoken.role === "organizer") {
      router.push("/orgDashboard");
    } else if (decodetoken.role === "user") {
      router.push("/userDashboard");
    } else if (decodetoken.role === "admin") {
      router.push("/adminDashboard");
    }
  };

  return (
    <Navbar expand="lg" className="p-3 navbar-main" fixed="top">
      <Navbar.Brand onClick={handleRedirect} style={{ cursor: "pointer" }}>
        <Image
          src={logo}
          height={35}
          width={50}
          className="align-center inline-block"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="me-auto ">
          <Nav.Item>
            <Nav.Link href="/signup">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Dropdown align="end">
              <Dropdown.Toggle as={Nav.Link} id="dropdown-custom-components">
                <Image src="/user.png" height={30} width={30} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/profile">View Profile</Dropdown.Item>
                <Dropdown.Item href="/signup">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
