import React, {useState} from 'react'
import {TextField} from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiInputBase: {
      // Name of the rule
      root: {
				padding: '0 1em',
      	height: '100%'
      },
    },
		MuiInput:{
			underline:{
				borderBottom: 0,
				'&:after': {
					borderBottom: 0
				},
				'&:before': {
					content: 'unset'
				}
			}
		}
  },
});

const InputBar = () => {
	const dispatch = useDispatch()
	const [message, setMessage] = useState('')
	const user = useSelector(state => state.user)

	const handleMessage = (event) => {
		setMessage(event.target.value)
	}

	const sendMessage = () => {
		if(/\S/.test(message)){
			dispatch({
				type:'message/SEND',
				payload:{ message }
			})
			setMessage('')
		}
	}

	const keyPress = (e) => {
			if(e.keyCode === 13){
				sendMessage()
			}
	 }
	 console.log(user)

	return(
		<div className={styles.container}>
			<ThemeProvider theme={theme}>
				<TextField
					placeholder={`Hey ${user.nickname}. Type something to send...`}
					className={styles.chatTextField}
					onChange={handleMessage}
					value={message}
					classes={{root:styles.root}}
					onKeyDown={keyPress}
				/>
			</ThemeProvider>
		</div>
	)
}

export default InputBar
