import router from '~/router'
import { getToken } from '~/composables/auth'
import { toast } from '~/composables/util'
import store from './store'

// 全局前置守衛，監測所有畫面必須先登入
router.beforeEach(async(to, from, next) => {
    // to and from are both route objects. must call `next`.
    const token = getToken()
    // 沒有登入強置跳轉
    if(!token && to.path != "/login"){
        toast("請先登入","error")
        return next({ path:"/login" })
    }
    // 防止重複登入
    if(token && to.path == "/login"){
        toast("請勿重複登入","error")
        return next({ path:from.path ? from.path : "/" })
    }
    // 如果用戶登入，獲取用戶訊息並儲存在vuex中
    if(token){
        await store.dispatch("getinfo")
    }

    next()
})