
import axios from 'axios';
axios.defaults.headers['Content-Type'] = 'application/json';

export const signUp = (data) => { 
  return axios.post('https://conduit.productionready.io/api/users', {
    user: data
  })
}

export const signIn = (data) => { 
  return axios.post('https://conduit.productionready.io/api/users/login',{
    user: data
  })
}