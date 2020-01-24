import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.scss'
import { Snackbar, SnackbarContent } from '@material-ui/core'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const SnackBar = () => {
	const dispatch = useDispatch()
	const snackData = useSelector(state => state.helpers)

	const handleSnackClose = () => {
		dispatch({
			type:'helper/SNACKBAR',
			payload:{isSnackVisible:false}
		})
	}

	return(
		<div>
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			open={snackData.isSnackVisible}
		 	onClose={handleSnackClose}
		 	autoHideDuration={4000}>
				<>
					{
						snackData.color == '#43a047' ? (
							<SnackbarContent
								className={styles.snackbarSuccess}
								message={
									<span id="client-snackbar">
									<FaCheckCircle className={styles.icon}/>
										{snackData.text}
									</span>
							}/>
						):(
							<SnackbarContent
								className={styles.snackbarError}
								message={
									<span id="client-snackbar">
									<FaExclamationCircle className={styles.icon}/>
										{snackData.text}
									</span>
							}/>
						)
					}
				</>
		</Snackbar>
		</div>
	)
}

export default SnackBar
