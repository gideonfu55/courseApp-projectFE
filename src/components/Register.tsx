import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { userSchema } from '../Validations/UserValidation'
import { ObjectType } from 'typescript'

const Register: React.FC = () => {
    // States for registration
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userType, setUserType] = useState('')

    // States for checking the errors
    const [currentErrors, setCurrentErrors] = useState([])

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

    const handleRole = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                setCurrentErrors([])
                //submit responseData to the backends
            })
            .catch((err) => {
                console.log(err)
                console.log(err.name) // ValidationError
                console.log(err.errors)
                setCurrentErrors(err.errors)
            })
    }

    return (
        <div className="form">
            <div>
                <h1>Register</h1>
            </div>
            {currentErrors.length == 0
                ? null
                : currentErrors.map((e) => {
                      return <div>{e}</div>
                  })}
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

                    <div className="form__field">
                        <label className="label">Sign up as</label>
                        <div className="radio__field">
                            <input
                                type="radio"
                                id="userTypeStudent"
                                name="userType"
                                value="student"
                            />
                            <label
                                className="radio__label"
                                htmlFor="userTypeStudent"
                            >
                                Student
                            </label>
                            <input
                                type="radio"
                                id="userTypeCreator"
                                name="userType"
                                value="courseCreator"
                            />
                            <label
                                className="radio__label"
                                htmlFor="userTypeCreator"
                            >
                                Course Creator
                            </label>
                        </div>
                    </div>

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
