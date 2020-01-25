import React from 'react'
import styles from './style.module.scss'
import {TextField, Typography} from '@material-ui/core'
import { useSelector } from 'react-redux'

const MessageBox = ({test, message, sender, date}) => {
	const user = useSelector(state => state.user)

	return(
		<>
			{
				user.nickname === sender ? (
					<div className={styles.container} style={{float:'right', justifyContent:'flex-end'}}>
						<div className={styles.messageContainer} style={{alignItems:'flex-end'}}>
							<Typography component="span" className={styles.person}>{sender}</Typography>
							<div className={styles.textContainer} style={{backgroundColor:'#7E00C5'}}>
								<Typography component="p" className={styles.message} style={{color:'#FFF'}}>{message}</Typography>
							</div>
							<Typography component="span" className={styles.dateMessage} style={{alignSelf:'flex-start'}}>Yesterday 12:55 AM</Typography>
						</div>
						<img src={require('../../assets/avatars/boy.svg')}/>
					</div>
				):(
					<div className={styles.container}>
						<img src={require('../../assets/avatars/boy.svg')}/>
						<div className={styles.messageContainer}>
							<Typography component="span" className={styles.person}>{sender}</Typography>
							<div className={styles.textContainer}>
								<Typography component="p" className={styles.message}>{message}</Typography>
							</div>
							<Typography component="span" className={styles.dateMessage}>Yesterday 12:55 AM</Typography>
						</div>
					</div>
				)
			}
		</>
	)
}

export default MessageBox
