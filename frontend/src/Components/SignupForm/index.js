import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { TextField, Button, Typography, RadioGroup, FormControlLabel, Radio  } from '@material-ui/core'
import styles from './style.module.scss'

const SignupForm = () => {
	const [userData, setUsetData] = useState({
		nickname: '',
		gender: ''
	})

	const handleUser = (event) => {
		setUsetData({
			...userData,
			[event.target.name]: event.target.value.trim()
		})
	}

	const handleSignup = () => {
		if((/\S/.test(userData.nickname)) && (/\S/.test(userData.gender))){
			alert("Pasado")
		}else{
			
		}
	}

  return(
    <div className={styles.container}>
      <TextField
        label="Nickname"
				name="nickname"
				onChange={handleUser}
				value={userData.nickname}
        className={styles.nickname}
      />
      <RadioGroup className={styles.radioContainer} name="gender" onChange={handleUser} value={userData.gender}>
          <FormControlLabel value="0" control={<Radio />} label="Male" />
          <FormControlLabel value="1" control={<Radio />} label="Female" />
      </RadioGroup>
      <Button variant="contained" className={styles.loginButton} onClick={handleSignup}> Sign up </Button>
      <Typography component="p" className={styles.signupText}> Already have an account? <Link to="/login" className={styles.signupLink}>Login</Link> </Typography>
    </div>
  )
}

export default SignupForm
