import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import { TextField, Button, Typography } from '@material-ui/core'
import styles from './style.module.scss'
import { useDispatch } from 'react-redux'
import { withRouter } from "react-router-dom";

const LoginForm = ({history}) => {
	const dispatch = useDispatch()

	const [userData, setUsetData] = useState({
		nickname: ''
	})

	const handleUser = (event) => {
		setUsetData({
			...userData,
			[event.target.name]: event.target.value.trim()
		})
	}

	const handleLogin = () => {
		if(/\S/.test(userData.nickname)){
			dispatch({
				type:'user/LOGIN',
				payload:{ nickname: userData.nickname, history }
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
        className={styles.nickname}
				name="nickname"
				onChange={handleUser}
				value={userData.nickname}
      />
      <Button variant="contained" className={styles.loginButton} onClick={handleLogin}> Login </Button>
      <Typography component="p" className={styles.signupText}> Don't have an account? <Link to="/signup" className={styles.signupLink}>Sign up</Link> </Typography>
    </div>
  )
}

export default withRouter(LoginForm)
