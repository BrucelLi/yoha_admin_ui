<template>
    <div class="web_bg" :style="note">
        <LoginHead></LoginHead>
        <div class="web_bg_box">
            <Form class="login_box" status-icon ref="regForm" :rules="rules" :model="regForm" label-width="80px">
                <FormItem label-width="0" prop="name">
                    <Input v-model="regForm.name" placeholder="请输入用户名"></Input>
                </FormItem>
                <FormItem label-width="0" prop="pwd">
                    <Input type="password" v-model="regForm.password" placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem label-width="0" prop="pwd2">
                    <Input type="password" v-model="regForm.password_confirmation" placeholder="请确认密码"></Input>
                </FormItem>
                <FormItem label-width="0" prop="phone">
                    <Input v-model="regForm.phone" placeholder="请输入手机号"></Input>
                </FormItem>
                <FormItem label-width="0" prop="cap">
                    <Input style="width: 8rem" v-model="regForm.cap" placeholder="请输入验证码"></Input>
                    <Button class="fr" style="height: 40px" size="medium" type="primary" @click.native="onReg">获取验证码</Button>
                </FormItem>
                <FormItem>
                    <Button class="login_btn" size="mini" type="primary" @click.native="onReg">注册</Button>
                    <Button class="login_btn" size="mini" type="primary" @click.native="resetForm('regForm')">重置</Button>
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
        name: "Reg",
        components: {
            Form, FormItem, Input, Button, LoginHead
        },
        data() {
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.regForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validatePhone = (rule, value, callback) => {
                const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
                if (!value) {
                    return callback(new Error('请输入手机号'));
                }
                setTimeout(() => {
                    if (phoneReg.test(value)) {
                        callback()
                    } else {
                        callback(new Error('电话号码格式不正确'))
                    }
                }, 200);
            };
            return {
                bgUrl: "http://yoha-admin.test/img/timg.jpg",
                note: {},
                regForm: {
                    name: '',
                    password:'',
                    password_confirmation:'',
                    phone:'',
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
                    password_confirmation:[
                        {validator: validatePass2, trigger: 'blur' },
                    ],
                    phone:[
                        {validator: validatePhone, trigger: 'blur' },
                    ],
                    cap:[
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                    ]
                },
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
        },
        methods: {
            onReg() {
                this.$refs['regForm'].validate((valid) => {
                    if (valid) {
                        console.log('success !!');
                        this.$http.post('login.reg', this.regForm).then(r => console.info(r.data));
                        console.log('success post !!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="stylus">

</style>