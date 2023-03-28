import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/navbar.style.css";
import './style/fontawesome/css/all.css';
import image1 from './style/images/qctlogo2.png'


class Navbar extends React.Component { 
  handleClick = (e) => {
    document.getElementsByClassName('modal-backdrop').remove();
    console.log("func fired");
  }
  
  render() {
    return (
      <nav className='navbarposition'>
      <header className='headercontact'>
        <div className='container-fluidcontact'>
          <div className='navb-logo'>
            <Link to="/">
              <img src={image1} alt="logo" />
            </Link>
          </div>
          <div className='navb-items d-none d-xl-flex collapse nav-links navbarfont' id='navbarSupportedContent'>
            <div className='itemcontact'>
              <Link to="/" className='acontact'>Home</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/attractions" className='acontact'>Attractions</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/addattractions" className='acontact'>Add Attraction</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/booking" className='acontact'>Booking</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/about" className='acontact'>About</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/contactus" className='acontact'>Contact Us</Link>
            </div>
          </div>

          <div className='mobile-toggler d-lg-none'>
              <a href="/" data-bs-toggle='modal' data-bs-target='#navbModal'>
                <i className='fa-solid fa-bars icontact'></i>
              </a>
          </div>

          <div className="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog burger-menu">
                    <div className="modal-content burger-menu">

                        <div className="modal-header">
                            <img src={image1} alt="Logo"/>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            
                            <div className="modal-line" onClick={() => this.handleClick()}>
                              <NavLink to="/" className='acontact' >Home</NavLink>
                            </div>

                            <div className="modal-line">
                            <NavLink to="/attractions" className='acontact'>Attractions</NavLink>
                            </div>

                            <div className="modal-line">
                            <NavLink to="/addattractions" className='acontact'>Add Attraction</NavLink>
                            </div>
                            
                            <div className="modal-line">
                            <NavLink to="/booking" className='acontact'>Booking</NavLink>
                            </div>

                            <div className="modal-line">
                            <NavLink to="/about" className='acontact'>About</NavLink>
                            </div>
                            
                            <div className="modal-line">
                            <NavLink to="/contactus" className='acontact'>Contact Us</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
      </nav>
    );
  }
}
export default Navbar;

