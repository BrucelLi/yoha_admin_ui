<template>
    <div class="web_bg" :style="note">
        <LoginHead></LoginHead>
        <div class="web_bg_box">
            <Tabs class="login_find_box" v-model="activeName2" type="card" @tab-click="handleClick">
                <TabPane label="密保找回" name="first">
                    <Form status-icon ref="findPwdFrom" :rules="rules" :model="findPwdFrom" label-width="80px">
                        <FormItem label-width="0" prop="name">
                            <Input v-model="findPwdFrom.name" placeholder="请输入用户名"></Input>
                        </FormItem>
                        <FormItem label-width="0" prop="phone">
                            <Input v-model="findPwdFrom.phone" placeholder="请输入手机号"></Input>
                        </FormItem>
                        <FormItem label-width="0" prop="admin_phone">
                            <Input v-model="findPwdFrom.admin_phone" placeholder="请输入超管手机号"></Input>
                        </FormItem>
                        <FormItem label-width="0" prop="password">
                            <Input type="password" v-model="findPwdFrom.password" placeholder="请输入密码"></Input>
                        </FormItem>
                        <FormItem label-width="0" prop="password_confirmation">
                            <Input type="password" v-model="findPwdFrom.password_confirmation" placeholder="请输入确认密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button class="login_btn" size="mini" type="primary" @click.native="onFindByPro('findPwdFrom', 1)">提交</Button>
                            <Button class="login_btn" size="mini" type="primary" @click.native="resetForm('findPwdFrom')">重置</Button>
                        </FormItem>
                    </Form>
                </TabPane>
                <TabPane label="短信找回" name="second">
                    <Form status-icon ref="findPwdFrom1" :rules="rules1" :model="findPwdFrom1" label-width="80px">
                        <FormItem label-width="0" prop="phone">
                            <Input v-model="findPwdFrom1.phone" placeholder="请输入手机号"></Input>
                        </FormItem>
                        <FormItem label-width="0" prop="cap">
                            <Input style="width: 8rem" v-model="findPwdFrom1.cap" placeholder="请输入验证码"></Input>
                            <Button style="height: 40px" class="fr" size="medium" type="primary" @click.native="onReg">获取验证码</Button>
                        </FormItem>
                        <FormItem label-width="0" prop="password">
                            <Input type="password" v-model="findPwdFrom1.password" placeholder="请输入新密码"></Input>
                        </FormItem>
                        <FormItem label-width="0" prop="password_confirmation">
                            <Input type="password" v-model="findPwdFrom1.password_confirmation" placeholder="请输入确认密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button class="login_btn" size="mini" type="primary" @click.native="onFindByPro('findPwdFrom1',2)">提交</Button>
                            <Button class="login_btn" size="mini" type="primary" @click.native="resetForm('findPwdFrom1')">重置</Button>
                        </FormItem>
                    </Form>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
    import {Tabs, TabPane, Form, FormItem, Input, Button} from 'element-ui';
    import LoginHead from '@/components/LoginHead.vue';
    import "@/assets/css/login.styl"

    export default {
        name: "FindPwdOne",
        components:{
            Tabs, TabPane, LoginHead, Form, FormItem, Input, Button
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
                activeName2: 'first',
                findPwdFrom: {
                    name: '',
                    password:'',
                    password_confirmation:'',
                    phone:'',
                    admin_phone: '',
                },
                findPwdFrom1: {
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
                    admin_phone:[
                        {validator: validatePhone, trigger: 'blur' },
                    ]
                },
                rules1: {
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
            };
        },
        mounted() {
            // 加载初始数据
            let winH = document.body.clientHeight + 'px';
            console.info(winH);
            this.note = {
                backgroundImage: "url(" + this.bgUrl + ")",
                height: winH,
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            onFindByPro(formName, type) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (type === 1) {
                            let formData = this.findPwdFrom.concat({type:type});
                            this.$http.post('login.reg', formData).then(r => console.info(r.data));
                        } else  {
                            let formData = this.findPwdFrom1.concat({type:type});
                            this.$http.post('login.reg', formData).then(r => console.info(r.data));
                        }
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

<style scoped>

</style>