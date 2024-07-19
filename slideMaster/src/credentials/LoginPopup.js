import React from 'react';
import './Popup.css';

const LoginPopup = ({ closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" required />
          <label>Password:</label>
          <input type="password" required />
          <button type="submit">Login</button>
        </form>
        <button className="close-btn" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default LoginPopup;
