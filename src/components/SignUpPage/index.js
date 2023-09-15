import SignUpCard from "../SignUpCard";
import "./index.css";

const LoginPage = () => {
  const displayForm = () => (
    <section className="display-form">
      <h1 className="login-page-logo">eyesome</h1>
      <SignUpCard />
    </section>
  );

  return (
    <div className="login-page">
      <section className="login-page-image"></section>
      <section className="display-form-container">{displayForm()}</section>
    </div>
  );
};

export default LoginPage;
