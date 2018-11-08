<template>
    <div class="web_bg" :style="note">
        <LoginHead></LoginHead>
        <div class="web_bg_box">
            <Form class="login_box" status-icon ref="formName" :rules="rules" :model="formName" label-width="80px">
                <FormItem  label-width="0" prop="name">
                    <Input v-model="formName.name" placeholder="请输入用户名"></Input>
                </FormItem>
                <FormItem label-width="0" prop="pwd">
                    <Input type="password" v-model="formName.password" placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem label-width="0" prop="cap">
                    <Input style="width: 8rem" v-model="formName.cap" placeholder="请输入验证码"></Input>
                    <img class="hand fr" v-on:click="getCaptcha" v-bind:src="captchaImg" alt="验证码" title="点击刷新验证码"/>
                </FormItem>
                <FormItem>
                    <Button class="login_btn" size="mini" type="primary" @click.native="onLogin">登录</Button>
                    <Button class="login_btn" size="mini" type="primary" @click.native="onReg">注册</Button>
                    <Button class="login_btn" size="mini" type="text" @click.native="onFindPwd">忘记密码？</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    import {Form, FormItem, Input, Button} from 'element-ui';
    import LoginHead from '@/components/LoginHead.vue';
    import "@/assets/css/login.styl"

    export default {
        name: "Login",
        props: {},
        components: {
            Form, FormItem, Input, Button, LoginHead
        },
        data() {
            return {
                bgUrl: "http://yoha-admin.test/img/timg.jpg",
                note: {},
                formName: {
                    name: '',
                    password:'',
                    cap:'',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户姓名', trigger: 'blur'},
                        {min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur'}
                    ],
                    password:[
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                    cap:[
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                    ]
                },
                captchaImg:'',
            }
        },
        mounted() {
            // 加载初始数据
            let winH = window.innerHeight + 'px';
            let winW = window.innerWidth + 'px';
            console.info(winH);
            this.note = {
                backgroundImage: "url(" + this.bgUrl + ")",
                height: winH,
                width:winW
            };
            this.captchaImg = this.$config.capUrl;
            console.info(this.captchaImg)
        },
        methods: {
            test(msg) {

            },
            onReg() {
                this.$router.push({ name: 'reg', params: { userId: 1 }})
            },
            onLogin() {
                this.$refs['formName'].validate((valid) => {
                    if (valid) {
                        this.$http.post('login.login', this.formName).then(r => {
                            if (r.code === 0) {
                                this.setCache('login_token', r.data.token);
                                this.$router.push({name:'home'});
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            onFindPwd() {
                this.$router.push({ name: 'findPwdOne', params: { userId: 2 }})
            },
            getCaptcha() {
                this.captchaImg = this.$config.capUrl + "?" + Math.random();
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        computed: {
            goddsNumber() {
                return "99+"
            }
        }
    }
</script>

<style scoped lang="stylus">

</style>