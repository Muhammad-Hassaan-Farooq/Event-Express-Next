import { Navbar, Nav, NavItem, Dropdown} from "react-bootstrap";
import Image from "next/image"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function NavbarComponent() {

  const token = Cookies.get("token");
  const decodetoken = jwtDecode(token);
  const router = useRouter();

  const handleRedirect = () => {
    if (decodetoken.role === 'organizer') {
      router.push('/orgDashboard');
    } else if (decodetoken.role === 'user') {
      router.push('/userDashboard');
    }
    else if (decodetoken.role === 'admin') {
      router.push('/adminDashboard');
    }
  };


  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="p-3">
      <Navbar.Brand onClick={handleRedirect} style={{ cursor: 'pointer' }}>Event Express</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto ">
          <NavItem>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </NavItem>
          <Nav.Item style={{ marginLeft: "68rem" }}>
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
