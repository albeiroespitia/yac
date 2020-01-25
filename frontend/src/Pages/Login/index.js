import React, { useEffect } from 'react'
import styles from './style.module.scss'
import Layout from '../../Layout'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/14285-riding-slider-scooter.json'
import {Typography} from '@material-ui/core'
import LoginForm from '../../Components/LoginForm'
import animation from '../../assets/27-loading.json'
import { useSelector } from 'react-redux'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Login = ({history}) => {
	const loadingRequest = useSelector(state => state.user.loadingRequest)

  return(
    <Layout>
      <div className={styles.container}>
        <div className={styles.loginAnimation}>
          <Lottie options={defaultOptions}/>
        </div>
        <div className={styles.loginBox}>
          <div className={styles.internBox}>
            <div>
              <Typography component="h1" className={styles.title}>YAC</Typography>
              <Typography component="h2" className={styles.subtitle}>Yet Another Chat</Typography>
            </div>
            <div className={styles.loginFormContainer}>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>

			{
				loadingRequest ? (
					<div className='loottieLoadingAnimation'>
						<Lottie
							options={{
								animationData: animation
							}}
							style={{
								position: 'fixed',
								left: '50%',
								zIndex: 1000,
								background: 'rgba(0,0,0,0.2)',
								transform: 'translateX(-50%) translateY(-50%)',
								top: '50%'
							}}
						/>
					</div>
				):(
					null
				)
			}
    </Layout>
  )
}

export default Login
