import './Nav.css';
import { routes } from '../routes';

function Nav() {
  return (
    <div className='nav-container'>
      <span className='logo-container'>Logo</span>

      <ul className='links-container'>
        {routes.map((route, i) => {
          return <li key={i}><a className='link' href={route.path}>{route.name}</a></li>
        }
        )}
      </ul>
    </div>
  );
}

export default Nav;
