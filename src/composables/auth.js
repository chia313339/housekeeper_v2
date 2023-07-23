import { useCookies } from '@vueuse/integrations/useCookies'

const TokenKey = 'admin-token'
const cookie = useCookies()

// 獲取token
export function getToken(){
    return cookie.get(TokenKey)
}

// 設置token
export function setToken(token){
    return cookie.set(TokenKey, token)
}

// 刪除token
export function removeToken(){
    return cookie.remove(TokenKey)
}

