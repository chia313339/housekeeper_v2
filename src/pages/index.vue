<template>
    <div>
        後台首頁
        {{ $store.state.user }}
    </div>
</template>


<script setup>
    import { useCookies } from '@vueuse/integrations/useCookies'
    const cookie = useCookies()

    // console.log(cookie);

    function set(){
        cookie.set("admin-token","1232456")
    }

    function get(){
        console.log(cookie.get("admin-token"));
    }

    function remove(){
        cookie.remove("admin-token")
    }
</script>