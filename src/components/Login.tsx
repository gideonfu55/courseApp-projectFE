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

        <div className='center'>
          <section className="resetPW">
            <h5>Forgot your password?<button id="resetBtn">Reset</button></h5>
          </section>
        </div>

        <section className="createAccount">
          <h5>Create new account</h5>
          <p>
            <a href="register">Student</a>
          </p>
          <p>
            <a href="register">Course Creator</a>
          </p>
        </section>
      </form>
    </div>
  )

}

export default Login
