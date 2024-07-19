import React from 'react';
import './Popup.css';

const SignupPopup = ({ closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Sign Up</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          <label>Email:</label>
          <input type="email" required />
          <label>Password:</label>
          <input type="password" required />
          <button type="submit">Sign Up</button>
        </form>
        <button className="close-btn" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default SignupPopup;
