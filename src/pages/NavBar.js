import React, {  useState } from 'react';
import logo from '../../src/images/logo.svg'
import user from '../../src/images/user.svg'
import purchasing from '../../src/images/purchasing.svg'
import cartNavBar from '../../src/images/cartNavBar.svg'
import exit from '../../src/images/exit.svg'
import lista from '../../src/images/lista.svg'
import { useNavigate } from 'react-router-dom';
import FavoritesSidebar from '../components/FavoritesSidebar';

const NavBar = () => {

  const logout= ()=>localStorage.setItem("token","")


 const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const token = localStorage.getItem("token");

    if (token) {
      setShow(true);
    } else {
      navigate("/login");
    }
  };

    return (

<div >

<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <a className="navbar" href="#/"> <img src={logo}  alt="" width="150" height="60" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span><img src={lista} alt="" /> </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div  className="iconos">
      <ul className="navbar-nav">

      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/#/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={user} alt="" />
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            
            <a  href="/#/login/"><button className="button"><img src={user} alt="" /> </button></a>
            <a href="/#/"><button className="button" onClick={logout}> <img src={exit} alt="" /> </button></a>
          </ul>
        </li>
        <li className="nav-item">
        <a href="/#/purchases"><button className="button"> <img src={purchasing} alt="" /> </button></a>
        </li>
        <li className="nav-item">
         <img src={cartNavBar} alt="" className="button" onClick={handleShow}  /> 
        </li>
        
      </ul>
        </div>
    </div>
  </div>
</nav>


<FavoritesSidebar show={show} handleClose={handleClose} />
</div>


    );
};

export default NavBar;