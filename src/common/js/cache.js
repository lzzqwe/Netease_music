import storage from 'good-storage'

const NETTOKEN='netToken'
export const loadUserInfo = () => {
  return storage.get(NETTOKEN,{})
}
export const saveUserInfo = (user) => {
  storage.set(NETTOKEN,user)
}
