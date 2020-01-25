import React from 'react'
import Layout from '../../Layout'
import styles from './style.module.scss'
import InputBar from '../../Components/InputBar'
import MessageBox from '../../Components/MessageBox'

const Chat = () => {
	return(
		<Layout>
			<div className={styles.chatContainer}>
				<div className={styles.chatBox}>
					<MessageBox/>
				</div>
				<div className={styles.chatInput}>
					<InputBar/>
				</div>
			</div>
		</Layout>
	)
}

export default Chat
