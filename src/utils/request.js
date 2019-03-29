import axios from 'axios'
import {serverUrl} from './config'
const instance=axios.create({

   baseURL:serverUrl,
   timeout:5000
});

export function get(url, params, config) {
  return axios.get(url, {
    params,
    ...config
  })
}

export function del(url) {
  return axios.delete(url)
}



// export function put() {
  
// }

export default instance