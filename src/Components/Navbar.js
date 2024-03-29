import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
    
    

  return (

    <>
  
  <div className='nav container-flued sticky-top'>
    <div className='container'>
      <div className=" navbar sticky-top" >
        <div className="col-6">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                <Link className='linku' to='/'><h1 className='logoname'>JUSTSEARCH</h1></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" sudiv col-6">
         
          <div className="btn warning tog navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <div><img className='burgrr' src='https://res.cloudinary.com/dgvvfn1gf/image/upload/v1678133032/ss_akvziu.png' /></div>
          </div>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <a className='linku' to='/'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  HOME
                </li>
                </a>
                <a className='linku' to='/Category'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
               CATEGORY
                </li>
                </a>
                <a className='linku' to='/about'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  ABOUT US
                </li>
                </a>
                <a className='linku' to='/offer'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  OFFER
                </li>
                </a>
                <a className='linku' to='/team'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  TEAM
                </li>
                </a>
                <a className='linku' to='/contactus'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  CONTACT US
                </li>
                </a>
                <a className='linku' to='/pay'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  SELL SERVISES
                </li>
                </a>
               <Link className='linku' to='/dash'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  DASHBOARD
                </li>
                </Link>
                
               <a className='linku' to='/' > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  SINGOUT
                </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </>
   

  )
}

export default Navbar
