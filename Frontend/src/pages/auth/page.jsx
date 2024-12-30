import styles from './page.module.css'
import { useState } from "react"
import { TextField, Button } from "@mui/material"
import authServices from '../../services/auth.jsx'

export default function Auth() {
    const [ formType, setFormType ] = useState('login')
    const [ formData, setFormData ] = useState(null)
    const { login, signup, authLoading } = authServices()
    
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
        return ( <h1>Loading</h1>)
    }

    if(formType === 'login') {
        return (
            <div className={styles.allPage}>
                <div className={styles.authContainer}>
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
                </div>
            </div>
        )
    }
    
    

    if(formType === 'signup') {
        return (
            <div className={styles.allPage}>
                <div className={styles.authContainer}>
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
                </div>
            </div>
        )
    }
}