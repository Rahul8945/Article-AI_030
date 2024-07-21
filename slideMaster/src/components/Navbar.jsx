import React, { useState } from 'react';
import openimage from '../assets/open.png';
import { NavLink, useNavigate} from 'react-router-dom';
import Login from '../credentials/LoginPopup';
import { useAuth } from '../context/AuthContext';
import Signup from '../credentials/SignupPopup';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { user } = useAuth();
  const history = useNavigate();

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    if (user) {
      setShowLogin(true);
    } else {
      setShowSignup(true);
    }
  };

  const handleCreateClick = () => {
    if (user) {
      history.push('/create');
    } else {
      setShowLogin(true);
    }
  };

  let links = [
    { to: '/', name: 'Home' },
    { to: '#', name: 'Create Presentation', onClick: handleCreateClick },
    { to: '/saved', name: 'Saved' },
  ];

  return (
    <div className={`navbar ${showLogin || showSignup ? 'blur' : ''}`}>
      <img src={openimage} alt="Logo" />
      <div className="link">
        {links.map((ele) => (
          <NavLink key={ele.to} to={ele.to} className="navlink" onClick={ele.onClick}>
            {ele.name}
          </NavLink>
        ))}
      </div>
      <div className="sign">
        <button onClick={handleSignupClick}>Sign up</button>
        <button onClick={() => setShowLogin(true)}>Log In</button>
      </div>

      {(showLogin || showSignup) && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            {showLogin && <Login />}
            {showSignup && <Signup />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
