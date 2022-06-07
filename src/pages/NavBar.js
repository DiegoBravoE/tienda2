import React from 'react';
import shopexpress from '../../src/images/shopexpress.svg'
import user from '../../src/images/user.svg'
import purchasing from '../../src/images/purchasing.svg'
import cartNavBar from '../../src/images/cartNavBar.svg'

const NavBar = () => {
    return (
        <div className="nav-bar">
        <nav >
          <div className="container-navbar">
            <a className="navbar" href="#/">
              <img
                src={shopexpress}
                alt=""
                width="150"
                height="60"
              />
              </a>
              <div className="iconos">

          <div >
            <a href="/#/login/"><button className="button"><img src={user} alt="" /> </button></a>
            <a href="/#/purchases"><button className="button"> <img src={purchasing} alt="" /> </button></a>
            <a href="/#/"><button className="button"> <img src={cartNavBar} alt="" /> </button></a>
            
          </div>
              </div>
            
          </div>
        </nav>
      </div>
    );
};

export default NavBar;