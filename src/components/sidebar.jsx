import React from "react";
import routes from "../routes/client"
import { useLocation } from "react-router";

const Sidebar = (props) => {
  const location = useLocation();
  const {setIsOpen} = props;
  const sidebar = React.useRef(null)
  const closeBtn = React.useRef(null)
  // const searchBtn = React.useRef(null)

  const onCloseClick = () => {
    setIsOpen(!sidebar.current.classList.contains("open"))
    sidebar.current.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  }

  // const onSearchClick = () => {
  //   sidebar.current.classList.toggle("open");
  //   menuBtnChange();
  // }

  // following are the code to change sidebar button(optional)
  const menuBtnChange = () => {
    if (sidebar.current.classList.contains("open")) {
      closeBtn.current.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
      closeBtn.current.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
  }

  const isActive = (location, path) => {
    return location.pathname.startsWith(path)
  }

  return (
    <div className="sidebar" ref={sidebar}>
      <div className="logo-details">
        <i className='bx bx-restaurant icon icon-color'></i>
        <div className="logo_name">POS</div>
        <i className='bx bx-menu icon-color' id="btn" ref={closeBtn} onClick={onCloseClick}></i>
      </div>
      <ul className="nav-list">
        {/* <li>
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li> */}
        {
          routes.map((route, index) => {
            return (
              <li key={index}>
                <a
                  href={route.path}
                  className={isActive(location, route.path) ? "sidebar-item-active" : ""}
                >
                  <i className={'icon-color ' + route.icon}></i>
                  <span className='links_name'>{route.name}</span>
                </a>
                <span className="tooltip">{route.name}</span>

              </li>
            )
          })
        }

        <li className="profile">
          <div className="profile-details">
            <div className="name_job">
              <div className="name">Quang Long</div>
              <div className="job">lazy</div>
            </div>
          </div>
          <i className='bx bx-log-out icon-color' id="log_out"></i>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
