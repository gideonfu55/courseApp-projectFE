import React, { useState } from 'react'
import { string } from 'yargs'
import { userSchema } from '../Validations/UserValidation'

const Register: React.FC = () => {
    // States for registration
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userType, setUserType] = useState('')

    // States for checking the errors
    const [errorMessages, setErrorMessages] = useState([])
    const [validationError, setValidationError] = useState({})

    // Handling the name change
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    // Handling the email change
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    // Handling the password change
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
    }

    const handleUserType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserType(e.target.value)
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        let formData = {
            name: name,
            email: email,
            password: password,
            confirmPwd: confirmPassword,
            userType: userType,
        }
        const validateResult = await userSchema
            .validate(formData, { abortEarly: false })
            .then((responseData) => {
                setErrorMessages([])
                //submit responseData to the backends
            })
            .catch((err) => {
                console.log(err)
                console.log(err.name) // ValidationError
                console.log(err.errors)
                setValidationError(err.value)
                setErrorMessages(err.errors)
            })
    }

    return (
        <div className="form">
            <div>
                <h1>Register</h1>
            </div>
            <div className="form__body">
                <form onSubmit={handleSubmit}>
                    {/* Labels and inputs for form data */}
                    <div className="form__field">
                        <label className="label">Name</label>
                        <input
                            onChange={handleName}
                            className="input"
                            value={name}
                            type="text"
                            name="name"
                        />
                    </div>
                    {errorMessages.length == 0
                        ? null
                        : errorMessages.map((e: string) => {
                              if (e.includes('Name')) {
                                  return (
                                      <div className="form__field">
                                          <label className="label"></label>
                                          <div className="validation__error">
                                              {e}
                                          </div>
                                      </div>
                                  )
                              }
                          })}

                    <div className="form__field">
                        <label className="label">Email</label>
                        <input
                            onChange={handleEmail}
                            className="input"
                            value={email}
                            type="email"
                            name="email"
                        />
                    </div>
                    {errorMessages.length == 0
                        ? null
                        : errorMessages.map((e: string) => {
                              if (e.includes('Email')) {
                                  return (
                                      <div className="form__field">
                                          <label className="label"></label>
                                          <div className="validation__error">
                                              {e}
                                          </div>
                                      </div>
                                  )
                              }
                          })}

                    <div className="form__field">
                        <label className="label">Password</label>
                        <input
                            onChange={handlePassword}
                            className="input"
                            value={password}
                            type="password"
                            name="password"
                        />
                    </div>
                    {errorMessages.length == 0
                        ? null
                        : errorMessages.map((e: string) => {
                              if (e.includes('characters')) {
                                  return (
                                      <div className="form__field">
                                          <label className="label"></label>
                                          <div className="validation__error">
                                              {e}
                                          </div>
                                      </div>
                                  )
                              } else if (e.includes('password')) {
                                  return (
                                      <div className="form__field">
                                          <label className="label"></label>
                                          <div className="validation__error">
                                              {e}
                                          </div>
                                      </div>
                                  )
                              }
                          })}

                    <div className="form__field">
                        <label className="label">Confirm Password</label>
                        <input
                            onChange={handleConfirmPassword}
                            className="input"
                            value={confirmPassword}
                            type="password"
                            name="confirmPassword"
                        />
                    </div>
                    {errorMessages.length == 0
                        ? null
                        : errorMessages.map((e: string) => {
                              if (e.includes('match')) {
                                  return (
                                      <div className="form__field">
                                          <label className="label"></label>
                                          <div className="validation__error">
                                              {e}
                                          </div>
                                      </div>
                                  )
                              }
                          })}

                    <div className="form__field">
                        <label className="label">Sign up as</label>
                        <div className="radio__field">
                            <label
                                className="radio__label"
                                htmlFor="userTypeStudent"
                            >
                                <input
                                    className="radio__input"
                                    type="radio"
                                    id="userTypeStudent"
                                    name="userType"
                                    value="student"
                                    onChange={handleUserType}
                                    style={{
                                        width: '1rem',
                                        marginTop: '-1px',
                                        verticalAlign: 'middle',
                                        marginRight: '1rem',
                                    }}
                                />
                                Student
                            </label>

                            <label
                                className="radio__label"
                                htmlFor="userTypeCreator"
                            >
                                <input
                                    className="radio__input"
                                    type="radio"
                                    id="userTypeCreator"
                                    name="userType"
                                    value="courseCreator"
                                    style={{
                                        width: '1rem',
                                        marginTop: '-1px',
                                        verticalAlign: 'middle',
                                        marginRight: '1rem',
                                    }}
                                />
                                Course Creator
                            </label>
                        </div>
                    </div>
                    {errorMessages.length == 0
                        ? null
                        : errorMessages.map((e: string) => {
                              if (e.includes('Student')) {
                                  return (
                                      <div className="form__field">
                                          <label className="label"></label>
                                          <div className="validation__error">
                                              {e}
                                          </div>
                                      </div>
                                  )
                              }
                          })}

                    <div className="btn__container">
                        <button className="btn" type="submit">
                            Register
                        </button>
                    </div>
                    {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
                    {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                </form>
            </div>
        </div>
    )
}

export default Register
