import { createStore } from 'vuex'
import { login, getinfo } from '~/api/manager'

// 创建一个新的 store 实例
const store = createStore({
    state () {
        return {
            // 使用者訊息
            user:{}
        }
    },
    mutations: {
        // 紀錄使用者訊息
        SET_USERINFO(state,user){
            state.user = user
        }
    },
    actions:{
        // 獲取當前用戶訊息
        getinfo({ commit }){
            return new Promise((resolve,reject)=>{
                getinfo().then(res=>{
                    commit("SET_USERINFO",res)
                    resolve(res)
                }).catch(err=>reject(err))
            })
        }
    }

    })

export default store