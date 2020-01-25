import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Auth = ({history}) => {
	const isLogged = useSelector(state => state.user.isLogged)

	useEffect(()=>{
		if(isLogged){
			history.push('/chat')
		}else{
			history.push('/login')
		}
	},[isLogged])

	return <></>
}

export default withRouter(Auth)
