import React, {useEffect, useRef} from 'react'
import Layout from '../../Layout'
import styles from './style.module.scss'
import InputBar from '../../Components/InputBar'
import MessageBox from '../../Components/MessageBox'

const Chat = () => {
	const scrollDiv = useRef()

	useEffect(()=>{
		scrollDiv.current.scrollTop = scrollDiv.current.scrollHeight;
	},[])

	return(
		<Layout>
			<div className={styles.chatContainer}>
				<div className={styles.chatBox} ref={scrollDiv}>
					<MessageBox test={false}/>
					<MessageBox test={true}/>
					<MessageBox test={false}/>
					<MessageBox test={false}/>
					<MessageBox test={false}/>
					<MessageBox test={true}/>
					<MessageBox test={true}/>
				</div>
				<div className={styles.chatInput}>
					<InputBar/>
				</div>
			</div>
		</Layout>
	)
}

export default Chat
