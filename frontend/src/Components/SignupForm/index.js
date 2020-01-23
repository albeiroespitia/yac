import React from 'react'
import {Link} from 'react-router-dom'
import { TextField, Button, Typography, FormLabel, RadioGroup, FormControlLabel, Radio  } from '@material-ui/core'
import styles from './style.module.scss'

const SignupForm = () => {
  return(
    <div className={styles.container}>
      <TextField
        label="Nickname"
        className={styles.nickname}
      />
      <RadioGroup className={styles.radioContainer}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      <Button variant="contained" className={styles.loginButton}> Sign up </Button>
      <Typography component="p" className={styles.signupText}> Already have an account? <Link to="/login" className={styles.signupLink}>Login</Link> </Typography>
    </div>
  )
}

export default SignupForm
