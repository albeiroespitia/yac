import React from 'react'
import styles from './style.module.scss'
import Layout from '../../Layout'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/14285-riding-slider-scooter.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Login = () => {
  return(
    <Layout>
      <div className={styles.container}>
        <div className={styles.loginAnimation}>
          <Lottie options={defaultOptions}/>
        </div>
        <div className={styles.loginBox}>
          hola
        </div>
      </div>
    </Layout>
  )
}

export default Login
