import { Nav, NavLink, NavMenu} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/main" activeStyle>
                        Main
                    </NavLink>
                    <NavLink to="/work" activeStyle>
                        Work
                    </NavLink>
                    <NavLink to="/play" activeStyle>
                        Play
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;