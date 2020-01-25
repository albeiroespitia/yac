import axios from 'axios'
import { getCookie } from './Cookies'

export async function sendMessage(message) {
  let response = await axios({
	  method: 'POST',
	  url: `${process.env.REACT_APP_API_URL}/sendMessage`,
	  data: {
		  message
	  },
	  headers:{
		  'Content-Type': 'application/json',
			'Authorization': getCookie('__tw__')
	  }
  })

  return response
}


export async function getMessages() {
  let response = await axios({
	  method: 'GET',
	  url: `${process.env.REACT_APP_API_URL}/messages`,
	  headers:{
		  'Content-Type': 'application/json',
			'Authorization': getCookie('__tw__')
	  }
  })

  return response
}
