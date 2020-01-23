import React from 'react'
import {Link} from 'react-router-dom'
import { TextField, Button, Typography } from '@material-ui/core'
import styles from './style.module.scss'

const LoginForm = () => {
  return(
    <div className={styles.container}>
      <TextField
        label="Nickname"
        className={styles.nickname}
      />
      <Button variant="contained" className={styles.loginButton}> Login </Button>
      <Typography component="p" className={styles.signupText}> Don't have an account? <Link to="/signup" className={styles.signupLink}>Sign up</Link> </Typography>
    </div>
  )
}

export default LoginForm
