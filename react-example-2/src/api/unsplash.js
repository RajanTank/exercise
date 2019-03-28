import axios from 'axios'

export default axios.create({
   baseURL : 'https://api.unsplash.com',
   headers:{
      Authorization: 
      'Client-ID 33186081d79dff1a24da304fa144551160f334fe013d7455cb8495f491423d39'
  }
});