import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { TextField, Button, Typography, RadioGroup, FormControlLabel, Radio  } from '@material-ui/core'
import styles from './style.module.scss'
import { useDispatch } from 'react-redux'
import { withRouter } from "react-router-dom";

const SignupForm = ({history}) => {
	const dispatch = useDispatch()

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
			dispatch({
				type:'user/SIGN_UP',
				payload:{ userData, history }
			})
		}else{
			dispatch({
				type:'helper/SNACKBAR',
				payload:{
					isSnackVisible: true,
					text: 'All fields must be filled out',
					color: '#d32f2f'
				}
			})
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
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
      <Button variant="contained" className={styles.loginButton} onClick={handleSignup}> Sign up </Button>
      <Typography component="p" className={styles.signupText}> Already have an account? <Link to="/login" className={styles.signupLink}>Login</Link> </Typography>
    </div>
  )
}

export default withRouter(SignupForm);
