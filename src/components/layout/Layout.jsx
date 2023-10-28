import { Link, Outlet } from 'react-router-dom';
import Links from '../../links/Links';
import style from './layout.module.css';


const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li className={style.li}>
              <Link to={Links.users} className={style.link}>
                Пользователи
              </Link>
            </li>
            <li className={style.li}>
              <Link to={Links.portfolio} className={style.link}>
                Портфолио
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
