import React from 'react'
import Layout from '../../Layout'
import styles from './style.module.scss'
import InputBar from '../../Components/InputBar'

const Chat = () => {
	return(
		<Layout>
			<div className={styles.chatContainer}>
				<div className={styles.chatBox}></div>
				<div className={styles.chatInput}>
					<InputBar/>
				</div>
			</div>
		</Layout>
	)
}

export default Chat
