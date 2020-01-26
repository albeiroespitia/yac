import React, {useEffect, useState} from 'react'
import styles from './style.module.scss'
import {Typography} from '@material-ui/core'
import { useSelector } from 'react-redux'
import moment from 'moment'
import searchYoutube from 'youtube-api-v3-search';

const MessageBox = ({test, message, sender, avatar, date}) => {
	const user = useSelector(state => state.user)
	const [formattedMessage, setFormattedMessage] = useState(message)
	const formattedDate = moment(date).calendar();

	const youtubeAPI = async() => {
		if(/^\/youtube\s\S.*$/.test(message)){
			try{
				const result = await searchYoutube(process.env.REACT_APP_YOUTUBE_API,{
					"q": message,
					"part": "snippet",
					"maxResults": 1,
					"type": "video",
					"videoEmbeddable": "true"
				});
				setFormattedMessage(<iframe title={`${message}${user.nickname}`} allowfullscreen="allowfullscreen" src={`https://www.youtube.com/embed/${result.items[0].id.videoId}`}></iframe>)
			}catch(e){
				console.log(e)
			}
		}
	}

	useEffect(()=>{
		youtubeAPI()
	},[])

	return(
		<>
			{
				user.nickname === sender ? (
					<div className={styles.container} style={{float:'right', justifyContent:'flex-end'}}>
						<div className={styles.messageContainer} style={{alignItems:'flex-end'}}>
							<Typography component="span" className={styles.person}>{sender}</Typography>
							<div className={styles.textContainer} style={{backgroundColor:'#7E00C5'}}>
								<Typography component="p" className={styles.message} style={{color:'#FFF'}}>{formattedMessage}</Typography>
							</div>
							<Typography component="span" className={styles.dateMessage} style={{alignSelf:'flex-start'}}>{formattedDate}</Typography>
						</div>
						<img alt='profileImage' src={require(`../../assets/avatars/${avatar}`)}/>
					</div>
				):(
					<div className={styles.container}>
						<img alt='profileImage' src={require(`../../assets/avatars/${avatar}`)}/>
						<div className={styles.messageContainer}>
							<Typography component="span" className={styles.person}>{sender}</Typography>
							<div className={styles.textContainer}>
								<Typography component="p" className={styles.message}>{formattedMessage}</Typography>
							</div>
							<Typography component="span" className={styles.dateMessage}>{formattedDate}</Typography>
						</div>
					</div>
				)
			}
		</>
	)
}

export default MessageBox
