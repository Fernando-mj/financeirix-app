function Login() {
  return (
    <div>
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem vindo</span>

            <div className="wrap-input">
              <input className="input" type="email" />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className="input" type="password" />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>

              <a className="txt2" href="#">
                criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
