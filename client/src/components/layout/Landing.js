import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Note Keeper</h1>
          <p className="lead">
            Store all your notes in one place!
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary mx-1">Sign Up</Link>
            <Link to="/login" className="btn btn-secondary mx-1">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing; 