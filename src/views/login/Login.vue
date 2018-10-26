<template>
    <div>
        <div class="web_bg" :style="note">
            <Form class="login_box" ref="form" :model="form" label-width="80px">
                <FormItem label-width="0">
                    <Input v-model="form.name" placeholder="请输入用户名"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="onSubmit">立即创建</Button>
                    <Button>取消</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    import {Form, FormItem, Input, Button} from 'element-ui';
    export default {
        name: "Login",
        props:{
        },
        components:{
            Form, FormItem, Input, Button
        },
        data() {
            return {
                bgUrl:"http://yoha-admin.test/img/timg.jpg",
                note: {
                },
                form: {
                    name: '',
                }
            }
        },
        mounted(){
            // 加载初始数据
            this.note = {
                backgroundImage: "url("+this.bgUrl+")",
            };
        },
        methods: {
            test(msg){

            },
            onSubmit() {
                console.log('submit!');
            }
        },
        computed:{
            goddsNumber(){
                return "99+"
            }
        }
    }
</script>

<style scoped lang="stylus">
    .login_box
        width 50rem
        height auto
        margin 0 auto
        background-color burlywood
        padding 15px
</style>