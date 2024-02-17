import { Link } from "react-router-dom";

const NavLink = ({ link }) => {


 return (
  <Link to={link.route}>
   {link.label}
  </Link>
 );
}

export default NavLink;
