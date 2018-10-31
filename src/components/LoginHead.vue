<template>
    <div>
        <Header class="login_head_box" height="2.5rem">
            <Button class="login_head_btn" size="mini" type="text" @click.native="onLogin">登录</Button>
            <Button class="login_head_btn" size="mini" type="text" @click.native="onReg">注册</Button>
        </Header>
    </div>
</template>

<script>
    import {Header, Button} from 'element-ui';
    import "@/assets/css/login.styl";

    export default {
        name: "LoginHead",
        components:{
            Header, Button
        },
        methods:{
            onReg() {
                this.$router.push({ name: 'reg', params: { userId: 1 }})
            },
            onLogin() {
                this.$router.push({ name: 'login', params: { userId: 1 }})
            },
        }
    }
</script>

<style scoped>

</style>