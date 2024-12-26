import styles from './page.module.css'
import { useState } from "react"
import { TextField, Button } from "@mui/material"

export default function Auth() {
    const [ formType, setFormType ] = useState('login')
    
    const handleChangeFormType = () => {
        if(formType ==='login') {
            setFormType('signup')
        } else {
            setFormType('login')
        }
    }
    if(formType === 'login') {
        return (
            <div className={styles.allPage}>
                <div className={styles.authContainer}>
                    <h1>Login</h1>
                    <form className={styles.formContainer}>
                        <TextField className={styles.emailBox}
                        required
                        label="Email"
                        type="email"
                        name="email"
                        />
                        <TextField className={styles.passBox}
                        required
                        label="Password"
                        type="password"
                        name="password"
                        />
                        <Button variant="contained"  type="submit">Login</Button>
                    </form>
                    <a className={styles.btnSwitch} onClick={handleChangeFormType}>Don't have an account yet? Sign up</a>
                </div>
            </div>
        )
    }
    
    const handleFormDataChange = (e) => {
        
    }

    if(formType === 'signup') {
        return (
            <div className={styles.allPage}>
                <div className={styles.authContainer}>
                    <h1>SIGN UP</h1>
                    <form className={styles.formContainer}>
                        <TextField className={styles.emailBox}
                        required
                        label="Email"
                        type="email"
                        name="email"
                        />
                        <TextField className={styles.passBox}
                        required
                        label="Password"
                        type="password"
                        name="password"
                        />
                        <Button variant="contained"  type="submit">Login</Button>
                    </form>
                    <a className={styles.btnSwitch} onClick={handleChangeFormType}>Already have an account? Login</a>
                </div>
            </div>
        )
    }
}