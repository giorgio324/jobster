import { NavLink } from 'react-router-dom';
import links from '../utils/links';
const NavLinks = ({ toggle }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { id, path, text, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            onClick={toggle}
            key={id}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
