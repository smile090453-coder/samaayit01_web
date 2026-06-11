export default function About() {
  return (
    <div className="auth-page">
      <form className= "auth-card">
      <h2> เข้าสู่ระบบ </h2>
      <input
        placeholder="Name"
        type="text"
      />

      <input
        placeholder="Password"
        type="password"
      />
      <button>Register</button>
      </form>
    </div>
  );
}