import React from 'react'

const Login = () => {
  return (
    <div className="center">
      <form>
        <h1 className="">Account Login</h1>
        <section className="email">
          <h5>Email</h5>
          <input typeof="text" required></input>
        </section>

        <section className="Password">
          <h5>Password</h5>
          <input typeof="text" required></input>
        </section>

        <section className="loginButton">
          <button id="loginBtn">Login</button>
        </section>

        <section className="resetPW">
          <h5>Forgot your password?</h5>
          <button id="resetBtn">Reset</button>
        </section>

        <section className="createAccount">
          <h5>Create new account</h5>
          <p>
            <a href="">Student</a>
          </p>
          <p>
            <a href="">Course Creator</a>
          </p>
        </section>
      </form>
    </div>
  )

}

export default Login
