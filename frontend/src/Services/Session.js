import axios from 'axios'

export async function login(nickname) {
  let response = await axios({
	  method: 'POST',
	  url: `${process.env.API_URL}/login`,
	  data: {
		  nickname
	  },
	  headers:{
		  'Content-Type': 'application/json'
	  }
  })

  return response
}

export async function signup(userData) {
  let response = await axios({
	  method: 'POST',
	  url: `${process.env.API_URL}/signup`,
	  data: userData,
	  headers:{
		  'Content-Type': 'application/json'
	  }
  })

  return response
}
