import React from 'react'

const Login = () => {
  return (
    <div>
      <h1 className="">Account Login</h1>

      <form>
        <section className="email">
          <p>Email</p>
          <input typeof="text" required></input>
        </section>

        <section className="Password">
          <p>Password</p>
          <input typeof="text" required></input>
        </section>

        <section className="loginButton">
          <button>Login</button>
        </section>

        <section className="resetPW">
          <p>Forgot your password?</p>
          <button>Reset</button>
        </section>

        <section className="createAccount">
          <h3>Create new account</h3>
          <p>
            <a href="">Student</a>
          </p>
          <p>
            <a href="">Course Creator</a>
          </p>
        </section>
      </form>
    </div>
  );

}

export default Login
