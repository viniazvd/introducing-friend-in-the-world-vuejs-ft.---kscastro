import axios from 'axios'

// criando e configurando instancia do axios 
const instance = axios.create({
  baseURL: 'https://misty-platinum.glitch.me/discounts/featured'
})

export default instance

