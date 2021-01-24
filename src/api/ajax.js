import axios from 'axios'
// const service = axios.create({
//   // ...
//   headers: {
//     'Cache-Control': 'no-cache'
//   }
// });
// axios.defaults.headers['Cache-Control'] = 'no-cache'
axios.defaults.withCredentials = true
export default (url,data={},type='GET') => {
  return new Promise((resolve, reject) => {
    let promise
    if(type==='GET') {
      promise = axios.get(url,{params:data})
    }
    if(type==='POST') {
      promise =axios.post(url,data)
    }
    promise.then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

