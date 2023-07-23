<template>
    <div>
        <el-row class="login-container">
            <el-col :lg="16" :md="16" :sm="24" class="left">
                <div>
                    <div class="font-bold text-5xl text-light-50 mb-4">Housekeeper系統</div>
                    <div class=" text-light-50 mb-4">測試用記帳系統</div>
                </div>
            </el-col>

            <el-col :lg="8"  :md="8" :sm="24" class="right">
                <h2 class="title">歡迎回來</h2>
                <div>
                    <span class="line"></span>
                    <span>請先登入</span>
                    <span class="line"></span>
                </div>
                <el-form ref="formRef" :model="form" class="w-[250px]" :rules="rules">
                    <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="請輸入帳號">
                        <template #prefix>
                            <el-icon><user /></el-icon>
                        </template>
                    </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="請輸入密碼" type="password">
                        <template #prefix>
                                <el-icon><lock /></el-icon>
                        </template>
                    </el-input>

                    </el-form-item>

                    <el-form-item>
                        <el-button class="w-[250px]" round type="primary" @click="onSubmit">登入</el-button>
                    </el-form-item>
                    
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    .login-container{
        @apply min-h-screen bg-indigo-500;
    }
    .login-container .left,.login-container .right{
        @apply flex items-center justify-center;
    }
    .login-container .right{
        @apply bg-light-50 flex-col;
    }
    .left>div>div:first-child{
        @apply font-bold text-5xl text-light-50 mb-4;
    }
    .left>div>div:last-child{
        @apply text-gray-200 text-sm;
    }
    .right .title{
        @apply font-bold text-3xl text-gray-800;
    }
    .right>div{
        @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
    }
    .right .line{
        @apply h-[1px] w-16 bg-gray-200;
    }
</style>

<script setup>
    import { ref, reactive } from 'vue'
    import { login } from '~/api/manager'
    const form = reactive({
        username: '',
        password: '',
    })

    const rules = {
        username:[
            { 
                required: true, 
                message: '帳號不能為空', 
                trigger: 'blur' 
            },
        ],
        password:[
            { 
                required: true, 
                message: '密碼不能為空', 
                trigger: 'blur' 
            },
        ]
    }

    const formRef = ref(null)

    const onSubmit = () => {
        formRef.value.validate((valid)=>{
            if(!valid){
                return false
            }
            login(form.username, form.password)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
            console.log('通過驗證!')
        })
        console.log('submit!')
    }


</script>