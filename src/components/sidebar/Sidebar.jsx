import {Link, NavLink} from 'react-router-dom'
import {sideBarMenu, socialIcons} from '../../data/data'
import './sidebar.scss'

const Sidebar = ()=>{
    return (
      <aside className="aside">
        <div className="aside-wrapper">
          <Link to="/" className="logo-section">
            <h1 className="sidebar__logo">S</h1>
            <span class="switch__color">Sakshi</span>
          </Link>
          <ul className="side-link">
            {sideBarMenu.map((link, index) => {
              const { text, url, icon } = link;
              return (
                <li key={index}>
                  <NavLink
                    to={url}
                    className={({ isActive }) => {
                      return isActive
                        ? "nav__links active-links"
                        : "nav__links";
                    }}
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="social-icon">
            {socialIcons.map((icons, index) => {
              return (
                <a href={icons.url} key={index}>
                  {icons.icon}
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    );
}

export default Sidebar;