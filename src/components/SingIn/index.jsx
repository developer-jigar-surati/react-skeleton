import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const SingIn = () => {
  return (
    <React.Fragment>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <button type="button" className={`btn ${styles['singin-button']}`}>
          Sign In
        </button>
        <span className={styles['singup-link']}>
          <Link to="/singup">Sing Up</Link>
        </span>
      </form>
    </React.Fragment>
  );
}

export default SingIn;
