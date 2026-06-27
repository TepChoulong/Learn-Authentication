import React from "react";

import "../styles/sign-in-form.css";

export default function SignInForm() {
  return (
    <div className="sign-in-form">
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div className="sign-in-form-button-container">
          <button type="submit">Sign in</button>
        </div>
      </form>
      <div className="sign-in-form-footer">
        <p>
          Don't have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
