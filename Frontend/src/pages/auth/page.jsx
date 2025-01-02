import styles from './page.module.css'
import { useState } from "react"
import { TextField, Button } from "@mui/material"
import authServices from '../../services/auth.jsx'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../loading/page"

export default function Auth() {
    const [ formType, setFormType ] = useState('login')
    const [ formData, setFormData ] = useState(null)
    const { login, signup, authLoading } = authServices()
    const navigate = useNavigate()
    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() => {
        if(authData) {
            navigate('/profile')
        }
    }, [authData])
    
    const handleChangeFormType = () => {
        setFormData(null)
        if(formType ==='login') {
            setFormType('signup')
        } else {
            setFormType('login')
        } 
    }

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        switch (formType) {
            case 'login':
                login(formData)
                break;
            case 'signup':
                if(formData.password !== formData.confirmPassword) {
                    console.log('Passwords do not match')
                    return
                }
                signup(formData)

                break;
        }
    }

    if(authLoading) {
        return (<Loading /> )
    }

    return (
        <div className={styles.allPage}>
            <div className={styles.authContainer}>
                {formType === 'login' ? (
                    <>
                        <h1>Login</h1>
                        <form className={styles.formContainer} onSubmit={handleSubmitForm}>
                            <TextField className={styles.emailBox}
                            required
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleFormDataChange}
                            />
                            <TextField className={styles.passBox}
                            required
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleFormDataChange}
                            />
                            <Button variant="contained"  type="submit">Login</Button>
                        </form>
                        <a className={styles.btnSwitch} onClick={handleChangeFormType}>Don't have an account yet? Sign up</a>
                    </>
                ) : null}
                {formType === 'signup' ? (
                    <>
                        <h1>SIGN UP</h1>
                        <form className={styles.formContainer} onSubmit={handleSubmitForm}>
                            <TextField className={styles.emailBox}
                            required
                            label="Fullname"
                            type="fullname"
                            name="fullname"
                            onChange={handleFormDataChange}
                            />
                            <TextField className={styles.emailBox}
                            required
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleFormDataChange}
                            />
                            <TextField className={styles.passBox}
                            required
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleFormDataChange}
                            />
                            <TextField className={styles.passBox}
                            required
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            onChange={handleFormDataChange}
                            />
                            <Button variant="contained"  type="submit">Sign Up</Button>
                        </form>
                        <a className={styles.btnSwitch} onClick={handleChangeFormType}>Already have an account? Login</a>

                    </>
            ) : null}
                
            </div>
        </div>
    )
}