import React, {useEffect, useRef} from 'react'
import Layout from '../../Layout'
import styles from './style.module.scss'
import InputBar from '../../Components/InputBar'
import MessageBox from '../../Components/MessageBox'
import { useSelector } from 'react-redux'
import {Typography, Button} from '@material-ui/core'
import { IoIosLogOut } from "react-icons/io";
import { withRouter } from "react-router-dom";
import {deleteCookie} from '../../Services/Cookies'

const Chat = ({history}) => {
	const scrollDiv = useRef()
	const messages = useSelector(state => state.messages.allMessages)

	useEffect(()=>{
		if(messages) scrollDiv.current.scrollTop = scrollDiv.current.scrollHeight;
	},[messages])

	const handleLogOut = () => {
		deleteCookie('__tw__')
		history.push('/login')
	}

	return(
		<Layout>
			{
				messages ? (
					<div className={styles.chatContainer}>
						<Button onClick={handleLogOut} className={styles.logOutIcon}>
							<IoIosLogOut/>
						</Button>
						<div className={styles.chatBox} ref={scrollDiv}>
						{
							messages.map((el,idx)=>(
								<MessageBox key={idx} test={false} message={el.message} avatar={el.avatar} sender={el.sender} date={el.date}/>
							))
						}
						</div>
						<div className={styles.chatInput}>
							<InputBar/>
						</div>
					</div>
				):(
					<></>
				)
			}

		</Layout>
	)
}

export default withRouter(Chat)
