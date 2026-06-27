import "../styles/sign-up-form.css";

export default function SignUpForm() {
  return (
    <div className="sign-up-form">
      <form>
        <div>
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            placeholder="Full Name"
          />
        </div>
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
        <div>
          <label htmlFor="confirmed-password">Confirm Password</label>
          <input
            type="password"
            id="confirmed-password"
            name="confirmedPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div className="sign-up-form-button-container">
          <button type="submit">Create an account</button>
        </div>
      </form>
      <div className="sign-up-form-footer">
        <p>
          Already have an account? <a href="/sign-in">Sign In</a>
        </p>
      </div>
    </div>
  );
}
