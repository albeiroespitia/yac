import React from 'react'
import styles from './style.module.scss'
import {TextField, Typography} from '@material-ui/core'

const MessageBox = () => {

	return(
		<div className={styles.container}>
			<img src={require('../../assets/avatars/boy.svg')}/>
			<div className={styles.messageContainer}>
				<div className={styles.textContainer}>
					<Typography component="p" className={styles.message}>Hi Star. How is it going? :D</Typography>
				</div>
				<Typography component="span" className={styles.dateMessage}>Yesterday 12:55 AM</Typography>
			</div>
		</div>
	)
}

export default MessageBox
