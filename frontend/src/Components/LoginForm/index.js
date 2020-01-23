import React from 'react'
import { TextField, Button } from '@material-ui/core'
import styles from './style.module.scss'

const LoginForm = () => {
  return(
    <div className={styles.container}>
      <TextField
        label="Nickname"
        className={styles.nickname}
      />
      <Button variant="contained" className={styles.loginButton}> Login </Button>
    </div>
  )
}

export default LoginForm
