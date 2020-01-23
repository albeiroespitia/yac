import React from 'react'
import styles from './style.module.scss'

const Layout = ({children}) => {
  return(
    <div className={styles.container}>
      <div className={styles.card}>
        {children}
      </div>
    </div>
  )
}

export default Layout
