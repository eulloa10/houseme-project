
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import './NavBar.css';
import LoginFormModal from '../../LoginFormModal';
import SignUpFormModal from '../../SignUpFormModal';
import LoginForm from '../../LoginFormModal/LoginForm';
import * as sessionActions from '../../../store/session';
import HouseLetter from '../../../assets/house_letter.png';
import ProfileDefaultIcon from '../../../assets/profile-default-icon.svg';
import { Modal } from '../../../context/Modal';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [showSessionOptions, setShowSessionOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sellRedirect, setSellRedirect] = useState(true);


  const demoLogin = async () => {
    await dispatch(sessionActions.login("demo@aa.io", "password"));
  };

  const sessionOptionsHandler = () => {
    setShowSessionOptions(!showSessionOptions);
  }

  return (
    <>
    <nav>
      <ul className='splash-nav-all'>
        <ul className="splash-nav-other-links">
          <li className="splash-nav">
            <NavLink to='/listings' exact={true} activeClassName='active' className="nav-bar-link">
              Buy
            </NavLink>
          </li>
          {user ? (
             <li className="splash-nav sell-link">
             <NavLink to='/me/listings' exact={true} activeClassName='active' className="nav-bar-link">
               Sell
             </NavLink>
           </li>
          ) : (
            <li className="splash-nav sell-link">
            {/* <NavLink to='/listings' exact={true} activeClassName='active' onClick={() => setShowModal(true)}>
              Sell
            </NavLink> */}
            <LoginFormModal sellNavRedirect={true}/>
            </li>
          )
          }

        </ul>
        <ul className="splash-nav-home-link">
          <li className="splash-nav home-link">
              <NavLink to='/' exact={true} activeClassName='active'>
                <img className="house-letter-logo" src={HouseLetter} alt="logo"/>
              </NavLink>
            </li>
        </ul>
        <ul className="splash-nav-auth-links">
          {!user && (
            <>
              <li className="splash-nav">
                <LoginFormModal/>
              </li>
              <li className="splash-nav">
                <SignUpFormModal />
              </li>
              <li className="splash-nav nav-bar-link demo-option" onClick={demoLogin}>
                  Demo
              </li>
            </>
          )}
          { user && (
            <img className="prof-icon" src={ProfileDefaultIcon} alt="prof-icon" onClick={sessionOptionsHandler} />
            )
          }
          {user && showSessionOptions && (
              <ul className="session-options">
                <li className="session-items">
                  <Link to="/me/listings" className="session-link">
                    My Listings
                  </Link>
                </li>
                <li className="session-items">
                  <NavLink to="/me/tours" className="session-link">
                    My Tours
                  </NavLink>
                </li>
                <li className='session-logout-btn'>
                  <LogoutButton />
                </li>
              </ul>
          )}
        </ul>
      </ul>
    </nav>
    {showModal && (
        <Modal onClose={() => setShowModal(false)} children= {<LoginFormModal sellRedirect={sellRedirect}/>}>
        </Modal>
      )}
    </>
  );
}

export default NavBar;
