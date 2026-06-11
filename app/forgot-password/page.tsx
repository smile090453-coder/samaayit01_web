export default function About() {
  return (
   <div className="auth-page">
      <form className= "auth-card">
      <h2> Forgot password </h2>
      <input
        placeholder="Enter Your old Password"
        type="text"
      />
      <input
        placeholder="Entr Your New Password"
        type="password"
      />
      <input
        placeholder="Confirm Your Nem Password"
        type="password"
      />
      <button>Register</button>
      </form>
    </div>
  );
}