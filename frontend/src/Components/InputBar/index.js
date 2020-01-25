import React from 'react'
import {TextField} from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from './style.module.scss'
import { useSelector } from 'react-redux'

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
	const user = useSelector(state => state.user)

	return(
		<div className={styles.container}>
			<ThemeProvider theme={theme}>
				<TextField placeholder={`Hey ${user.nickname}. Type something to send...`} className={styles.chatTextField} classes={{root:styles.root}}/>
			</ThemeProvider>
		</div>
	)
}

export default InputBar
