import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Login: React.FC = () => {
  const [usernameOrEmail, checkEmail] = useState('')
  const [password, checkPassword] = useState('')

  const [currentErrors, setCurrentErrors] = useState([])

  // Handling the email check
  const handleEmailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkEmail(e.target.value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let formData = {
      usernameOrEmail: usernameOrEmail,
      password: password
    }
  }

  const loginSuccess = () => {
    toast('Login Successful!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  };

    return (
    <main className='login'>
      <div className="center">
        <form className='loginForm' onSubmit={handleSubmit}>
          <header className="accountLogin"><h1>Account Login</h1></header>
          <section className="email">
            <h5>Email</h5>
            <input typeof="text" required></input>
          </section>

          <section className="password">
            <h5>Password</h5>
            <input typeof="text" required></input>
          </section>

          <section className="loginButton">
            <div className='center'>
              <button id="loginBtn" 
                // onSubmit={e => {
                // handleSubmit(e);
                // loginSuccess();
                // }}
                onClick={loginSuccess}
              >
                Login
              </button>
            </div>
          </section>

          <div className='center'>
            <section className="resetPW">
              <h6>Forgot your password?<button id="resetBtn">Reset</button></h6>
            </section>
          </div>

          <section className="createAccount">
            <h6>Create new account</h6>
            <p><a href="register">Student</a></p>
            <p><a href="register">Course Creator</a></p>
          </section>
        </form>
        <ToastContainer
          style={{fontSize: 13}}
        />
      </div>
    </main>
  )
}

export default Login
