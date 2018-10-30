<template>
    <div class="web_bg" :style="note">
        <Form class="login_box" status-icon ref="formName" :rules="rules" :model="formName" label-width="80px">
            <FormItem label-width="0" prop="name">
                <Input v-model="formName.name" placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem label-width="0" prop="pwd">
                <Input type="password" v-model="formName.pwd" placeholder="请输入密码"></Input>
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
</template>

<script>
    import {Form, FormItem, Input, Button} from 'element-ui';

    export default {
        name: "Login",
        props: {},
        components: {
            Form, FormItem, Input, Button
        },
        data() {
            return {
                bgUrl: "http://yoha-admin.test/img/timg.jpg",
                note: {},
                formName: {
                    name: '',
                    pwd:'',
                    cap:'',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户姓名', trigger: 'blur'},
                        {min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur'}
                    ],
                    pwd:[
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                    cap:[
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                    ]
                },
                captchaImg:'http://yoha-admin.test/admin/captcha',
            }
        },
        mounted() {
            // 加载初始数据
            let winH = document.body.clientHeight + 'px';
            console.info(winH);
            this.note = {
                backgroundImage: "url(" + this.bgUrl + ")",
                height: winH,
            };
            this.getCaptcha();
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
                        console.log('success login！！');
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
                this.captchaImg =  this.captchaImg + "?" + Math.random();
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
    .login_box
        width 17.5rem
        height auto
        margin 0 auto
        background-color burlywood
        padding 30px 15px 10px 15px
    .login_btn
        margin 0 2px;
</style>