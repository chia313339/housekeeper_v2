<template>
    <div>
        <el-result
        icon="error"
        title="404 Not Found"
        sub-title="找不到你要的頁面"
        >
            <template #extra>
            <el-button type="primary" @click="$router.push('/')">Back</el-button>
            </template>
        </el-result>
    </div>
</template>