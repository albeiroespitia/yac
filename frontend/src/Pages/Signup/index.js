import React from 'react'
import styles from './style.module.scss'
import Layout from '../../Layout'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/14285-riding-slider-scooter.json'
import {Typography} from '@material-ui/core'
import SignupForm from '../../Components/SignupForm'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Signup = () => {
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
              <SignupForm/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Signup
