import axios from 'axios'

export async function login(nickname) {
  let response = await axios({
	  method: 'POST',
	  url: `${process.env.REACT_APP_API_URL}/login`,
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
	  url: `${process.env.REACT_APP_API_URL}/signup`,
	  data: userData,
	  headers:{
		  'Content-Type': 'application/json'
	  }
  })

  return response
}

export async function checkLogin(token) {
    let response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/checkLogin`,
      headers:{
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    return response.data
}
