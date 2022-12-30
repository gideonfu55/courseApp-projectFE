import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { loginValidation } from '../../Validations/LoginValidation'

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [validationError, setValidationError] = useState({})
    const [errorMessages, setErrorMessages] = useState([])

    // Login success message:
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
    }

    // Handling the email check
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        let formData = {
            email: email,
            password: password,
        }

        const validateForm = await loginValidation
            .validate(formData, { abortEarly: false })
            .then((responseData) => {
                setErrorMessages([])
                loginSuccess()
            })
            .catch((err) => {
                console.log(err.errors)
                console.log(err.validationError)
                setValidationError(err.value)
                setErrorMessages(err.errors)
            })
    }

    return (
        <main className="login">
            <div className="center">
                <form className="loginForm" onSubmit={handleSubmit}>
                    <header className="accountLogin">
                        <h1>Account Login</h1>
                    </header>
                    <section className="email">
                        <div className="addTitleHeader">
                            <h5>Email</h5>
                            {errorMessages.length === 0
                                ? null
                                : errorMessages.map((e: string) => {
                                      if (e.includes('email')) {
                                          return (
                                              <div className="errorMessage">
                                                  <h5>{e}</h5>
                                              </div>
                                          )
                                      }
                                  })}
                        </div>
                        <input
                            type="text"
                            onChange={handleEmailChange}
                            value={email}
                            required
                        ></input>
                    </section>

                    <section className="password">
                        <div className="addTitleHeader">
                            <h5>Password</h5>
                            {errorMessages.length === 0
                                ? null
                                : errorMessages.map((e: string) => {
                                      if (e.includes('Password')) {
                                          return (
                                              <div className="errorMessage">
                                                  <h5>{e}</h5>
                                              </div>
                                          )
                                      }
                                  })}
                        </div>
                        <input
                            type="password"
                            onChange={handlePasswordChange}
                            value={password}
                        ></input>
                    </section>

                    <section className="loginButton">
                        <div className="center">
                            <button id="loginBtn">Login</button>
                        </div>
                    </section>

                    <div className="center">
                        <section className="resetPW">
                            <h5>
                                Forgot your password?
                                <button id="resetBtn">
                                    <a href="index">Reset</a>
                                </button>
                            </h5>
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
                <ToastContainer style={{ fontSize: 13 }} />
            </div>
        </main>
    )
}

export default Login
