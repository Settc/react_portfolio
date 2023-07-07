import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>            
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
        </>
    );
};
 
export default Navbar;