import React, {useEffect, useRef} from 'react'
import Layout from '../../Layout'
import styles from './style.module.scss'
import InputBar from '../../Components/InputBar'
import MessageBox from '../../Components/MessageBox'
import { useSelector } from 'react-redux'

const Chat = () => {
	const scrollDiv = useRef()
	const messages = useSelector(state => state.messages.allMessages)

	useEffect(()=>{
		if(messages) scrollDiv.current.scrollTop = scrollDiv.current.scrollHeight;
	},[messages])

	return(
		<Layout>
			{
				messages ? (
					<div className={styles.chatContainer}>
						<div className={styles.chatBox} ref={scrollDiv}>
						{
							messages.map((el,idx)=>(
								<MessageBox key={idx} test={false} message={el.message} sender={el.sender} date={el.date}/>
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

export default Chat
